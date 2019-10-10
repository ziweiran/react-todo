import React from "react";

const Todos = ({ todos }) => (
  <ul>
    {todos.map((todo, i) => (
      <Todo key={`${todo}-${i}`} todo={todo} />
    ))}
  </ul>
);

const Todo = ({ todo }) => <li>{todo}</li>;

export default Todos;
