let text = document.getElementById('text');
let equation = '';
// userInput will remain 0 if nums are clicked, and go above to 1 just when a symbol
// is clicked. This is so I can stop the user from clicking multiple symbols in a row.
var userInput = 0;

function button0(){
    userInput = 0;
    equation += 0;
    text.innerHTML = equation;
    overload();
};
function button1(){
    userInput = 0;
    equation += 1;
    text.innerHTML = equation;
    overload();
};
function button2(){
    userInput = 0;
    equation += 2;
    text.innerHTML = equation;
    overload();
};
function button3(){
    userInput = 0;
    equation += 3;
    text.innerHTML = equation;
    overload();
};
function button4(){
    userInput = 0;
    equation += 4;
    text.innerHTML = equation;
    overload();
};
function button5(){
    userInput = 0;
    equation += 5;
    text.innerHTML = equation;
    overload();
};
function button6(){
    userInput = 0;
    equation += 6;
    text.innerHTML = equation;
    overload();
};
function button7(){
    userInput = 0;
    equation += 7;
    text.innerHTML = equation;
    overload();
};
function button8(){
    userInput = 0;
    equation += 8;
    text.innerHTML = equation;
    overload();
};
function button9(){
    userInput = 0;
    equation += 9;
    text.innerHTML = equation;
    overload();
};

function buttonMultiply(){
    if(userInput == 0){
    equation += '*';
    text.innerHTML = equation;
    overload();
    userInput = 1;
    }
    else{
        equation = equation.substring(0, equation.length - 1);
        equation += '*';
        text.innerHTML = equation;
    };
};
function buttonDivide(){
    if(userInput == 0){
    equation += '/';
    text.innerHTML = equation;
    overload();
    userInput = 1;
    }
    else{
        equation = equation.substring(0, equation.length - 1);
        equation += '/';
        text.innerHTML = equation;
    };
};
function buttonSubtract(){
    if(userInput == 0){
    equation += '-';
    text.innerHTML = equation;
    overload();
    userInput = 1;
    }
    else{
        equation = equation.substring(0, equation.length - 1);
        equation += '-';
        text.innerHTML = equation;
    };
};
function buttonAdd(){
    if(userInput == 0){
    equation += '+';
    text.innerHTML = equation;
    overload();
    userInput = 1;
    }
    else{
        equation = equation.substring(0, equation.length - 1);
        equation += '+';
        text.innerHTML = equation;
    };
};
function buttonDecimal(){
    equation += '.';
    text.innerHTML = equation;
    overload();
};

function buttonEquals(){
    var answer = eval(equation);
    equation = answer.toFixed(2);
    text.innerHTML = answer.toFixed(2);
    overload();
};

//Checks to see if there are too many numbers in the calculator

function overload(){
    if(equation.length > 14){
        equation = '';
        text.innerHTML = 'OVERLOAD';
    };
};

function reset(){
    equation = '';
    userInput = 0;
    text.innerHTML = equation;
}

