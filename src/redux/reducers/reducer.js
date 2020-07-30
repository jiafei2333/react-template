import {combineReducers} from 'redux';
import { connectRouter } from 'connected-react-router';
import appReducer from './appReducer';
import routerReducer from './routerReducer';

const createRootReducer = (history) => combineReducers({
    router: connectRouter(history),
    appReducer,
    routerReducer
  })
export default createRootReducer;
