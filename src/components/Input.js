import React, {Component} from "react";
import { store } from "./../store";
import { setTodo,ToggleAll } from "./../actions";
class Input extends Component {
    render() {
        return [
           <div className="input_holder" key={1}>
                <input className="todo_input"
                   onKeyDown={dispatchBtnAction}
                   placeholder="What needs to be done?"/>
               {store.getState().todolist.length>0?(
                   <button className={store.getState().togglestatus?'toggleall_btn':'toggleall_btn selected'}
                           onClick={toggleAll}>
                       <i className="fa fa-angle-down"></i></button>
               ):""}

           </div>
        ];
    }
}


function toggleAll(e){
    const item={
        allstatus:store.getState().togglestatus
    }
    store.dispatch(ToggleAll(item));
}

let id=0;
function dispatchBtnAction(e) {
    if (e.keyCode === 13) {
        const todoitem = e.target.value;
        e.target.value = "";
        const item={
            id:id++,
            title:todoitem,
            completed:false,
            editable:false
        }
        store.dispatch(setTodo(item));
    }

}

export default Input;
