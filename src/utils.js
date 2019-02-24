"use strict";
exports.__esModule = true;
var uuid = require("uuid");
var moment = require("moment");
function createTodo(todos, text) {
    var date = moment();
    var newTodo = {
        text: text,
        date: date,
        id: uuid()
    };
    return todos.concat([newTodo]);
}
exports.createTodo = createTodo;
function editTodo(todos, id, edits) {
    return todos.map(function (todo) {
        if (todo.id === id) {
            todo.text = edits;
            todo.date = moment();
            return todo;
        }
        return todo;
    });
}
exports.editTodo = editTodo;
function deleteTodo(todos, id) {
    var updatedTodos = todos.filter(function (todo) { return todo.id !== id; });
    return updatedTodos;
}
exports.deleteTodo = deleteTodo;
