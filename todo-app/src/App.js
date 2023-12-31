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
    if (e.key === 'Backspace' && todos[i].content === '') {
      e.preventDefault();
      return removeTodoAtIndex(i);
    }
  }

  // To remove a todo item at a specified index.
  function removeTodoAtIndex(i) {
    if (i === 0 && todos.length === 1) return;
    setTodos(todos => todos.slice(0, i).concat(todos.slice(i + 1, todos.length)));
    setTimeout(() => {
      document.forms[0].elements[i - 1].focus();
    }, 0);
  }


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

  /**
   * It is called everytime the value in an input field changes.
   * @param {*} e -> is an event object, not just the value that was changed 
   * @param {*} i -> is the index 
   */
  function updateTodoAtIndex(e, i) {
    const newTodos = [...todos]; // This creates a copy as mentioned before of all todos 
    newTodos[i].content = e.target.value; // you can accesss of the input using e.target.value 
    setTodos(newTodos);
  }

  function toggleTodoCompleteAtIndex(index) {
    const tmpTodo = [...todos];
    tmpTodo[index].isCompleted = !tmpTodo[index].isCompleted;
    setTodos(tmpTodo);
  }

  return (
    <div className="app">
      <header className="header">
        <img src={logo} className="logo" alt="logo" />
      </header>
      <form className='todo-list'>
        <ul>

          {todos.map((todo, i) => (

          
          <div className= {`todo ${todo.isCompleted && 'todo-is-completed'}`}>
            <div className={'checkbox'} onClick= {() => toggleTodoCompleteAtIndex(i)} />
            {todo.isCompleted && (
              <span>&#x2714;</span>
            )}
            <input
              type="text"
              value={todo.content}
              // it listens for key presses 
              // e: The event object, which contains information about the key press.
              // i: The index of the current todo item.
              onKeyDown={e => handleKeyDown(e, i)}
              onChange={e => updateTodoAtIndex(e,i)}
            />
          </div>
          ))}

        </ul>
      </form>
    </div>
  );
}



export default App;
