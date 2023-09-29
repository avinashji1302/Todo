import React, { useState } from "react";
import "./Todo.css";

function Todo() {
  const [todo, setTodo] = useState("");
  const [list, setList] = useState([]);
  const addHandle = (e) => {
    e.preventDefault();
    if (todo !== "") {
      setList([...list, todo]);
      setTodo("");
    } else {
      alert("Can not add Empty Task");
    }
  };

  const handleDelete = (id) => {
    const updatedList = list.filter((_, index) => index !== id);

    setList(updatedList);
  };
  return (
    <div className="main">
      <div>
        <h1>Todo List Assignment</h1>
        <input
          type="text"
          placeholder="Write your Todo"
          onChange={(e) => setTodo(e.target.value)}
          value={todo}
        />
        <button onClick={addHandle}>Add</button>
      </div>
      <div className="result">
        <ul>
          {list &&
            list.map((todo, index) => {
              return (
                <li key={index}>
                  {todo}
                  <button onClick={() => handleDelete(index)}>Delete</button>
                </li>
              );
            })}
        </ul>
      </div>
    </div>
  );
}

export default Todo;
