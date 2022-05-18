var array = [2, 4, 10, [12, 4, [100, 99], 4], [3, 2, 99], 0];

let max = 0

function maxNumber(array) {
    for (let i = 0; i < array.length; i++) {
        if (Array.isArray(array[i])) {
            maxNumber(array[i])
        } else {
            if (array[i] > max) {
                max = array[i]
            }
        }
    }
}

maxNumber(array);
console.log(max);


// const array = [2, 4, 10, [12, 4, [100, 99, [111]], [10, [700, [780, [2100]]], 4], [3, 2, 99], 0]];
// const flatArray = array.flat(array.length);

// console.log("Max Value is " + Math.max(...flatArray));

