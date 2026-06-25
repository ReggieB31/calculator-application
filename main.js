let inputDisplay = "";
let display = document.getElementById("input");
let var1 = "";
let var2 = "";
let counter = 0;
let operationCounter = 0;
let decimalCounter = 0;
let operation;

function calculate(e){
    let inputValue = e.target.dataset.value;
    // assigns input values to the two variables.
    if(counter == 0 && !isNaN(inputValue)){
        var1 += inputValue; 
    } else if(counter == 1 && !isNaN(inputValue)) {
        var2 += inputValue;
    } 
    // Negative number support and subtraction.
    if(var1 == "" && inputValue == "-"){
        var1 += inputValue;
        inputDisplay += inputValue;
        display.textContent = inputDisplay;
        operationCounter--;
    } else if(var2 == "" && inputValue == "-"){
        if(var1 != "" && operationCounter == 0){
        operation = inputValue;
        inputDisplay += " " + inputValue + " ";
        display.textContent = inputDisplay;
        operationCounter++;
        counter++;
        decimalCounter = 0;
        } else{
        var2 += inputValue;
        inputDisplay += inputValue;
        display.textContent = inputDisplay;
        }
    }
    
        // Displays these variables.
    if(counter < 2 && !isNaN(inputValue)){
        inputDisplay += inputValue;
        display.textContent = inputDisplay;
    }
    
    // Handles decimals.
    if(e.target.dataset.value == "." && decimalCounter == 0){
        inputDisplay += inputValue;
        if(counter == 0){
            var1 += ".";
            decimalCounter++;
        } else if(counter == 1){
            var2 += ".";
            decimalCounter++;
        }
        display.textContent = inputDisplay;
    }

    // Handles any operation besides clear and subtraction.
    if(isNaN(inputValue) && inputValue != "clear"){
        if(operationCounter < 1 && inputValue != "."){
            if(inputValue != "=" && var1 != "")
                if(inputValue != "-"){
        {
        operation = inputValue;
        inputDisplay += " " + inputValue + " ";
        display.textContent = inputDisplay;
        operationCounter++;
        counter++;
        decimalCounter = 0;
        }
    }
}
}

    // Handles the equals operation and resets the equation with the result as the first variable.  
    if(inputValue == "=" && var2 != "") {
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
            case "/":
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
        decimalCounter = 1;
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
            decimalCounter = 0;
    }
}
