import React from "react";
import { useState } from "react";
import "./stylesheets/TodoList.css";
import { v4 as uuidv4 } from "uuid";

const TodoList = () => {
  let [todos, settodos] = useState([
    { task: "Sample Task", id: uuidv4(), isDone: false },
  ]);
  let [newTodo, setnewTodo] = useState("");

  let addNewTask = () => {
    settodos((preValue) => {
      return [...preValue, { task: newTodo, id: uuidv4(), isTrue: false }];
    });
    setnewTodo("");
  };

  let updateTodoValues = (event) => {
    setnewTodo(event.target.value);
  };

  let deleteTask = (id) => {
    settodos((preTodos) => todos.filter((preTodos) => preTodos.id != id));
  };

  let changeAll = () => {
    settodos(() =>
      todos.map((todo) => {
        return {
          ...todo,
          isDone: true,
        };
      })
    );
  };

  let markAsDone = (id) => {
    settodos((preVal) =>
      preVal.map((todo) => {
        if (todo.id == id) {
          return {
            ...todo,
            isDone: true,
          };
        } else {
          return todo;
        }
      })
    );
  };

  return (
    <div className="container">
      <h1 className="heading">TodoList</h1>
      <div className="input-div">
        <label>
          <input
            type="text"
            placeholder="Enter A Task"
            value={newTodo}
            onChange={updateTodoValues}
          />
        </label>
        <button className="add-task" onClick={addNewTask}>Add Task</button>
      </div>
      <br></br>
      <br></br>
      <hr />
      <h2>Todo Tasks</h2>
      <ul>
        {todos.map((todo) => {
          return (
            <li key={todo.id} type="none">
              <span
                style={
                  todo.isDone
                    ? { textDecoration: "line-through", color: "gray" }
                    : {}
                }
              >
                {todo.task}
              </span>
              &nbsp;
              <button className="done-btn" onClick={() => markAsDone(todo.id)}>
                {" "}
                Done
              </button>
              <button
                className="delete-btn"
                onClick={() => deleteTask(todo.id)}
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>
      <button className="all-done-btn" onClick={changeAll}>
        Mark All Done
      </button>
    </div>
  );
};

export default TodoList;
