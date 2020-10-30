import React from "react";

import { ItemsList } from './ItemsList';

function CompletedItems({ state, actions }) {
  function toggleTodo(itemUid) {
    actions.toggleTodo(itemUid)
  }

  const completedItems = state.todoList
    .map((todo, i) => {
      if (todo.completed === true) {
        return (
          <li onClick={() => toggleTodo(todo.uid)} key={`${i}_${todo}`}>
            {todo.text}
          </li>
        )
      }
      return null;
    })
    .filter((e) => e !== null);

  return (
    <ItemsList itemsList={completedItems} />
  );
}

export default CompletedItems;
