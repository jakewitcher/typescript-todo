import { createTodo, editTodo, deleteTodo, Todo } from './utils';

// state
const hasStorage = localStorage.getItem('todos');
let todos: Todo[] = hasStorage ? JSON.parse(hasStorage) : [];

// elements
const submitButton = document.getElementById('submit');
const inputField = document.getElementById('todo');
const todoList = document.getElementById('todos');

// initialize app
function initialize(todos: Todo[]) {
  if (todos.length > 0) {
    todos.forEach(todo => {
      renderNewTodo(todo);
    });
  }
}

initialize(todos);

// create remove button
function createDeleteButton(todoEle: HTMLElement) {
  const id = todoEle.id;
  const button = document.createElement('button');
  button.textContent = 'remove';
  button.addEventListener('click', () => {
    todos = deleteTodo(todos, id);
    setStorage(todos);
    (todoEle.parentNode as HTMLElement).removeChild(todoEle);
  });
  (todoEle as HTMLElement).appendChild(button);
}

// render new todo
function renderNewTodo(todo: Todo) {
  const ele = document.createElement('li');
  ele.textContent = todo.text;
  ele.id = todo.id;
  createDeleteButton(ele);
  (todoList as HTMLElement).appendChild(ele);
}

// submit new todo
(submitButton as HTMLElement).addEventListener('click', e => {
  e.preventDefault();
  const todo = (inputField as HTMLInputElement).value;
  todos = createTodo(todos, todo);
  setStorage(todos);
  const newTodo = todos[todos.length - 1];
  renderNewTodo(newTodo);
  (inputField as HTMLInputElement).value = '';
});

// set local storage
function setStorage(todos: Todo[]) {
  localStorage.setItem('todos', JSON.stringify(todos));
}
