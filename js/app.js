function num(param) {
    document.getElementById("result").value += param;
}

function ope() {
    let operation = document.getElementById("result").value;
    
    if(operation == 0){
        document.getElementById("result").value = "Sin operación";
    }else{
        document.getElementById("result").value = eval(operation);
    }
}

function reset() {    
    document.getElementById("result").value = "";
}
