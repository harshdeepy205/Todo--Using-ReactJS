import React from 'react';
import './App.css';
// import TodoForm from './component/TodoForm';
import TodoList from './component/TodoList';

function App() {
  return (
    <div className="home text-center text-success ">
      <h1>Whats' the Plan Of today</h1>

      <div className="todos todo-App m-4">
        <TodoList />
      </div>
    </div>
  );
}

export default App;
