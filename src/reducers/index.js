export default (state, action) => {
  switch (action.type) {
        case "SET_TODO":
            return Object.assign({}, state, {
                todolist: [
                    ...state.todolist,
                    {
                        id: action.todo.id,
                        title: action.todo.title,
                        status: 'active',
                        editable:false
                    }
                ],
                itemsleft:state.todolist.filter(todo => todo.status ==='active').length
            });
        case "UPDATE_TODO":
            const todoindex = state.todolist.findIndex(todo => todo.id === parseInt(action.todo.id));
            return Object.assign({}, state, {
                todolist: [
                    ...state.todolist.slice(0, todoindex),
                    {
                        ...state.todolist[todoindex],
                        status: action.todo.status,
                    },
                    ...state.todolist.slice(todoindex + 1),
                ],
                itemsleft:state.todolist.filter(todo => todo.status ==='active').length
            });
        case "FILTER_SHOW":
            return Object.assign({}, state, {
                selectedTab:action.selectedtab
            });
        case "SHOW_ALL":
            return Object.assign({}, state, {
                selectedTab:action.selectedtab
            });
        case "TOGGLE_EDIT":
            const index = state.todolist.findIndex(todo => todo.id === parseInt(action.todo.id));
            return Object.assign({}, state, {
                todolist: [
                    ...state.todolist.slice(0, index),
                    {
                        ...state.todolist[index],
                        editable: !state.todolist[index].editable,
                    },
                    ...state.todolist.slice(index + 1),
                ]
            });
        case "EDIT_TODO":
            const id = state.todolist.findIndex(todo => todo.id === parseInt(action.todo.id));
            return Object.assign({}, state, {
                todolist: [
                    ...state.todolist.slice(0, id),
                    {
                        ...state.todolist[id],
                        title: action.todo.title
                    },
                    ...state.todolist.slice(id + 1),
                ],
            itemsleft:state.todolist.filter(todo => todo.status ==='active').length
            });
        case "EDIT_DONE_TODO":
        const todoid = state.todolist.findIndex(todo => todo.id === parseInt(action.todo.id));
        return Object.assign({}, state, {
            todolist: [
                ...state.todolist.slice(0, todoid),
                {
                    ...state.todolist[todoid],
                    editable: false
                },
                ...state.todolist.slice(todoid + 1),
            ],
        itemsleft:state.todolist.filter(todo => todo.status ==='active').length
        });
        case "DELETE_TODO":
            return Object.assign({}, state, {
                todolist: [
                    ...state.todolist.filter(todo => todo.id !== parseInt(action.todo.todo.id))
                ],
            itemsleft:state.todolist.filter(todo => todo.status ==='active').length
            });
        case "TOGGLE_ALL":
        const newstatus=action.todo.allstatus?'active':'completed';
        return { 
            ...state, 
            todolist: state.todolist.map(
                (todo, i) => todo.status === newstatus ? {...todo, status: (action.todo.allstatus?'completed':'active')}
                                        : todo
            ),
            togglestatus:!state.togglestatus
         }
         case "CLEAR_COMPLETED":
         return Object.assign({}, state, {
            todolist: [
                ...state.todolist.filter(todo => todo.status ==='active')
            ],
        itemsleft:state.todolist.filter(todo => todo.status ==='active').length
        });
    default:
      return state;
  }
};
