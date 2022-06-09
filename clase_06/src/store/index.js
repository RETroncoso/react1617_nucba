import { createStore } from "redux";
import reducer from "../reducers";

const store = createStore(reducer);

store.subscribe(() => console.log("Cambio el estado"));

export default store;
