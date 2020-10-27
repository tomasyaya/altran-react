import React from "react";
import { Form } from "./components/Form";
import { TodoList } from "./components/TodoList";
import { useTodoList } from "./hooks/useTodoList";

const initialState = {
  inputValue: "",
  todoList: [],
};

const data = ["tarea uno", "tarea dos", "tarea tres"];

function getApiData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([...data]);
    }, 2000);
  });
}

function App() {
  const [list, setList] = React.useState([]);
  const callback = () => {
    const saveList = (list) => setList(list);
    getApiData().then(saveList);
  };
  console.log(list);
  const [state, actions] = useTodoList(initialState);

  React.useEffect(callback, [state.inputValue]);
  function handleSubmit(e) {
    e.preventDefault();
    actions.updateTodoList(state.inputValue);
  }

  function handleChange({ target }) {
    actions.updateInput(target.value);
  }

  function deleteItem(inputIndex) {
    actions.deleteTodo(inputIndex);
  }

  return (
    <div className="App">
      <h1>TODO LIST ROD</h1>
      <TodoList todoList={state.todoList} handleClick={deleteItem} />
      <Form
        inputValue={state.inputValue}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
      <h2>List de useEffect</h2>
      {list.map((value, index) => (
        <p key={index}>{value}</p>
      ))}
    </div>
  );
}

export default App;
