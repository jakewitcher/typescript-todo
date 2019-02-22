import { createTodo, editTodo, deleteTodo, Todo } from './utils';

// state
let todos: Todo[] = [];

// elements
const submitButton = document.getElementById('submit');
const inputField = document.getElementById('todo');

// submit new todo
(submitButton as HTMLElement).addEventListener('click', e => {
  e.preventDefault();
  const todo = (inputField as HTMLInputElement).value;
  todos = createTodo(todos, todo);
  console.log(todos);
});
