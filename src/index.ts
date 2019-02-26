import { createTodo, editTodo, deleteTodo, Todo } from './utils';

// state
const hasStorage = localStorage.getItem('todos');
let todos: Todo[] = hasStorage ? JSON.parse(hasStorage) : [];
let todoId: string = '';

// elements
const newButton = document.getElementById('new');
const editButton = document.getElementById('edit');
const newField = document.getElementById('todo-new');
const editField = document.getElementById('todo-edit');
const newForm = document.getElementById('new-form');
const editForm = document.getElementById('edit-form');
const todoList = document.getElementById('todos');

// initialize app
function initialize(todos: Todo[]) {
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
function createDeleteButton(div: HTMLElement, todo: Todo) {
  const id = todo.id;
  const button = document.createElement('button');
  button.className = 'button button--remove';
  button.innerHTML = '<i class="fas fa-trash-alt"/>';
  button.addEventListener('click', () => {
    todos = deleteTodo(todos, id);
    setStorage(todos);
    renderTodos(todos);
  });
  (div as HTMLElement).appendChild(button);
}

// create edit button
function createEditButton(div: HTMLElement, todo: Todo) {
  const button = document.createElement('button');
  button.className = 'button button--edit';
  button.innerHTML = '<i class="fas fa-edit"/>';
  button.addEventListener('click', () => {
    (editField as HTMLInputElement).value = todo.text;
    todoId = todo.id;
    (newForm as HTMLElement).className = 'form--hide';
    (editForm as HTMLElement).className = 'form';
  });
  (div as HTMLElement).appendChild(button);
}

// render todos
function renderTodos(todos: Todo[]) {
  (todoList as HTMLElement).innerHTML = '';
  todos.forEach(todo => {
    const ele = document.createElement('li');
    const buttonDiv = document.createElement('div');
    ele.className = 'todo';
    ele.textContent = todo.text;
    ele.id = todo.id;
    createEditButton(buttonDiv, todo);
    createDeleteButton(buttonDiv, todo);
    (ele as HTMLElement).appendChild(buttonDiv);
    (todoList as HTMLElement).appendChild(ele);
  });
}

// submit new todo
(newButton as HTMLElement).addEventListener('click', e => {
  e.preventDefault();
  const todo = (newField as HTMLInputElement).value;
  todos = createTodo(todos, todo);
  setStorage(todos);
  renderTodos(todos);
  (newField as HTMLInputElement).value = '';
});

// edit existing todo
(editButton as HTMLElement).addEventListener('click', e => {
  e.preventDefault();
  const edit = (editField as HTMLInputElement).value;
  console.log(edit);
  todos = editTodo(todos, todoId, edit);
  setStorage(todos);
  renderTodos(todos);
  todoId = '';
  (editField as HTMLInputElement).value = '';
  (newForm as HTMLElement).className = 'form';
  (editForm as HTMLElement).className = 'form--hide';
});
