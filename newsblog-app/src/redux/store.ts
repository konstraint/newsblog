import { applyMiddleware, combineReducers, createStore } from "redux";
import createSagaMiddleware from 'redux-saga'
import { all } from "redux-saga/effects";
import { watcherUser } from "./action_creators";
import userAuthorize_reducer from "./reducers/userAuthorize_reducer";
import userError_reducer from "./reducers/userError_reducer";

const sagaMiddleware = createSagaMiddleware();

function* rootSaga() {
    yield all([
        watcherUser(),
    ])
};

export default createStore(combineReducers({ 
    user: userAuthorize_reducer,
    signUpErrors: userError_reducer,
}), applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);