
import React, { useState, useEffect, useRef } from 'react';
import './Todo.css';

function TodoForm(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value : '');

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input,
    });
    setInput('');
  };

  return (
    <form onSubmit={handleSubmit} className="todo-form">
      <div className="d-flex">
        <input
          placeholder={props.edit ? 'Update your item' : 'Add a todo'}
          value={input}
          onChange={handleChange}
          name="text"
          ref={inputRef}
          className="todo-input form-control "
        />
        <button
          onClick={handleSubmit}
          className={`todo-button btn  ${props.edit ? 'btn-primary' : 'btn-success'}`}
        >
          {props.edit ? 'Update' : 'Add todo'}
        </button>
      </div>
    </form>
  );
}

export default TodoForm;
