import infoReduser from "./infoReduser";
import navReduser from "./navReduser";
import thunkMiddleware from "redux-thunk"
import { reducer as formReducer } from 'redux-form'

const { createStore, combineReducers, applyMiddleware } = require("redux");

let redusers= combineReducers({
    infoData: infoReduser,
    navData:navReduser,
    //form: formReducer
});

let store=createStore(redusers,applyMiddleware(thunkMiddleware));

export default store