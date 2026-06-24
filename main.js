let inputDisplay = "";
let display = document.getElementById("input");
let var1 = "";
let var2 = "";
let counter = 0;
let operationCounter = 0;
let operation;

function calculate(e){
    let inputValue = e.target.dataset.value;
    // assigns input values to the two variables and displays them.
    if(counter == 0 && !isNaN(inputValue)){
        var1 += inputValue; 
    } else if(counter == 1 && !isNaN(inputValue)) {
        var2 += inputValue;
    } 
    
    // Handles any operation besides clear.
    if(isNaN(inputValue) && inputValue != "clear"){
        if(operationCounter < 1){
        operation = inputValue;
        inputDisplay += inputValue;
        display.textContent = inputDisplay;
        operationCounter++;
        counter++;
    }
}

    if(counter < 2 && !isNaN(inputValue)){
        inputDisplay += inputValue;
        display.textContent = inputDisplay;
    }
    // Handles the equals operation and resets the equation with the result as the first variable.  
    if(inputValue == "="){
        let value;
        let num1 = Number(var1);
        let num2 = Number(var2);
        switch (operation) {
            case "+":
                value = num1 + num2;
                break;
            case "-":
                value = num1 - num2;
                break;
            case "*":
                value = num1 * num2;
                break;
            case "%":
                value = num1 / num2;
                break;
            case "^":
                value = Math.pow(num1, num2);
                break;
        } 
        inputDisplay = value;
        display.textContent = inputDisplay;
        var1 = value;
        var2 = "";
        counter = 0;
        operationCounter = 0;
        operation = undefined;
        }

    // Handles the clear button behavior.
    if (inputValue == "clear"){
            inputDisplay = "";
            var1 = "";
            var2 = "";
            counter = 0;
            operationCounter = 0;
            operation = "";
            display.textContent = inputDisplay;
    }
}
