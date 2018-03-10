function addition() {
    var num1 = parseFloat(document.getElementById('number1').value);
    var num2 = parseFloat(document.getElementById('number2').value);
    
    var sum = num1 + num2
    
    document.querySelector('.equally1').addEventListener('click', function(){
       document.querySelector('#result').value = sum; 
    });
}

function division() {
    var num1 = parseFloat(document.getElementById('number1').value);
    var num2 = parseFloat(document.getElementById('number2').value);
    
    var sum = num1 / num2
        if(num2 !== 0) {
        document.querySelector('.equally1').addEventListener('click', function(){
        document.querySelector('#result').value = sum; 
    });
    } else {
        document.querySelector('.equally1').addEventListener('click', function(){
        document.querySelector('#result').value = 'Try Again'; 
    });
    }
}

function subtraction() {
    var num1 = parseFloat(document.getElementById('number1').value);
    var num2 = parseFloat(document.getElementById('number2').value);
    
    var sum = num1 - num2
    
    document.querySelector('.equally1').addEventListener('click', function(){
       document.querySelector('#result').value = sum; 
    });
}

function multiply() {
    var num1 = parseFloat(document.getElementById('number1').value);
    var num2 = parseFloat(document.getElementById('number2').value);
    
    var sum = num1 * num2
    
    document.querySelector('.equally1').addEventListener('click', function(){
       document.querySelector('#result').value = sum; 
    });
}