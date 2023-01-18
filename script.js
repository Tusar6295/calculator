const display = document.querySelector('#display');
const allclear = document.querySelector('#clear');
const del =  document.querySelector('#delete');
const percent = document.querySelector('#percent');
const divide = document.querySelector('#divide');
const seven = document.querySelector('#seven');
const eight = document.querySelector('#eight');
const nine = document.querySelector('#nine');
const sum = document.querySelector('#add');
const four = document.querySelector('#four');
const five = document.querySelector('#five');
const six = document.querySelector('#six');
const sub = document.querySelector('#subtract');
const one = document.querySelector('#one');
const two = document.querySelector('#two');
const three = document.querySelector('#three');
const multiply = document.querySelector('#multiply');
const zero = document.querySelector('#zero');
const dot = document.querySelector('#dot');
const equals = document.querySelector('#equals');


one.addEventListener('click', addOne );
two.addEventListener('click', addTwo );
three.addEventListener('click', addThree );
four.addEventListener('click', addFour );
five.addEventListener('click', addFive );
six.addEventListener('click', addSix );
seven.addEventListener('click', addSeven );
eight.addEventListener('click', addEight );
nine.addEventListener('click', addNine );
zero.addEventListener('click', addZero );
allclear.addEventListener('click', clearDisplay );
del.addEventListener('click', deleteDisplay );
divide.addEventListener('click', division );
multiply.addEventListener('click', multiplication );
percent.addEventListener('click', percentage );
sum.addEventListener('click', plus);
sub.addEventListener('click', subtract );
dot.addEventListener('click', addDot );
equals.addEventListener('click', equalTo );

let store = [];

function addOne(){
    display.textContent += "1";
}

function addTwo(){
    display.textContent += "2";
}

function addThree(){
    display.textContent += "3";
}

function addFour(){
    display.textContent += "4";
}

function addFive(){
    display.textContent += "5";
}

function addSix(){
    display.textContent += "6";
}

function addSeven(){
    display.textContent += "7";
}

function addEight(){
    display.textContent += "8";
}

function addNine(){
    display.textContent += "9";
}

function addZero(){
    display.textContent += "0";
}

function multiplication(){
    display.textContent += " x ";
}

function division(){
    display.textContent += " / ";
}

function plus(){
    display.textContent += " + ";
}

function subtract(){
    display.textContent += " - ";
}

function percentage(){
    display.textContent += " % ";
}

function addDot(){
    display.textContent += ".";
}

function equalTo(){
    display.textContent += " = ";
}

function clearDisplay(){
    display.textContent = "";
}

function deleteDisplay(){
    let str = display.textContent;
    if(str[str.length-1]==" ")
    {
        str = str.slice(0,str.length-3)
    }
    else{str = str.slice(0,-1);}
    
    display.textContent = str;
}

// // function add(a,b){
//     return a + b;
// }

// function subtract(a,b){
//     return a - b;
// }

// function multiply(a,b){
//     return a * b;
// }

// function divide(a,b){
//     return a / b;
// }

// function operator(op,a,b){
//     if(op === "+")
//     {
//         return add(a,b);
//     }
//     else if(op === "-")
//     {
//         return subtract(a,b);
//     }
//     else if(op === "*")
//     {
//        return multiply(a,b);
//     }
//     else if(op === "/")
//     {
//        return divide(a,b);
//     }

// }

// console.log(operator("+",3,4));