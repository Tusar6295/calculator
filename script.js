const display = document.querySelector('#display');
const allclear = document.querySelector('#clear');
const del = document.querySelector('#delete');
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


one.addEventListener('click', addOne);
two.addEventListener('click', addTwo);
three.addEventListener('click', addThree);
four.addEventListener('click', addFour);
five.addEventListener('click', addFive);
six.addEventListener('click', addSix);
seven.addEventListener('click', addSeven);
eight.addEventListener('click', addEight);
nine.addEventListener('click', addNine);
zero.addEventListener('click', addZero);
allclear.addEventListener('click', clearDisplay);
del.addEventListener('click', deleteDisplay);
divide.addEventListener('click', division);
multiply.addEventListener('click', multiplication);
percent.addEventListener('click', percentage);
sum.addEventListener('click', plus);
sub.addEventListener('click', subtract);
dot.addEventListener('click', addDot);
equals.addEventListener('click', equalTo);

let temp = 0;
let num1 = 0;
let num2 = 0;
let result = 0;
let operator = '';
let tempOperator = '';
let operatorCount = 0;

function compute() {
    if (operatorCount == 1) {
        num1 = temp;
        temp = 0;
        operator = tempOperator;
    }
    else if (operatorCount > 1) {
        num2 = temp;
        temp = 0;
        result = operate();
        num1 = result;
        operator = tempOperator;
    }
}

function storeNum(a) {
    temp = temp * 10 + a;
}

function addOne() {
    display.textContent += "1";
    storeNum(1);
}

function addTwo() {
    display.textContent += "2";
    storeNum(2);
}

function addThree() {
    display.textContent += "3";
    storeNum(3);
}

function addFour() {
    display.textContent += "4";
    storeNum(4);
}

function addFive() {
    display.textContent += "5";
    storeNum(5);
}

function addSix() {
    display.textContent += "6";
    storeNum(6);
}

function addSeven() {
    display.textContent += "7";
    storeNum(7);
}

function addEight() {
    display.textContent += "8";
    storeNum(8);
}

function addNine() {
    display.textContent += "9";
    storeNum(9);
    
}

function addZero() {
    display.textContent += "0";
    storeNum(0);
}

function multiplication() {
    display.textContent += " x ";
    operatorCount++;
    tempOperator = '*';
    compute();
}

function division() {
    display.textContent += " / ";
    operatorCount++;
    tempOperator = '/';
    compute();
}

function plus() {
    display.textContent += " + ";
    operatorCount++;
    tempOperator = '+';
    compute();
}

function subtract() {
    display.textContent += " - ";
    operatorCount++;
    tempOperator = '-';
    compute();
}

function percentage() {
    display.textContent += " % ";
}

function addDot() {
    display.textContent += ".";
}

function equalTo() {
    display.textContent += " = ";
    num2 = temp;
    result = operate();
    console.log(result);
}

function clearDisplay() {
    display.textContent = "";
    temp = 0;
    num1 = 0;
    num2 = 0;
    result = 0;
    operatorCount = 0;
    operator = '';
    tempOperator = '';
}

function deleteDisplay() {
    let str = display.textContent;
    if (str[str.length - 1] == " ") {
        str = str.slice(0, str.length - 3)
    }
    else { str = str.slice(0, -1); }

    display.textContent = str;
}

function operate() {
    console.log(num1)
    console.log(num2)
    console.log(operator)
    if (operator === "+") {
        return num1 + num2;
    }
    else if (operator === "-") {
        return num1 - num2;
    }
    else if (operator === "*") {
        return num1 * num2;
    }
    else if (operator === "/") {
        return num1 / num2;
    }
    else if (operator === "%") {
        return num1 % num2;
    }

}