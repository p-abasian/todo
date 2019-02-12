import { createStore } from "redux";
import reducer from "../reducers";

const initialState = {
    todolist:[],
    selectedTab:'all',
    togglestatus:true
};
export const store = createStore(reducer, initialState);
