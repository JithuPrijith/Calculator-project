//  display number in text box
function displayFunction(number){
    result.value += number;
}

// clear the value
function clearBox(){
    result.value = "";
}
// evaluate expression

function evaluateExpression(){
    expression = result.value;
    output = eval(expression)
    result.value = output;
}

// remove last item

function removeLastItem(){
    expression = result.value;
    result.value = expression.slice(0,-1)
}
