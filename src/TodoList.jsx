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
      if(newTodo.length == 0){
        return preValue;
      }else{
        return [...preValue, { task: newTodo, id: uuidv4(), isTrue: false }];
      }
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
        </label> <br></br>
        <button className="add-task" onClick={addNewTask}>Add Task</button>
      </div>
      <br></br>
      <br></br>
      <hr />
      <h2><img src="https://w7.pngwing.com/pngs/185/850/png-transparent-task-computer-icons-tasks-s-angle-text-microsoft-office-thumbnail.png" alt="" /> Tasks</h2>
      <ul className="list-box">
        {todos.map((todo) => {
          return (
            <li key={todo.id}>
              <span
                style={
                  todo.isDone
                    ? { textDecoration: "line-through", color:"#7d7d7d" }
                    : {}
                }
              >
                {todo.task}
              </span>
              &nbsp;
              <div className="right-button">
              <button className="done-btn" onClick={() => markAsDone(todo.id)}>Done</button>
              <button className="delete-btn" onClick={() => deleteTask(todo.id)}>Delete</button>
              </div>
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
