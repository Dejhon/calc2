


//for caluclating part

var second ;
var first ;
var sign ;

// document.getElementById("output").innerHTML = "hello";
// function calculate()  {

// second = document.getElementById("second").value;
// first = document.getElementById("first").value;
// sign = document.getElementById("sign").value;



// if (sign == "+") {
// let result = parseFloat(first) + parseFloat(second)
// document.getElementById("output").innerHTML = result;

// } 
// else if(sign == "-") {     
//     let result = parseFloat(first) + parseFloat(second)
//     document.getElementById("output").innerHTML = result;
// }

// else if(sign == "*") {     
//     let result = parseFloat(first) + parseFloat(second)
//     document.getElementById("output").innerHTML = result;
// }

//  else if(sign == "/") {     
//     let result = parseFloat(first) + parseFloat(second)
//     document.getElementById("output").innerHTML = result;
// }

// }

var hide = document.getElementById('sign');

hide.addEventListener('change',(event)=>{
    // console.log(event.target.value)
    if((event.target.value == 'CAC') || (event.target.value == 'CAR') || (event.target.value == 'CAD')){
        document.getElementById('second').style.display = 'hide';
    }else{
        document.getElementById('second').style.display = 'flex';
    }
})


function calculate2(){
    var retval
    second = parseFloat(document.getElementById("second").value);
    first = parseFloat(document.getElementById("first").value);
    sign = document.getElementById("sign").value;
    retval = docalculation(first,second,sign);
    document.getElementById("output").innerHTML = retval;
}


function docalculation(val1,val2,operator='+') {

var result = 0;
const pi = 3.14;
var radius;
var circ;
var square;
// var operand = document.getElementById("sign").value;
var operand = operator;
    switch (operand) {
        case '*':
            result = val1 * val2;
            break;
        case '-':
            result = val1 - val2;
            break;
        case '+':
            result = val1 + val2;
            break;
        case '/':
            result = val1 / val2;
            break;
        case 'CAC':
            circ   = (val1) / pi;
            radius = circ / 2;
            square = Math.pow(radius, 2);
            result = (square * pi).toFixed(2);
            break;
        case 'CAR':
            result = pi * Math.pow(val1, 2);
            break;
        case 'CAD':
            result = pi * Math.pow(val1/2,2);
            break;
        case 'Rect':
            result = val1 * val2;
            break;
        default: 
            result = val1 + val2;
            break;

    }
    return result;
}