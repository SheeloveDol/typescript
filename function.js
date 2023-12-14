"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var add5 = function (num) {
    return num + 5;
};
var signUpUser = function (name, email, isAdmin) { };
// To pass a default value to a parameter, use the equal sign after setting the type
var loginUser = function (email, password, rememberMe) {
    if (rememberMe === void 0) { rememberMe = false; }
};
var getUpperCase = function (str) { return str.toUpperCase(); };
add5(17);
console.log(getUpperCase('hello'));
signUpUser('lol', 'j@mail.com', false);
loginUser('g@mail.com', '1234'); // rememberMe is false by default   
