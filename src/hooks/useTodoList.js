import { useReducer } from "react";

function todoListReducer(state, { type, payload }) {
  switch (type) {
    case "UPDATE_TODO_LIST":
      return {
        ...state,
        todoList: state.todoList.concat(payload),
        inputValue: "",
      };

    case "UPDATE_TODO":
      return {
        ...state,
        inputValue: payload,
      };
    case "DELETE_TODO":
      return {
        ...state,
        todoList: state.todoList.filter((_, index) => index !== payload),
      };
    default:
      return state;
  }
}

function actionCreators(dispatch) {
  return {
    updateInput: (value) => {
      dispatch({ type: "UPDATE_TODO", payload: value });
    },
    updateTodoList: (value) => {
      dispatch({ type: "UPDATE_TODO_LIST", payload: value });
    },
    deleteTodo: (value) => {
      dispatch({ type: "DELETE_TODO", payload: value });
    },
  };
}

export function useTodoList(initialState) {
  const [state, dispatch] = useReducer(todoListReducer, initialState);
  const actions = actionCreators(dispatch);
  return [state, actions];
}
