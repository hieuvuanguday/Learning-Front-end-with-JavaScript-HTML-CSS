// app
// ES6Module:
// js ban đầu không có module hóa
// mọi người phải dựa vào thư viện bên ngoài: webpack
//      Nodejs
// hoặc là dùng module pattern

// ES6 Module: Lưu trữ trên từng file
//      1 file là một module
//      mọi thứ trong module là private
//      code trong module là 'use strict'
//      dùng từ khóa import, export
import {greeting, handleSum} from "./lib.js";
console.log(greeting);
console.log(handleSum(3, 4));
















