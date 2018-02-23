"use strict";
//Import and require jQuery
const $ = require('jquery');
const otherJS = require('./say-hello.js');

$(document).ready(() => {

    const sayHello = () => {
        $('#heading-one').text('Hello').css('color', 'white');
        $('body').css("background-color", 'blue');
        console.log('Your code is amazing!');
    };

    console.log(otherJS);
    console.log(otherJS.calculateNumber(20));

    sayHello();




});

