"use strict";
exports.__esModule = true;
var moment = require("moment");
var utils_1 = require("../src/utils");
var index_1 = require("./utils/index");
var newTodo = 'Go to grocery store';
var edits = 'Go to town';
var todos = [
    {
        text: 'Walk the dog',
        id: '123abc',
        date: moment(1000)
    },
    {
        text: 'Clean the kitchen',
        id: '456def',
        date: moment(1500)
    },
    {
        text: 'Milk the cow',
        id: '789ghi',
        date: moment(3000)
    },
];
index_1.it('should create a new todo', function () {
    var createTest = utils_1.createTodo(todos, newTodo);
    index_1.expect(createTest.length).toBe(4);
    index_1.expect(createTest[3].text).toBe(newTodo);
});
index_1.it('should edit a todo', function () {
    var editTest = utils_1.editTodo(todos, '123abc', edits);
    index_1.expect(editTest.length).toBe(3);
    index_1.expect(editTest[2].text).toBe(edits);
});
index_1.it('should delete a todo', function () {
    var deleteTest = utils_1.deleteTodo(todos, '456def');
    index_1.expect(deleteTest.length).toBe(2);
});
