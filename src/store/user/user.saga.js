import { takeLatest, call, all, put } from 'redux-saga/effects';
import { USER_ACTION_TYPE } from './user.types';

import { signInSuccess, signInFailed } from './user.action';
import {
  createUserDocumentFromAuth,
  getCurrentUser,
  signInAuthWithEmailAndPassword,
  signInWithGooglePopup,
} from '../../utils/firebase/firebase.util';

export function* getSnapshotFromUserAuth(userAuth, additionalDetails) {
  try {
    const userSnapshot = yield call(
      createUserDocumentFromAuth,
      userAuth,
      additionalDetails
    );
    yield put(signInSuccess({ id: userSnapshot.id, ...userSnapshot.data() }));
    console.log(userSnapshot);
    console.log(userSnapshot.data());
  } catch (error) {
    yield put(signInFailed(error));
  }
}

export function* signInWithGoogle({ payload: { email, password } }) {
  try {
    const { user } = yield call(
      signInAuthWithEmailAndPassword(email, password)
    );
    yield call(getSnapshotFromUserAuth, user);
  } catch (error) {
    yield put(signInFailed(error));
  }
}

export function* signInWithEmail() {
  try {
    const { user } = yield call(signInWithGooglePopup);
    yield call(getSnapshotFromUserAuth, user);
  } catch (error) {
    yield put(signInFailed(error));
  }
}

export function* isUserAuthenticated() {
  try {
    const userAuth = yield call(getCurrentUser);
    if (!userAuth) return;
    yield call(getSnapshotFromUserAuth, userAuth);
  } catch (error) {
    yield put(signInFailed(error));
  }
}

export function* onGoogleSignInStart() {
  yield takeLatest(USER_ACTION_TYPE.GOOGLE_SIGN_IS_START, signInWithGoogle);
}
export function* onEmailSignInStart() {
  yield takeLatest(USER_ACTION_TYPE.EMAIL_SIGN_IN_START, signInWithGoogle);
}

export function* onCheckUserSession() {
  yield takeLatest(USER_ACTION_TYPE.CHECK_USER_SESSION, isUserAuthenticated);
}

export function* userSagas() {
  yield all([
    call(onCheckUserSession),
    call(onGoogleSignInStart),
    call(onEmailSignInStart),
  ]);
}
