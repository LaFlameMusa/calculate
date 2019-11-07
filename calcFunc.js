function itemsFunc(num) {
   document.getElementById('input').value = document.getElementById('input').value + num;
} 

function cleanAll() {
    document.getElementById('input').value = '';
}

function equal() {
    let eq = document.getElementById('input').value;
    if (eq) {
        document.getElementById('input').value = eval(eq);
    } 
}

function deleteLastSymbol() {
    let LastSymbol = document.getElementById('input').value; 
    document.getElementById('input').value = LastSymbol.slice(0,-1);
}
 