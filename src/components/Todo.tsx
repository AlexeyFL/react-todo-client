import React from 'react';
import TodoList from './TodoList';
import AddTodo from './AddTodo';
import Statistics from './Statistics';

const Todo = () => {
  return (
    <>
      <h1>Todo</h1>
      <Statistics />
      <AddTodo />
      <TodoList />
    </>
  );
};

export default Todo;
