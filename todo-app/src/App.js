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

  function handleKeyDown(e, i) {
    if(e.key === 'Enter'){
      createTodoAtIndex(e,i);
    }
  }

  function createTodoAtIndex(e, i) {
    const newTodos = [...todos];
    newTodos.splice(i + 1, 0, {
      content: '',
      isCompleted: false,
    });
    setTodos(newTodos);
    setTimeout(() => {
      document.forms[0].elements[i + 1].focus();
    }, 0);
  }

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
            <input
              type="text"
              value={todo.content}
              onKeyDown={e => handleKeyDown(e, i)}
            />
          </div>
          ))}

        </ul>
      </form>
    </div>
  );
}



export default App;
