import moment = require('moment');
import { createTodo, editTodo, deleteTodo, Todo } from '../src/utils';
import { it, expect } from './utils/index';

const newTodo = 'Go to grocery store';
const edits = 'Go to town';
const todos = [
  {
    text: 'Walk the dog',
    id: '123abc',
    date: moment(1000),
  },
  {
    text: 'Clean the kitchen',
    id: '456def',
    date: moment(1500),
  },
  {
    text: 'Milk the cow',
    id: '789ghi',
    date: moment(3000),
  },
];

it('should create a new todo', () => {
  const createTest = createTodo(todos, newTodo);
  expect(createTest.length).toBe(4);
  expect(createTest[3].text).toBe(newTodo);
});

it('should edit a todo', () => {
  const editTest = editTodo(todos, '123abc', edits);
  expect(editTest.length).toBe(3);
  expect(editTest[2].text).toBe(edits);
});

it('should delete a todo', () => {
  const deleteTest = deleteTodo(todos, '456def');
  expect(deleteTest.length).toBe(2);
});
