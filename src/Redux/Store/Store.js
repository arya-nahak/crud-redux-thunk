import { applyMiddleware, combineReducers, createStore } from "redux";
import Reducer from "../CRUD/Reducer";
import thunk from "redux-thunk";

const middleware = [thunk]

const rootReducer = combineReducers({
    user:Reducer,
})

const Store = createStore(rootReducer,applyMiddleware(...middleware))

export default Store