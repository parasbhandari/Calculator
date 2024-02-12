
let currentDisplay=" ";

function append1(){
    currentDisplay+='1';
    document.querySelector('#display').value=currentDisplay;
}
function append2(){
    currentDisplay+='2';
    document.querySelector('#display').value=currentDisplay;
}
function append3(){
    currentDisplay+='3';
    document.querySelector('#display').value=currentDisplay;
}
function append4(){
    currentDisplay+='4';
    document.querySelector('#display').value=currentDisplay;
}
function append5(){
    currentDisplay+='5';
    document.querySelector('#display').value=currentDisplay;
}
function append6(){
    currentDisplay+='6';
    document.querySelector('#display').value=currentDisplay;
}
function append7(){
    currentDisplay+='7';
    document.querySelector('#display').value=currentDisplay;
}
function append8(){
    currentDisplay+='8';
    document.querySelector('#display').value=currentDisplay;
}
function append9(){
    currentDisplay+='9';
    document.querySelector('#display').value=currentDisplay;
}
function append0(){
    currentDisplay+='0';
    document.querySelector('#display').value=currentDisplay;
}
function addbutton(){
    currentDisplay+='+';
    document.querySelector('#display').value=currentDisplay;
}
function subtract(){
    currentDisplay+='-';
    document.querySelector('#display').value=currentDisplay;
}
function multiply(){
    currentDisplay+='*';
    document.querySelector('#display').value=currentDisplay;
}
function divide(){
    currentDisplay+='/';
    document.querySelector('#display').value=currentDisplay;
}
function appenddot(){
    currentDisplay+='.';
    document.querySelector('#display').value=currentDisplay;
}
function clearscreen(){
    currentDisplay='';
    document.querySelector('#display').value=currentDisplay;
}
function calculate(){
    let result=eval(document.querySelector('#display').value);
    document.querySelector('#display').value=result;
}
