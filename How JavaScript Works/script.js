'use strict';
/* 
Features of JavaScript -->
1.High Level Language
    In low level languages like C developers have to manage resources manually.
    But in high level languages like JS or Python everything happens automatically.
    Downside of high level programs are that they are not as fast and optimised as low level programs.

2.Prototype based Object Oriented
3.Multi-Paradigm
4.Just in time compiled(JIT)
Entire code is converted into machine code at once and then executed immediately.

5.First-class functions.
6.Garbage-Collection
7.Single threaded
8.Dynamic Language
9.Non-Blocking Event Loop Concurrency Model.
 -------------------------------------------------------------------------------------------------

#JavaScript Engine -- Program that executes JavaScript code.Eg-- V8 engine supports chrome and node js.

# Objects are stored in the headp memory and executed in the stack memory.

#Compilation -- Entire code is converted into machine code at once and is written to a binary file
that can be executed by a computer.

#Interpretation -- There is a interpreter which runs through the source code and executes it line by line.
                   They are much slower than compilation.

#How JavaScript Codes are Executed -->
1.Global Execution context is created for top-level code,top-level code are code that are not inside a function.
    Execution context is an enviornment in which a piece of Javascript code is executed.
    It stores all the necessary information for some code to be executed. 
2.Execution of functions and waiting for callBacks,for each function call a new execution context is created.
3.Execution context always contains three parts :- A variable Enviornment , Scope Chain , this keyword.
---------------------------------------------------------------------------------------------------------------------
#Scope -- It is the space or enviornment in which the a certain variable is declared(variable enviornment in case of Functions).
          There is global scope,function scope and block scope.

#Scope of a variable -- Region of our code where a certain variable can be accessed

#Global Scope -- Variables declared in global scope are accessible everywhere.
#Function Scope -- Variables are accessible only inside the functions not outside.Also called local scope.
#Block Scope -- Variables are accessible only inside block.But this only applies to let and const variables.
------------------------------------------------------------------------------------------------------------------------
#Hoisting -- Hoisting makes some type of variables accessible/usable in the code before they are actually declared.
             It happens because before execution the whole code is scanned for variable declarations and for each variable,a new 
             property is created in the variable enviornment object.

                        HOISTED?                        INITIAL VALUE                              SCOPE

Function Declarations      ✅                           Actual Function                            Block
     
var Variables              ✅                              undefined                              Function

let and const Variables    ❌                            uninitialised                             Block

function expressions and                          Depends if using var or let/const   
arrows

*this keyword/variable -->
1.Special variable that is created for every execution context(every function).
2.It takes the value of(points to)the "owner" of the function in which the this keyword is used.
3.the value of 'this' is not static.It depends on how the function is called,and its value is asssigned when the function is actually called.
In a Method 'this' = <Object that is calling the method>.
In a Simple Function call 'this' = undefined.
In arrow functions 'this' = <this of surrounding function (lexical this)>
In a Event Listener 'this' = <DOM element that the Handler is Attached to>
4.this doesNOT point to the function itself and also not to its variable enviornment!
*/

//-------------this keyword in practice----------------//

/*
console.log(this);//this keyword in global scope is the window Object.

const calcAge = function(birthYear)
{
    console.log(2037-birthYear);
    console.log(this);
};
calcAge(1995);

const calcAgeArrow = birthYear=>  //Arrow funcrion doesnot gets its own this keyword
{
    console.log(2037-birthYear);
    console.log(this); //this keyword in arrow function points to its parent object.
};
calcAgeArrow(1990);

const jonas = {
    year = 1991
}
*/
//-------------------------------------Primitives v/s Objects------------------------------------//
/*
#Primitive Datatypes :- Number,String,Boolean,Undefined,Null,Symbol,BigInt.
#Objects are stored in the heap memory whereas the primitive variables are stored in stack memory.
vb


let age = 30;
let oldAge = age;
age = 31;
console.log(age);
console.log(oldAge);

const me = {
    name:'Jonas',
    age:30,
};
const friend = me;
friend.age = 27;
console.log('friend:',friend);
console.log('me',me);
*/