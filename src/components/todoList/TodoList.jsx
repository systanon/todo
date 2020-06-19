import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteItem, getTodoList } from '../../redux/action';
import { ModalWindow } from '../modalWindow';

export const TodoList = () => {
  const [openPostModal, setOpenPostModal] = useState(false);
  const [openPutModal, setOpenPutModal] = useState(false);
  const [method, setMethod] = useState('');
  const [id, setId] = useState(null);
  const dispatch = useDispatch();
  const todoList = useSelector((state) => state.todo.todoList);

  useEffect(() => {
    dispatch(getTodoList());
  }, [dispatch]);

  // const handleOpenModal = () => {
  //   setOpenModal(true);
  // };

  const handleCloseModal = () => {
    console.log(method)
    // method === 'post' ? setOpenPostModal(false) : null;
    // method === 'put' ? setOpenPutModal(false) : null;
    // return
  };

  return (
    <div className="todo_container">
      <button
        onClick={() => {
          setMethod('post');
          setOpenPostModal(true);
        }}
      >
        open modal
      </button>
      {todoList.map((item) => (
        <div key={item.id}>
          <h2>{item.name}</h2>
          <p>{item.text}</p>
          <p>Checked:{item.checked.toString()}</p>
          <button
            onClick={() => {
              setMethod('put');
              setId(item.id);
              setOpenPutModal(true);
            }}
          >
            Edit
          </button>
          <button
            onClick={() => {
              dispatch(deleteItem(item.id));
            }}
          >
            delete item
          </button>
        </div>
      ))}
      {openPostModal && (
        <ModalWindow method={method} closeModal={handleCloseModal} />
      )}
      {openPutModal && (
        <ModalWindow id={id} method={method} closeModal={handleCloseModal} />
      )}
    </div>
  );
};

