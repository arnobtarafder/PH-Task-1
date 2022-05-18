function getFactorialNumber(num) {
    // if (num != 9) {
    //     return "No number is allowed other than 9";
    // }
    if (num < 0) {
        return "Sorry! negative number is not allowed here";
    }
    if (num == 0 || num == 1) {
        return 1;
    }
    if(isNaN(num)) {
        return "Only number is allowed";
    }
    else {
        return (num * getFactorialNumber(num - 1));
    }
}


const result = getFactorialNumber(9);
console.log(result);