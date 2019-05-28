import { createStore, combineReducers } from "redux";
import {reduce} from '../reducers/reduce'
import { ratreduce } from "../reducers/ratreduce";
export const store = createStore(combineReducers({reduce, ratreduce}),window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())