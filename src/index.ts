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
  setNewTodoButton();
  if (todos.length > 0) {
    renderTodos(todos);
  }
}

initialize(todos);

// set local storage
function setStorage(todos: Todo[]) {
  localStorage.setItem('todos', JSON.stringify(todos));
}

// create remove button
function createDeleteButton(todoEle: HTMLElement) {
  const id = todoEle.id;
  const button = document.createElement('button');
  button.textContent = 'remove';
  button.addEventListener('click', () => {
    todos = deleteTodo(todos, id);
    setStorage(todos);
    renderTodos(todos);
  });
  (todoEle as HTMLElement).appendChild(button);
}

// create edit button
function createEditButton(todoEle: HTMLElement, todo: Todo) {
  const id = todoEle.id;
  const button = document.createElement('button');
  button.textContent = 'edit';
  button.addEventListener('click', () => {
    (inputField as HTMLInputElement).value = todo.text;
    (submitButton as HTMLButtonElement).textContent = 'edit';
    (submitButton as HTMLButtonElement).addEventListener('click', () => {
      const edits = (inputField as HTMLInputElement).value;
      console.log(todos);
      todos = editTodo(todos, id, edits);
      console.log(todos);
      setStorage(todos);
      renderTodos(todos);
      (inputField as HTMLInputElement).value = '';
      (submitButton as HTMLButtonElement).textContent = 'create new';
      setNewTodoButton();
    });
  });
  (todoEle as HTMLElement).appendChild(button);
}

// render todos
function renderTodos(todos: Todo[]) {
  (todoList as HTMLElement).innerHTML = '';
  todos.forEach(todo => {
    const ele = document.createElement('li');
    ele.textContent = todo.text;
    ele.id = todo.id;
    createEditButton(ele, todo);
    createDeleteButton(ele);
    (todoList as HTMLElement).appendChild(ele);
  });
}

// submit new todo
function setNewTodoButton() {
  (submitButton as HTMLElement).addEventListener('click', e => {
    e.preventDefault();
    const todo = (inputField as HTMLInputElement).value;
    todos = createTodo(todos, todo);
    setStorage(todos);
    renderTodos(todos);
    (inputField as HTMLInputElement).value = '';
  });
}
