import { createStore, applyMiddleware, compose } from "redux";
import { persistStore } from "redux-persist";
import persistReducers from "./persistReducers";
import createSagaMiddleware from "redux-saga";

import rootReducer from "./modules/rootReducer";
import rootSaga from "./modules/rootSaga";

const sagaMonitor =
  process.env.NODE_ENV === "development"
    ? console.tron.createSagaMonitor()
    : null;

const sagaMiddleware = createSagaMiddleware({
  sagaMonitor,
});

// reactotron redux

const enhancer =
  process.env.NODE_ENV === "development"
    ? compose(console.tron.createEnhancer(), applyMiddleware(sagaMiddleware))
    : applyMiddleware(sagaMiddleware);

// store do redux
const store = createStore(persistReducers(rootReducer), enhancer);

const persistor = persistStore(store);
sagaMiddleware.run(rootSaga);
export { store, persistor };
