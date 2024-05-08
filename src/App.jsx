import React, { useState } from 'react';
import './index.css';
const App = () => {
  const [todos, setTodos] = useState([]);
  const [editingTodo, setEditingTodo] = useState(null);
  const [inputValue, setInputValue] = useState('');

  const addTodo = () => {
    if (inputValue.trim() !== '') {
      setTodos([...todos, { id: todos.length + 1, text: inputValue, completed: false }]);
      setInputValue('');
    }
  };

 

  const openEditModal = (todo) => {
    setEditingTodo(todo);
    setInputValue(todo.text);
  };

  const closeEditModal = () => {
    setEditingTodo(null);
    setInputValue('');
  };

 

  return (
    <div className='card'>
      <h1 className='title'>React To Do App</h1>
      <input className='text-input' type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
      <button  className='add-btn'onClick={addTodo}>Add Todo</button>
      <ul className='card-list'>
        {todos.map(todo => (
          <li className='card-item' key={todo.id}>
                    <p className='card-text'>    
                      {todo.text}
                   </p>
          
          </li>
        ))}
      </ul>
      {editingTodo && (
        <div className="modal">
          <input className='edit-input' type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
          <button className='save-btn' onClick={editTodo}>Save</button>
          <button  className='cancel-btn' onClick={closeEditModal}>Cancel</button>
        </div>
      )}
    </div>
  );
};

export default App;
