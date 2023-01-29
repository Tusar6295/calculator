const section = document.querySelector('.section')
const display = document.querySelector('#display');
const displayResult = document.querySelector('#answer')
const buttons = document.querySelectorAll('.number,.operator,.dot');
const allClear = document.querySelector('.clear');
const del = document.querySelector('.delete');
const equals = document.querySelector('.equals');

let temp = '';
let num1 = null;
let num2 = null;
let operator = null;
let result = null;
let tempOperator = null;
let operatorCount = 0;
isEqualPressed = false; 
let flag = 0;
let decimalCount = 0;

//event listeners for numbers and operators
buttons.forEach(button => {
    button.addEventListener('click', populateDisplay)
})

//separate event listeners for delete and clear buttons
del.addEventListener('click', deleteDisplay);
allClear.addEventListener('click', clearDisplay);


function store(a) {
    //user cannot enter a number greater than 9 digits
    if(temp.length == 9)
    {
        return 1;
    }

    if(a == '.')
    {
        decimalCount++;
    }

    //restricting more than one decimal in a number
    if(decimalCount > 1)
    {
        return 1;
    }
    temp += a;
}

//function to compute result based on the operator count
function compute() {
    if (operatorCount == 1) {
        equals.addEventListener('click', populateDisplay)
        num1 = parseFloat(temp);
        temp = '';
        operator = tempOperator;
    }
    else if (operatorCount > 1) { 
        num2 = parseFloat(temp);
        temp = '';
        if(operator === '/' && num2 === 0)
        {
            displayResult.textContent = "Don't commit this crime";
            return;
        }
        result = operate();
        num1 = result;

        //rounds the result to 5 decimal places
        if(result.toString().includes('.')){
            result = Math.round(result * 100000) / 100000;
        }

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

    //to stop user from entering equals before a operator
    if(content === '=' && operatorCount === 0)
    {
        return;
    }

    if(checkSpecialChars(content))
    {
        //flag variable to restrict consecutive operator entries
        if(flag == 1 || temp === ''){
            return;
        }
        decimalCount = 0;
        display.textContent += ' ' + content + ' ';
        tempOperator = content;
        operatorCount++;
        compute();
        flag = 1;
    }
    else {
        let lengthCheck = store(content);
        if(lengthCheck === 1) //also stops more than one decimal in a number from displaying
        {
            return;
        }
        display.textContent += content;
        flag = 0;
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

