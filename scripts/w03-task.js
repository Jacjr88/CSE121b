/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */

function add(number1, number2){
    return number1 + number2;
}

function addNumbers(){
    let addNumber1 = Number(document.querySelector('#add1').value);
    let addNumber2 = Number(document.querySelector('#add2').value);
    document.querySelector('#sum').value = add(addNumber1, addNumber2)
}

document.querySelector('#addNumbers').addEventListener('click', addNumbers)

/* Function Expression - Subtract Numbers */

const subtract = function (subtract1, subtract2) {
    return subtract1 - subtract2;
}

const subtractNumbers = function(){
    let subtract1 = Number(document.querySelector('#subtract1').value);
    let subtract2 = Number(document.querySelector('#subtract2').value);
    document.querySelector('#difference').value = subtract(subtract1, subtract2)
}

document.querySelector('#subtractNumbers').addEventListener('click', subtractNumbers)

/* Arrow Function - Multiply Numbers */

const multiply = (factor1,factor2) => factor1 * factor2;

const multiplyNumbers = () => {
    let factor1 = Number(document.querySelector('#factor1').value);
    let factor2 = Number(document.querySelector('#factor2').value);
    document.querySelector('#product').value = multiply(factor1, factor2)
}

document.querySelector('#multiplyNumbers').addEventListener('click', multiplyNumbers)

/* Open Function Use - Divide Numbers */

const divide = (dividend,divisor) => dividend / divisor;

const divideNumbers = function(){
    let dividend = Number(document.querySelector('#dividend').value);
    let divisor = Number(document.querySelector('#divisor').value);
    document.querySelector('#quotient').value = divide(dividend, divisor);
}

document.querySelector('#divideNumbers').addEventListener('click', divideNumbers)


/* Decision Structure */

const showSubtotal = function(){

    let subtotalInput = document.querySelector('#subtotal');
    let subtotal = Number(subtotalInput.value);

    if (isNaN(subtotal) || subtotal < 0) {
        console.error("Invalid subtotal value entered!");
        subtotalInput.value = 0;
    } else {
        console.log("Valid subtotal value entered:", subtotal);
    }

    let isChecked = document.querySelector('#member').checked;

    let totalElement = document.querySelector('#total');
    let templateString = "$ --.--";

    if (isChecked === true) {
        let discountedTotal = subtotal * 0.8;
        totalElement.textContent = templateString.replace("--.--", discountedTotal.toFixed(2));
    } else {
        totalElement.textContent = templateString.replace("--.--", subtotal.toFixed(2));
    }
}

document.querySelector('#getTotal').addEventListener('click', showSubtotal)

/* ARRAY METHODS - Functional Programming */
let arrayOfNumbers =  [1,2,3,4,5,6,7,8,9,10,11,12,13]

/* Output Source Array */

document.querySelector('#array').textContent = arrayOfNumbers;

/* Output Odds Only Array */

const odds = arrayOfNumbers.filter(number => number % 2 !== 0);

document.querySelector('#odds').textContent = odds;

/* Output Evens Only Array */

const evens = arrayOfNumbers.filter(number => number % 2 === 0);

document.querySelector('#evens').textContent = evens;

/* Output Sum of Org. Array */

const sumWithInitial = arrayOfNumbers.reduce(
  (accumulator, currentValue) => accumulator + currentValue);

document.querySelector('#sumOfArray').textContent = sumWithInitial;

/* Output Multiplied by 2 Array */

const multipliedBy2 = arrayOfNumbers.map(
    (number) => number * 2);
  
document.querySelector('#multiplied').textContent = multipliedBy2;

/* Output Sum of Multiplied by 2 Array */

const sumOfMultiplied = multipliedBy2.reduce
((accumulator, currentValue) => accumulator + currentValue);

document.querySelector('#sumOfMultiplied').textContent = sumOfMultiplied;