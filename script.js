const section = document.querySelector('.section')
const display = document.querySelector('#display');
const displayResult = document.querySelector('#answer')
const buttons = document.querySelectorAll('.number,.operator,.dot');
const allClear = document.querySelector('.clear')
const del = document.querySelector('.delete')

let temp = 0;
let num1 = null;
let num2 = null;
let operator = null;
let result = null;
let tempOperator = null;
let operatorCount = 0;
isEqualPressed = false; 

//event listeners for numbers and operators
buttons.forEach(button => {
    button.addEventListener('click', populateDisplay)
})

//separate event listeners for delete and clear buttons
del.addEventListener('click', deleteDisplay);
allClear.addEventListener('click', clearDisplay);


function store(a) {
    temp = temp * 10 + a;
}

//function to compute result based on the operator count
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
        displayResult.textContent = result;
    }
}

//check for operators
function checkSpecialChars(str){
    const specialChars = /[%*/=+-]/;
    const check = specialChars.test(str);
    return check;
}

function populateDisplay(e){

    //if equals if pressed then the next button click results in a fresh start
    if(isEqualPressed == true)
    {
        clearDisplay();
        isEqualPressed = false;
    }

    let content = e.target.textContent;

    if(checkSpecialChars(content))
    {
        display.textContent += ' ' + content + ' ';
        tempOperator = content;
        operatorCount++;
        compute();
    }
    else {
        display.textContent += content;
        store(parseInt(content));
    }
    
    if(content === "=")
    {
        isEqualPressed = true;
    }
}

//operation
function operate() {
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

//clear and delete functions
function clearDisplay() {
    display.textContent = "";
    displayResult.textContent = "";
    temp = 0;
    num1 = 0;
    num2 = 0;
    result = 0;
    operatorCount = 0;
    operator = '';
    tempOperator = '';
}

function deleteDisplay() {
    if(isEqualPressed == true)
    {
        clearDisplay();
        isEqualPressed = false;
    }
    //deleting display (only one input)
    let str = display.textContent;
    let tempStr = str;
    if (str[str.length - 1] == " ") {
        str = str.slice(0, str.length - 3)
    }
    else { str = str.slice(0, -1); }

    display.textContent = str;
    
    //actual logic
    if(Number.isInteger(parseInt(tempStr[tempStr.length-1])))
    {
        temp = Math.floor(temp / 10) ;

    }
    else{
        tempOperator = '';
    }
}

