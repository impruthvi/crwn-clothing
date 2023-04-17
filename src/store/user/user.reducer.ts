import { AnyAction } from 'redux';
import {
  signInFailed,
  signOutFailed,
  signOutSuccess,
  signInSuccess,
  signUpFailed,
} from './user.action';
import { UserData } from '../../utils/firebase/firebase.util';

export type UserState = {
  readonly currentUser: UserData | null;
  readonly isLoading: boolean;
  readonly error: Error | null;
};

const INITIAL_USER: UserState = {
  currentUser: null,
  isLoading: false,
  error: null,
};

export const userReducer = (state = INITIAL_USER, action = {} as AnyAction) => {
  if (signInSuccess.match(action)) {
    return {
      ...state,
      currentUser: action.payload,
    };
  }

  if (signOutSuccess.match(action)) {
    return { ...state, currentUser: null };
  }

  if (
    signInFailed.match(action) ||
    signUpFailed.match(action) ||
    signOutFailed.match(action)
  ) {
    return {
      ...state,
      error: action.payload,
    };
  }
  return state;
};
