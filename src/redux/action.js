import { HttpService } from '../httpServices/HttpService';
import { GET_TODO_LIST } from './actionTypes';

export const getTodoList = () => async (dispatch) => {
  const todoList = await HttpService.getTodoList('/todos');
  dispatch({
    type: GET_TODO_LIST,
    payload: todoList,
  });
};

export const deleteItem = (id) => async (dispatch) => {
  await HttpService.deleteItem(id);
  dispatch(getTodoList());
};
export const postListItem = (body) => async (dispatch) => {
  await HttpService.postListItem(body);
  dispatch(getTodoList());
};

export const putListItem = (id,body) => async (dispatch) => {
  await HttpService.putListItem(id,body);
  dispatch(getTodoList());
};
