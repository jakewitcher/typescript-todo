import uuid = require('uuid');
import moment = require('moment');

export interface Todo {
  text: string;
  date: moment.Moment;
  id: string;
}

function createTodo(todos: Todo[], text: string) {
  const date = moment();
  const newTodo = {
    text,
    date,
    id: uuid(),
  };
  return [...todos, newTodo];
}

function editTodo(todos: Todo[], id: string, edits: string) {
  const todo = todos.filter(todo => todo.id === id)[0];
  const date = moment();
  const updatedTodo = {
    ...todo,
    date,
    text: edits,
  };
  const updatedTodos = [...todos.filter(todo => todo.id !== id), updatedTodo];
  return updatedTodos;
}

function deleteTodo(todos: Todo[], id: string) {
  const updatedTodos = todos.filter(todo => todo.id !== id);
  return updatedTodos;
}

export { createTodo, editTodo, deleteTodo };
