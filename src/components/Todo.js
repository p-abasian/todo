import React from "react";
import { store } from "./../store";
import { UpdateTodo,ToggleEdit,EditTitle ,DeleteTodo,EditDoneTitle} from "./../actions";

const Todo = ({ todo , id ,selectedTab}) => (
            <li id={id}
                data-completed={todo.status}
                data-show={selectedTab}
                className={selectedTab===todo.status || selectedTab==='all'?'show':'hide'}
                data-editable={todo.editable}
                //onClick={dispatchBtnAction}
            >
             <input data-id={id} data-title={todo.title} checked={todo.status==='completed'?true:false} onChange={dispatchBtnAction} type="checkbox"/>
                <label data-id={id} onDoubleClick={handleclick}>
                    {todo.title}
                </label>
               <input data-id={id}
                      className="editableinput"
                      onChange={editTodo}
                      autoFocus={true}
                      onKeyDown={keydown}
                      onBlur={handleblur} type="text" value={todo.title} />
                <button onClick={() => deleteTodo({todo})} className="delete_btn">
                    <i className="fa fa-times"></i>
                </button>
            </li>
);
function keydown(event){
    if (event.keyCode === 13) {
        handleblur(event);
    }
}
function handleblur(e){
    const action={
        id:e.target.dataset.id,
        editable:false
    }
    store.dispatch(EditDoneTitle(action));
}
function editTodo(e){
    const action={
        id:e.target.dataset.id,
        title:e.target.value
    }
    store.dispatch(EditTitle(action));
}
function handleclick(event){
    const action={
        id:event.target.dataset.id
    }

    store.dispatch(ToggleEdit(action));
}
function deleteTodo(todo){
    store.dispatch(DeleteTodo(todo));
}
function dispatchBtnAction(e) {
        const action={
            id:e.target.dataset.id,
            title:e.target.dataset.title,
            status:(e.target.checked?'completed':'active')
        }
        store.dispatch(UpdateTodo(action));
}

export default Todo;
