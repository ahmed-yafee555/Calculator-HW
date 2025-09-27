let display = document.getElementById("display")

function appendValue(value){
    display.value += value  
}

function clearDisplay(){
    display.value = ""
}

function calculate(){
    if(display.value == ""){
        display.value = "Error"
    }
    else{
        display.value = "Take your money"
    }
}


document.addEventListener("keydown", function(event){
    let key = event.key

    if(
        key>="0" && key<="9"
    ){
        appendValue(key)
    }
    
    if( key === "Enter"){
        calculate()
    }
    if(key === "Backspace"){
        display.value = display.value.slice(0, -1)
    }
    if(key === "Escape"){
        clearDisplay()
    }
})