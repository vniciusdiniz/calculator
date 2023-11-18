const displayEl = document.querySelector(".display")
const expressionEl = document.querySelector(".expression")
const resultEl = document.querySelector(".result")

const clearEl = document.querySelector(".clear")
const deleteEl = document.querySelector(".delete")

// const sevenEl = document.querySelector("#7")
// const eightEl = document.querySelector("#8")
// const nineEl = document.querySelector("#9")
// const fourEl = document.querySelector("#4")
// const fiveEl = document.querySelector("#5")
// const sixEl = document.querySelector("#6")
// const oneEl = document.querySelector("#1")
// const twoEl = document.querySelector("#2")
// const threeEl = document.querySelector("#3")
// const zeroEl = document.querySelector("#0")
// const pointEl = document.querySelector("#point")

const divideEl = document.querySelector("#divide")
const multiplyEl = document.querySelector("#multiply")
const minusEl = document.querySelector("#minus")
const addEl = document.querySelector("#add")

const equalEL = document.querySelector("#equal")

let firstNumber = "";
let secondNumber = "";
let currentOperation = "";
let currentNumber = 0;

  document.querySelectorAll('.digitN').forEach(item => {
    item.addEventListener('click', event => {
        if (!currentNumber){
            firstNumber+= item.textContent;
        } else {
            secondNumber+= item.textContent;
        }

        displayExpression();
    })
  });

  document.querySelectorAll('.operation').forEach(item => {
    item.addEventListener('click', event => {
        currentNumber = 1;
        currentOperation = item.textContent;

        displayExpression();
    })
  });

  equalEL.addEventListener('click', () => {
    let result = calc(firstNumber, secondNumber, currentOperation);
    resultEl.textContent = result;

    addEqualToExpression();
    displayResult(result);

    firstNumber = result;
    secondNumber = "";
    currentOperation = ""
  });

  clearEl.addEventListener('click', () => {
        firstNumber = "";
        secondNumber = "";
        currentOperation = "";
        currentNumber = 0;
        displayExpression();
        displayResult(0);
  });

  deleteEl.addEventListener('click', () => {
    displayExpression
  });

function roundResult(number) {
    return Math.round(number * 1000) / 1000
}

function calc(n1, n2, op){
    switch(op){
        case "+" : return roundResult(n1*1+n2*1);
        case "/" : return roundResult(n1/n2);
        case "-" : return roundResult(n1-n2);
        case "x" : return roundResult(n1*n2);
        default: return null;
    }
}

function displayExpression(elem){
    expressionEl.textContent = `${firstNumber} ${currentOperation} ${secondNumber}`;
}

function addEqualToExpression(){
    expressionEl.textContent += " ="
}

function displayResult(r){
    resultEl.textContent = r;
}
