import React, { useState, useEffect } from 'react';
import CustomNavbar from '../../components/navbar';
import TodoForm from './TodoForm';
import Todo from './Todo';
import './Todo.css'; // Ensure to import any additional CSS if needed

function TodoList() {
  const initialTodos = JSON.parse(localStorage.getItem('todos')) || [];
  const [todos, setTodos] = useState(initialTodos);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = (todo) => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }

    const newTodos = [todo, ...todos];
    setTodos(newTodos);
  };

  const updateTodo = (todoId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }

    setTodos((prev) =>
      prev.map((item) => (item.id === todoId ? newValue : item))
    );
  };

  const removeTodo = (id) => {
    const removedArr = todos.filter((todo) => todo.id !== id);
    setTodos(removedArr);
  };

  const completeTodo = (id) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, isComplete: !todo.isComplete };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  return (
    <div className='vh-100'>
      <CustomNavbar />
    <div className='vh-100 d-flex flex-column justify-content-center shadow-lg align-items-center'>
      <div className='todo-body p-5 rounded bg-light shadow'>
        <h1 className='text-center mb-4'>What's the Plan for Today?</h1>
        <TodoForm onSubmit={addTodo} />
        <Todo
          todos={todos}
          completeTodo={completeTodo}
          removeTodo={removeTodo}
          updateTodo={updateTodo}
        />
      </div>
      <div className='bg'>
        <div className='bg bg2'></div>
        <div className='bg bg3'></div>
      </div>
    </div>
    </div>
  );
}

export default TodoList;
