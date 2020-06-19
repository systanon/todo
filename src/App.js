import React from 'react';
import { store } from "./redux/index";
import { Provider } from "react-redux";
import './App.css';
import {TodoList} from "./components/todoList/TodoList";

function App() {
  return (
      <Provider store={store}>
        <div className="App">
          <TodoList/>
        </div>
      </Provider>

  );
}

export default App;
