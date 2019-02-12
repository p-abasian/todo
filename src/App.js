import React, { Component } from "react";
import TodoList from "./components/TodoList";
import Input from './components/Input';
import { store } from "./store";

class App extends Component {
  render() {
    return [
        <Input key={1}/>,
        <TodoList key={2} todolist={store.getState().todolist}/>
      /*<HelloWorld key={2} tech={store.getState().tech} />,
      <ButtonGroup key={3} technologies={["React", "Elm", "React-redux"]} />*/
    ];
  }
}

export default App;
