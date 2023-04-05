import { compose, createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
// import logger from 'redux-logger';
import { rootReducer } from './root-reducer';

const loggerMiddleware = (store) => (next) => (action) =>{
    if(!action.type){
        return next();
    }

    console.log('type: ', action.type);
    console.log('payload: ', action.payload);
    console.log('currentUser: ', store.getState());

    next(action);

    console.log('next state: ', store.getState());
}

const persistConfig = {
    key: 'root',
    storage,
    blacklist: ['user']
};

const persistedReducer = persistReducer(persistConfig, rootReducer)

const middlewares = [loggerMiddleware];

const composeEnhancers = compose(applyMiddleware(...middlewares))

export const store = createStore(persistedReducer, undefined, composeEnhancers);

export const  persistor = persistStore(store)
