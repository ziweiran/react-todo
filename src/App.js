import React from "react";

import Todos from "./Todos";

import "./App.css";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      todos: []
    };

    this.todoRef = React.createRef();
    this.addTodo = this.addTodo.bind(this);
  }

  addTodo() {
    this.setState({
      todos: [...this.state.todos, this.todoRef.current.value]
    });
    this.todoRef.current.value = "";
  }

  render() {
    return (
      <div className="container">
        <div className="input">
          <input type="text" ref={this.todoRef} />
          <button onClick={this.addTodo}>ADD</button>
        </div>
        <Todos todos={this.state.todos} addTodo={this.addTodo} />
      </div>
    );
  }
}

export default App;
