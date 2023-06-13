import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import rootReducer from "../reducer/reducer";

const store = createStore(rootReducer, applyMiddleware(thunk));

 store.subscribe(()=>console.log(store.getState()));

export default store;
