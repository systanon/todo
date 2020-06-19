import { GET_TODO_LIST } from './actionTypes';

const initialState = {
  todoList: [],
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_TODO_LIST:
      return {
        ...state,
        todoList: action.payload,
      };
    default:
      return initialState;
  }
};
