import { createStore, applyMiddleware } from "redux";
import rootReducer from "./rootReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";
import sagaWatcher from "./sagas";

const saga = createSagaMiddleware();

const store = createStore(rootReducer, composeWithDevTools(
  applyMiddleware(saga)
));

saga.run(sagaWatcher);

export default store;
