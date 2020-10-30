import React, { useState } from "react";

import RemainingItems from "./components/RemainingItems";
import CompletedItems from "./components/CompletedItems";

import { useTodoList } from "./hooks/useTodoList";
import { getApiData } from "./mock/api";

const initialState = {
  inputValue: "",
  todoList: [],
};

function App() {
  const [showCompleted, setShowCompleted] = useState(false);
  const callback = () => {
    getApiData().then(actions.updateTodoList);
  };

  
  const [state, actions] = useTodoList(initialState);
  React.useEffect(callback, []);
  
  function toggleView () {
    setShowCompleted((e) => !e);
  }

  const buttonText = showCompleted
    ? 'SHOW REMAINING'
    : 'SHOW COMPLETED';

  const _renderContent = showCompleted
    ? <CompletedItems state={state} actions={actions} />
    : <RemainingItems state={state} actions={actions} />;

  return (
    <div className="App">
      <h1>TODO LIST ROD</h1>
      {_renderContent}
      <button onClick={toggleView}>{buttonText}</button>
    </div>
  );
}

export default App;
