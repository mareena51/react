import React, { useState } from 'react';

const Todo = () => {
  const [task, setTask] = useState('');
  const [todo, setTodo] = useState([]);
  const [filter, setFilter] = useState('all');

  const handleAddTodo = () => {
    if (task.trim()) {
      setTodo([...todo, { id: Date.now(), task, completed: false }]);
      setTask('');
    }
  };

  const handleToggleTodo = (id) => {
    setTodo(todo.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const handleRemoveTodo = (id) => {
    setTodo(todo.filter(todo => todo.id !== id));
  };

  const handleFilter = (filterType) => {
    setFilter(filterType);
  };

  const filteredTodo = todo.filter((todo) => {
    if (filter === 'completed') return todo.completed;
    if (filter === 'incomplete') return !todo.completed;
    return true;
  });

  return (
    <div>
      <h1>Todo List</h1>
      <input 
        type="text" 
        value={task} 
        onChange={(e) => setTask(e.target.value)} 
        placeholder="Add a new todo" 
      />
      <button onClick={handleAddTodo}>Add Todo</button>

      <div>
        <button onClick={() => handleFilter('all')}>All</button>
        <button onClick={() => handleFilter('completed')}>Completed</button>
        <button onClick={() => handleFilter('incomplete')}>Incomplete</button>
      </div>

      <ul>
        {filteredTodo.map((todo) => (
          <li key={todo.id}>
            <span
              style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
              onClick={() => handleToggleTodo(todo.id)}
            >
              {todo.task}
            </span>
            <button onClick={() => handleRemoveTodo(todo.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
