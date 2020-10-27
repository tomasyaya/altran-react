import React from "react";

export function TodoList({ todoList, handleClick }) {
  return (
    <ul>
      {todoList.map((todo, i) => (
        <li onClick={() => handleClick(i)} key={`${i}_${todo}`}>
          {todo}
        </li>
      ))}
    </ul>
  );
}
