let inputBox_elem = document.querySelector('.inputBox');
let inputSection_elem = document.querySelector('.input-section')
let toggleBtn_elem = document.querySelector('.toggle-btn')
let deleteBtn_elem = document.querySelector('.button-input-container-top-section .deleteBtn')
let resetBtn_elem = document.querySelector('.resetBtn')
let equalBtn_elem = document.querySelector('.equalBtn')
let topSection_elem = document.querySelector('.top-section')
let button_input_container_elem = document.querySelector('.button-input-container')
const historyContainer_elem = document.querySelector('.historyContainer')


let theme = 1;
function inputValue(input){


    if (input === "="){
        inputBox_elem.value = evaluateExp(inputBox_elem.value);

    }else if(input === "RESET"){
        inputBox_elem.value = "";
    }else if(input === "DEL"){
        inputBox_elem.value = inputBox_elem.value.slice(0, -1)
    }else{
        inputBox_elem.value += input;
    }
}

function evaluateExp(expression){
    try{
        historyContainer_elem.innerHTML += 
        `
            <div>
                <p>${expression} = ${new Function(`return ${expression}`)()}</p>
                <div style="width:100%; ; border: 1px solid white;"></div>
            </div>
        `
        
        return new Function(`return ${expression}`)();
    }catch{
    }
}

function toggleDesign(){
    if(theme === 3) theme = 1
    else theme++;

    if(theme === 1){
        document.body.style.backgroundColor = `rgb(58,70,101)`
        inputSection_elem.style.backgroundColor = `rgb(24,30,50)`
        toggleBtn_elem.style.marginLeft = '2px'
        deleteBtn_elem.style.backgroundColor = "rgb(100,115,153)"
        resetBtn_elem.style.backgroundColor = "rgb(100,115,153)"
        equalBtn_elem.style.backgroundColor = "rgb(208,63,48)"
        inputBox_elem.style.color = "white"
        topSection_elem.style.color = "white"
        button_input_container_elem.style.backgroundColor = "rgb(36,44,68)"

    }else if(theme === 2){
        document.body.style.backgroundColor = `rgb(230,231,231)`
        inputSection_elem.style.backgroundColor = `rgb(208, 212, 212)`
        toggleBtn_elem.style.marginLeft = '10px'
        deleteBtn_elem.style.backgroundColor = "rgb(54,126,135)"
        resetBtn_elem.style.backgroundColor = "rgb(54,126,135)"
        equalBtn_elem.style.backgroundColor = "rgb(203,86,2)"
        inputBox_elem.style.color = "black"
        topSection_elem.style.color = "black"
        button_input_container_elem.style.backgroundColor = "rgb(208,205,202)"

    }
    else if(theme === 3){
        document.body.style.backgroundColor = `rgb(236,236,0)`
        inputSection_elem.style.backgroundColor = `rgb(208,205,202)`
        toggleBtn_elem.style.marginLeft = '20px'
        inputBox_elem.style.color = "gray"
        topSection_elem.style.color = "gray"
    }

}