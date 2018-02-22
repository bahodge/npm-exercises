"use strict";
//Import and require jQuery
const $ = require('jquery');

$(document).ready(() => {

    const sayHello = () => {
        $('#heading-one').text('Hello').css('color', 'white');
        $('body').css("background-color", 'blue');
        console.log('Your code is amazing!');
    };




    sayHello();




});

