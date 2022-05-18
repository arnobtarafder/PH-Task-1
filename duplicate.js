var array =  ["1", "5", "9", "14", "5", "22", "48", "25", "22", "20", "9" ,"13"]
;

var object = {}
for (var i = 0; i < array.length; i++) {
    object[array[i]] = object[array[i]] != null ? object[array[i]] + 1 : 0 //stores duplicate in an obj

}

console.log(object);



// function countDuplicates() {

//     var string =  ["1", "5", "9", "14", "5", "22", "48", "25", "22", "20", "9" ,"13"]
//     ;
//     var array = [];
//     var count = 0;

//     for (var i = 0; i < string.length; i++) {
//         array.push(string[i]);

//     }
//     array.sort();
//     for (var i = 0; i < array.length; i++) {
//         if (array[i] == array[i - 1]) {
//             count++;
//         } else {
//             count = 0;
//         }
//         if (array[i] != array[i + 1]) {
//             console.log(array[i] + ": " + (count));
//         }

//     }
// }
// countDuplicates();




// function getDuplicates(arr) {
//     var count = {};
//     for (var i = 0; i < arr.length; i++) {
//         var duplicate = arr[i];
//         if (duplicate in count) {
//             count[duplicate] = count[duplicate] + 1;
//         } else {
//             count[duplicate] = 1;
//         }
//     }

//     for (var key in count) {
//         console.log("Value " + key + " is repeated " + (count[key] - 1) + " times");
//     }
// }

// getDuplicates( ["1", "5", "9", "14", "5", "22", "48", "25", "22", "20", "9" ,"13"]
// );




// var array =  ["1", "5", "9", "14", "5", "22", "48", "25", "22", "20", "9" ,"13"]
// ,
//     sortedArr = [],
//     count = 1;
// sortedArr = array.sort(function (a, b) {
//     return a - b
// });
// for (var i = 0; i < sortedArr.length; i = i + count) {
//     count = 1;
//     for (var j = i + 1; j < sortedArr.length; j++) {
//         if (sortedArr[i] === sortedArr[j])
//             count++;
//     }
//     console.log(sortedArr[i] + "is repeated" + (count - 1) + " times");
// }