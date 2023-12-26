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


  /*
  This is basically an event handler, a function that get called in response to an event 
  Purpose: to determine what to do when a key is pressed. 
  */
  function handleKeyDown(e, i) {
    if(e.key === 'Enter'){
      createTodoAtIndex(e,i);
    }
  }

  /**
   * 
   * @param {*} e 
   * @param {*} i 
   */
  function createTodoAtIndex(e, i) {
    // newTodos is a copy of todos with all of the elements copied. Never change the actual array 
    const newTodos = [...todos];
    // splice is used to insert a new element right afte the current one which is 'i'
    // { content: '', isCompleted: false } is the new todo item, initially empty and not completed.
    newTodos.splice(i + 1, 0, {
      content: '',
      isCompleted: false,
    });
    setTodos(newTodos);
    setTimeout(() => {
      document.forms[0].elements[i + 1].focus();
    }, 0);
  }

  function updateTodoAtIndex(e, i) {
    const newTodos = [...todos];
    newTodos[i].content = e.target.value;
    setTodos(newTodos);
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
              // it listens for key presses 
              // e: The event object, which contains information about the key press.
              // i: The index of the current todo item.
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
