'use strict';

//function
//-fundamental building block in the program
//-subprogram can be used multiple times
//-performs a task or calculates a value

//1. Function declaration
//function declaration
//function name(param1, param2){body...return;}
//one function === one thing
//naming: dosomething, command, verb
//e.g createCardAndPoint -> createCaed, createPoint
//function is object in JS
function printHello(){
    console.log('Hello');
}
printHello();

function log(message){
    console.log(message);
}
log('hellooooo');
log(1234);

//2. Parameters
//premitive parameters: passed by value
//object parameters: passed by value
function changeName(obj){
    obj.name = 'coder';
}

const ellie = {name : 'ellie'};
changeName(ellie);
console.log(ellie);

//3. Default parameters (added in ES6)
function showMessage(message, from){
    console.log(`${message} by ${from}`);
}
showMessage('Hi!');

//4.Rest parameters (added in ES6) 배열로 출력됨
function printAll(...args){
    for (let i = 0; i<args.length; i++){
        console.log(args[i]);
    }

    for(const arg of args){
        console.log(arg);
    }
    args.forEach((arg) => console.log(arg));
}

printAll('dream','coding','now');


//7. Early return, early exit
//bad
function upgradeUser(user){
    if(user.point > 10) {
        //long upgrade logic...
    }
}

//good
function upgradeUser(user){
    if(user.point <= 10) {
        return;
    }
    //long upgrade logic...
}

//First-class function
//functions are treated like any other variable
//can be assigned as a value to variable
//can be passed as an argument to other functions
//can be returned by another function

//1. Function expression
//a function declaration can be called earlier than it is defiend. (hoisted)
//a function expression is created when the execution reaches it.
const print = function (){ //anonymous function (이름없는 함수)_ hoisting이 가능
    console.log('print');
}
print();
const printAgain = print;
printAgain();

function sum(a,b){
    return a + b;
}

const sumAgain = sum;
console.log(sumAgain(1,3));

//2. Callback function using function expression
function randomQuiz(answer, printYes, printNo){
    if(answer === 'love you') {
        printYes();
    } else {
        printNo();
    }
}

//annonymous function
const printYes = function(){
    console.log('yes');
}

//named function
//better debugging in debugger's stack traces
//recursions
const printNo = function print(){
    console.log('no');
}

randomQuiz('wrong', printYes, printNo);
randomQuiz('love you', printYes, printNo);

//Arrow function
//always annonymous
const simplePrint = function(){
  console.log('simplePrint');  
}

const simplePrint2 = () => console.log('simplePrint!');

simplePrint();
simplePrint2();


const add = (a, b) => a + b;
console.log(add(2,3));

const simpleMultiply = (a,b) => {
    //do something more
    return a * b;
}

//IIFE: Immediately Invoked Function Expression (바로 호출하기)
(function hello(){
    console.log('IIFE');
})();

//Fun quiz time
//function calculate(command, a, b)
//command: add, substract, divide, multiply, remainder