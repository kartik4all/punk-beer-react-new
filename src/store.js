
import { createStore, combineReducers, applyMiddleware} from "redux";
import createSagaMiddleware from "redux-saga";
import Reducer from './rootReducer';
import sagas from './rootSaga';

const rootReducer = combineReducers({
    Reducer
});

let initialState = {};
const sagaMiddleware = createSagaMiddleware();

const Store = createStore(
  rootReducer,
  initialState,
 applyMiddleware(sagaMiddleware)
);
sagaMiddleware.run(sagas);

export default Store;
