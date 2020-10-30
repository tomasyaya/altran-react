import { useReducer } from "react";

function todoListReducer(state, { type, payload }) {
  switch (type) {
    case "UPDATE_TODO_LIST":
      return {
        ...state,
        todoList: state.todoList.concat(payload),
      };

    case "UPDATE_INPUT":
      return {
        ...state,
        inputValue: payload,
      };

    case "TOGGLE_ITEM":
      return {
        ...state,
        todoList: state.todoList.map((item) => {
          if (item.uid === payload) {
            return {
              ...item,
              completed: !item.completed
            }
          }
          return { ...item };
        })
      }

    case "TOGGLE_PENDING":
      return {
        ...state,
        todoList: state.todoList.map((item) => {
          if (item.uid === payload) {
            return {
              ...item,
              pending: !item.pending
            }
          }
          return {...item};
        })
      }

    case "DELETE_ITEM":
      return {
        ...state,
        todoList: state.todoList.filter((item) => item.uid !== payload),
      };

    default:
      return state;
  }
}

function actionCreators(dispatch) {
  return {
    updateInput: (value) => {
      dispatch({ type: "UPDATE_INPUT", payload: value });
    },
    updateTodoList: (value) => {
      dispatch({ type: "UPDATE_TODO_LIST", payload: value });
    },
    deleteTodo: (value) => {
      dispatch({ type: "DELETE_ITEM", payload: value });
    },
    toggleTodo: (value) => {
      dispatch({ type: "TOGGLE_ITEM", payload: value })
    },
    togglePending: (value) => {
      dispatch({ type: "TOGGLE_PENDING", payload: value })
    }
  };
}

export function useTodoList(initialState) {
  const [state, dispatch] = useReducer(todoListReducer, initialState);
  const actions = actionCreators(dispatch);
  return [state, actions];
}
