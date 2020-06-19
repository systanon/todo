import React, { useState } from 'react';
import {getTodoList, postListItem, putListItem} from '../../redux/action';
import { HttpService } from '../../httpServices/HttpService';
import './modalWindow.css';
import { useDispatch, useSelector } from 'react-redux';

export const ModalWindow = ({ closeModal, id, method }) => {
  const dispatch = useDispatch();
  const todoList = useSelector((state) => state.todo.todoList);

  const [name, setName] = useState('');
  const [text, setText] = useState('');
  const [checked, setChecked] = useState(false);

  // const inputModal = {
  //   name: name,
  //   text: text,
  //   checked: check,
  // };
  if (method === 'put') {
    const { name, text, checked } = todoList.filter((item) => item.id === id);
    setName(name);
    setText(text);
    setChecked(checked);
  }
  const handleName = ({ target }) => {
    setName(target.value);
  };
  const handleText = ({ target }) => {
    setText(target.value);
  };
  const handleCheck = ({ target }) => {
    setChecked(target.checked);
  };
  const handler = () => {
    if (method === 'put') {
      dispatch(putListItem(id, { name, text, checked }));
    }
    if (method === 'post') {
      dispatch(postListItem({ name, text, checked }));
    }
    closeModal();
  };
  return (
    <div className="modal-wrap">
      <input type="text" onInput={handleName} />
      <textarea rows="10" cols="45" name="text" onInput={handleText} />
      <input type="checkbox" onChange={handleCheck} />
      <button onClick={handler}>Submit</button>
      <button onClick={closeModal}>Close</button>
    </div>
  );
};
