import React from "react";
import Todo from './Todo';
import { store } from "./../store";
import {showall,showfilter,clearcompleted} from './../actions';

const TodoList = ({ todolist }) => (
    <div className={todolist.length>0?"results":"hide"}>
        <ul className="todo_list">
            {todolist.map((todo, i) => (
                <Todo
                    key={i}
                    todo={todo}
                    selectedTab={store.getState().selectedTab}
                    id={todo.id}
                />
            ))}
        </ul>
       <div className="btn_holder">
       <span>{store.getState().todolist.filter(todo => todo.status ==='active').length} items are left</span>
        <button className={store.getState().selectedTab==='all'?'btn active':'btn'} data-selectedtab="all" onClick={showAll} >All</button>
        <button className={store.getState().selectedTab==='active'?'btn active':'btn'} data-selectedtab="active" onClick={filterShow} >Active</button>
        <button className={store.getState().selectedTab==='completed'?'btn active':'btn'} data-selectedtab="completed" onClick={filterShow} >Completed</button>
        <button className={store.getState().todolist.filter(todo => todo.status ==='completed').length>0?'clearbtn btn':'hide'} 
        onClick={clearCompleted}>Clear Completed</button>
       </div>
    </div>
);
function clearCompleted(e){
    const action='clear';
    store.dispatch(clearcompleted(action));
}
function showAll(e) {
    const selectedTab=e.target.dataset.selectedtab;
    store.dispatch(showall(selectedTab));
}
function filterShow(e) {
    const selectedTab=e.target.dataset.selectedtab;
    store.dispatch(showfilter(selectedTab));
}


export default TodoList;
