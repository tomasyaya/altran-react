import React from "react";
import { v4 as uuidv4 } from 'uuid';

import { Form } from './Form';
import { ItemsList } from './ItemsList';

import { sendApiData } from '../mock/api'

function RemainingItems({ state, actions }) {
  function handleSubmit(e) {
    e.preventDefault();
    const newItem = {
      uid: uuidv4(),
      text: state.inputValue,
      completed: false,
      pending: true
    }

    actions.updateTodoList(newItem);
    sendApiData(newItem, false)
      .then((res) => {
        actions.togglePending(newItem.uid);
        console.log('res', res);
      })
      .catch((err) => {
        actions.deleteTodo(newItem.uid);
        console.log('err', err);
      })
    actions.updateInput('');
  }

  function handleChange({ target }) {
    actions.updateInput(target.value);
  }

  function toggleTodo(itemUid) {
    actions.toggleTodo(itemUid)
  }

  const remainingItems = state.todoList
    .map((todo, i) => {
      if (todo.completed === false) {
        return (
          <li 
            onClick={() => toggleTodo(todo.uid)} key={`${i}_${todo}`}
            className={todo.pending ? 'pending' : 'validated'}
          >
            {todo.text}
          </li>
        )
      }
      return null;
    })
    .filter((e) => e !== null);

  return (
    <div>
      <ItemsList itemsList={remainingItems} />
      <Form
        inputValue={state.inputValue}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    </div>
  );
}

export default RemainingItems;
