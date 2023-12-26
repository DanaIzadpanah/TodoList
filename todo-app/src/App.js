import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';




function App() {

  const [todos, setTodos] = useState([
    {
      content: 'Pickup some clothes',
      isCompleted: true,
    },
    {
      content: 'Chop the tree',
      isCompleted: false,
    },
    {
      content: "Do some cardio",
      isCompleted: false,
    }
  ]);

  return (
    <div className="app">
      <header className="header">
        <img src={logo} className="logo" alt="logo" />
      </header>
      <form className='todo-list'>
        <ul>
          
          {todos.map((todo, i) => (

          <div className='todo'>
            <div className='checkbox' />
            <input type='text' value={todo.content}/>
          </div>
          ))}

        </ul>
      </form>
    </div>
  );
}



export default App;
