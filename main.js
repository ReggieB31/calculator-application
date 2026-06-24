let inputDisplay = "";
let display = document.getElementById("input");
let var1;
let var2;
let counter = 0;
let operation;

function calculate(e){
    if(counter == 0 && !NaN(e.target.dataset.value)){
        let var1 = e.target.dataset.value;
        counter++; 
    } else if(counter == 1 && !NaN(e.target.dataset.value)) {
        var2 = e.target.dataset.value;
        counter++;
    } 
    
    if(counter == 0 || operation != undefined){
        
    }
    inputDisplay += e.target.dataset.value;
    display.textContent = inputDisplay;
    
}