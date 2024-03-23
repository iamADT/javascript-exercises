const sumAll = function(arg1, arg2) {
    let sum = 0;
    let num1;
    let num2;
    
    if((typeof(arg1) !== "number") || (typeof(arg2) !== "number")){
        return 'ERROR';
    }
    else if(arg1 < 0 || arg2 < 0){
        return 'ERROR';
    }
    else if (arg2 > arg1){
        num1 = arg1;
        num2 = arg2;
    } else if (arg1 > arg2) {
        num1 = arg2;
        num2 = arg1;
    }

    for (let i = num1; i <= num2; i++){
        sum = sum + i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
