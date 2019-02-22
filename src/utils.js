"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
    var todo = todos.filter(function (todo) { return todo.id === id; })[0];
    var date = moment();
    var updatedTodo = __assign({}, todo, { date: date, text: edits });
    var updatedTodos = todos.filter(function (todo) { return todo.id !== id; }).concat([updatedTodo]);
    return updatedTodos;
}
exports.editTodo = editTodo;
function deleteTodo(todos, id) {
    var updatedTodos = todos.filter(function (todo) { return todo.id !== id; });
    return updatedTodos;
}
exports.deleteTodo = deleteTodo;
