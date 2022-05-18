// function getUniqueValue(array) {
//     var uniqueArray = [];
//     for (var i = 0; i < array.length; i++) {
//         var element = array[i];
//         if (uniqueArray.indexOf(element) == -1) {
//             uniqueArray.push(element);
//         }
//     }
//     return uniqueArray;
// }

// var arrayValue = [1, 5, 7, 44, 5, 9, 4, 5, 9, 10, 6, 7, 8, 1, 1, 1, 1, 1, 7, 7];
// var getUniqueResult = getUniqueValue(arrayValue);


// var temp;

// for (var i = 0; i < getUniqueResult.length; i++) {
//     for (var j = 0; j < getUniqueResult.length; j++) {
//         if (getUniqueResult[i] > getUniqueResult[j]) {
//             temp = getUniqueResult[i];
//             getUniqueResult[i] = getUniqueResult[j];
//             getUniqueResult[j] = temp;
//         }
//     }
// }

// for (var i = 0; i < getUniqueResult.length; i++) {
//     for (i = j + 1; j < getUniqueResult.length; j++) {
//         var b = getUniqueResult[i];
//         getUniqueResult[i] = getUniqueResult[j];
//         getUniqueResult[j] = b;
//     }
// }

// console.log(getUniqueResult);



var arr = [1, 5, 7, 44, 5, 9, 4, 5, 9, 10, 6, 7, 8, 1, 1, 1, 1, 1, 7, 7, 7, 7, 7, 7];

function uniqSort(arr = []) {
    var map = {};
    var res = [];
    for (let i = 0; i < arr.length; i++) {
        if (!map[arr[i]]) {
            map[arr[i]] = true;
            res.push(arr[i]);
        };
    };
    return res.sort(
        function (a, b) {
            var result = a - b;
            return result;
        });
};
console.log(uniqSort(arr));