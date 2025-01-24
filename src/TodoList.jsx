import React from "react";
import { useState } from "react";
import "./stylesheets/TodoList.css";
import { v4 as uuidv4 } from "uuid";

const TodoList = () => {
  let [todos, settodos] = useState([{ task: "sample Task", id: uuidv4() }]);
  let [newTodo, setnewTodo] = useState("");

  let addNewTask = () => {
    settodos((preValue) => {
      return [...preValue, { task: newTodo, id: uuidv4() }];
    });
    setnewTodo("");
  };

  let updateTodoValues = (event) => {
    setnewTodo(event.target.value);
  };

  let deleteTask = (id) => {
    settodos((preTodos) => todos.filter((preTodos) => preTodos.id != id));
  };

  let changeAll= ()=>{
    
  }
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
      <hr />
      <h2>Todo Tasks</h2>
      <ul>
        {todos.map((todo) => {
          return (
            <li key={todo.id} type="none">
              <span>{todo.task}</span>
              &nbsp;
              <button onClick={() => deleteTask(todo.id)}>Delete</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TodoList;
