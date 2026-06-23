let input = "";
let display = document.getElementById("input");
function calculate(e){
    input += e.target.dataset.value;
    display.textContent = input;
}