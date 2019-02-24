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

function editTodo(todos: Todo[], id: string, edit: string) {
  return todos.map(todo => {
    if (todo.id === id) {
      todo.text = edit;
      todo.date = moment();
      return todo;
    }
    return todo;
  });
}

function deleteTodo(todos: Todo[], id: string) {
  const updatedTodos = todos.filter(todo => todo.id !== id);
  return updatedTodos;
}

export { createTodo, editTodo, deleteTodo };
