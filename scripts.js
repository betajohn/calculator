let currentValue=0;
let oldValue=0;

let equalsClicked=false;
let firstOperandEquals=0;
let isLastClickOperator=false;
let activeOperator="";
let firstOperand=0;
let secondOperand=0;
let noClicks=true;
let operatorSelected=false;
let currentScreen=document.getElementById("currentScreen");
let historyScreen=document.getElementById("historyScreen");

const arrow=document.getElementById("arrow");
arrow.addEventListener("click",()=>{
  document.getElementById("dropdown").classList.toggle("hide")
} );


const numbers=Array.from(document.getElementsByClassName("number"));
const operators=Array.from(document.getElementsByClassName("operator"));

numbers.forEach(button=>button.addEventListener("click", numberClicked));
operators.forEach(button=>button.addEventListener("click", operatorClicked));
window.addEventListener("keydown", function(e){
  if(e.key==="0" || e.key==="1" || e.key==="2" || e.key==="3" || e.key==="4" || e.key==="5" || e.key==="6" || e.key==="7" || e.key==="8" || e.key==="9"){
    numberEntered(e.key);
    return;
  }
  if(e.key==="c"){
    clear();
    return;
  }
  if(e.key==="Backspace"){
    del();
    return;
  }
  if(e.key===","){
    sign();
    return;
  }
  if(e.key==="."){
    point();
    return;
  }
  if(e.key==="Enter"){
    operatorEntered("=");
    return;
  }
  if(e.key==="p"){
    operatorEntered("**");
    return;
  }
  if(e.key==="+" || e.key==="-" || e.key==="*" || e.key==="/" || e.key==="*"){
    operatorEntered(e.key);
  }

});

function numberClicked(e){
  numberEntered(e.target.textContent);
}
function operatorClicked(e){
  operatorEntered(e.target.textContent);
}

function numberEntered(key){
  if(noClicks===true){
    currentScreen.textContent="";
    noClicks=false;
  }
  currentScreen.textContent+=key;
  isLastClickOperator=false;
}
function operatorEntered(key){
  if(key==="C"){
    clear();
    return;
  }
  if(key==="DEL"){
    del();
    return;
  }
  if(key==="±"){
    sign();
    return;
  }
  if(key==="."){
    point();
    return;
  }
  if(isLastClickOperator===false){
    if(operatorSelected===false){
      firstOperand=Number(currentScreen.textContent);
      operatorSelected=true;
      
    }else{
      secondOperand=Number(currentScreen.textContent);
      firstOperandEquals=firstOperand;
      operate(activeOperator, firstOperand, secondOperand);
    }
  }
  if(key==="="){
    historyScreen.textContent=firstOperandEquals+" "+activeOperator+" "+secondOperand+" =";
    equalsClicked=true;
  }else{
    activeOperator=key;
    historyScreen.textContent=firstOperand+" "+activeOperator;
  }
  isLastClickOperator=true;
  noClicks=true; 
}

function add(a,b){
  firstOperand= Number(a)+Number(b);
  currentScreen.textContent=firstOperand;
  historyScreen.textContent=firstOperand+" "+activeOperator;
}
function substract(a,b){
  firstOperand= a-b;
  currentScreen.textContent=firstOperand;
  historyScreen.textContent=firstOperand+" "+activeOperator;
}
function multiply(a,b){
  firstOperand= a*b;
  currentScreen.textContent=firstOperand;
  historyScreen.textContent=firstOperand+" "+activeOperator;
}
function divide(a,b){
  firstOperand= a/b;
  currentScreen.textContent=firstOperand;
  historyScreen.textContent=firstOperand+" "+activeOperator;
}
function power(a,b){
  firstOperand=a**b;
  currentScreen.textContent=firstOperand;
  historyScreen.textContent=firstOperand+" "+activeOperator;
}
function sign(){
  currentScreen.textContent=Number(currentScreen.textContent)*-1;
}
function clear(){
  historyScreen.textContent="";
  currentScreen.textContent=0;
  currentValue=0;
  firstOperand=0;
  activeOperator="";
  noClicks=true;
  operands=0;

  operatorSelected=false;
}
function del(){
  currentScreen.textContent=currentScreen.textContent.slice(0,currentScreen.textContent.length-1);
}
function point(){
  if((currentScreen.textContent.charAt(currentScreen.textContent.length-1)!==".")&&Number.isInteger(Number(currentScreen.textContent))){
    currentScreen.textContent=currentScreen.textContent+".";
  }
}

function operate(operator, oldValue, currentValue){
  if(operator==="+"){
    add(oldValue,currentValue);
  }
  if(operator==="-"){
    substract(oldValue,currentValue);
  }
  if(operator==="x"){
    multiply(oldValue,currentValue);
  }
  if(operator==="÷"){
    divide(oldValue,currentValue);
  }
  if(operator==="**"){
    power(oldValue,currentValue);
  }
}