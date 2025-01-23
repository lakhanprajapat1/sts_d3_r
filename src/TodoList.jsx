import React from "react";
import { useState } from "react";

const TodoList = () => {
  let [todos, settodos] = useState([]);
  let [newTodo, setnewTodo] = useState([""]);

  let addNewTask = () => {
    settodos([...todos, newTodo])
  };

  let updateTodoValues = (event) => {
    setnewTodo(event.target.value);
  };
  return (
    <div>
      <h1>TodoList</h1>
      <label>
        <input
          type="text"
          placeholder="Enter A Task"
          value={newTodo}
          onChange={updateTodoValues}
        />
      </label>
      <button onClick={addNewTask}>Add Task</button>
      <br></br>
      <br></br>
      <h2>Todo Tasks</h2>
      <ul>
        {todos.map((e) => { return <li type="none">{e}</li>;  })}
      </ul>
    </div>
  );
};

export default TodoList;
