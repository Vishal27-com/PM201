"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// String
var hero = "Ironman";
// Number
var age = 50;
// Boolean
var present = true;
// Array
var heroes = ["Thor", "Hulk", "Strange"];
var ages = [40, 50, 45];
// Any
var data = {}; // it stops type checking for that variable
// Functions
// Parameter type annotations
function nameoffunction(first, second) {
    return first + second;
}
// Return type annotations
function returntype(first, second) {
    return first + second;
}
// Anonymous functions
ages.map(function (el) {
    console.log(el); // given to parameter (el) this process
}); // is called contextual typing.
// object types
function objecttypes(user) {
    console.log(user.name, user.age);
}
// optional properties
function addressIsOptional(user) {
    console.log(user.name, user.age);
}
// union types
var union = 4;
// Interfaces
// used to define type to object
require("./decorators");
// Function type expression
function expression(cb) {
    cb("Hello world");
}
function cb(s) {
    console.log(s);
}
expression(cb);
