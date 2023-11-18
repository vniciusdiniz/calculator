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

let fila = []
let currentNumber = "";
let currentDigit = "";
let buildingNumber = true;

  document.querySelectorAll('.digitN').forEach(item => {
    item.addEventListener('click', event => {
        currentDigit = item.textContent;
        currentNumber += currentDigit;
        buildingNumber = true;
        displayExpression();
    })
  });

  document.querySelectorAll('.operation').forEach(item => {
    item.addEventListener('click', event => {
        fila.push(currentNumber);
        fila.push(item.textContent);
        currentNumber = "";
  
        buildingNumber = false;
        displayExpression();
    })
  });

  equalEL.addEventListener('click', () => {
    fila.push(currentNumber);
    currentNumber = "";
    buildingNumber = false;
    let result = calc();
    resultEl.textContent = result;

    addEqualToExpression();
    displayResult(result);
    currentNumber = result;
  });

  clearEl.addEventListener('click', () => {
        fila = [];
        currentNumber = "";
        currentDigit = "";
        buildingNumber = true;

        displayExpression(1);
        displayResult(0);
  });

//   deleteEl.addEventListener('click', () => {
  
//   });

function roundResult(number) {
    return Math.round(number * 1000) / 1000
}

function calc(){

    let result = 0;
    while(fila.length > 1){
        let n1 = fila.shift();
        let op = fila.shift();
        let n2 = fila.shift();
        switch(op){
            case "+": 
                    result = roundResult(n1*1+n2*1);
                break;
            case "/": 
                    result = roundResult(n1/n2);
                break;
            case "-":
                    result = roundResult(n1-n2);
                break;
            case "x":
                    result = roundResult(n1*n2);
                break;
            default: 
                    result = null;
        }

        fila.unshift(result);
    }//while
    return fila[0];
}

function displayExpression(clearExp){

    if(buildingNumber){
        expressionEl.textContent += currentDigit;
        if (clearExp){
            expressionEl.textContent = "";  
        }
    } else if (!buildingNumber){
        expressionEl.textContent = "";      
        for (let elem of fila){
            expressionEl.textContent += `${elem} `;
        }
    }
}

function addEqualToExpression(){
    expressionEl.textContent += " ="
}

function displayResult(r){
    resultEl.textContent = r;
}
