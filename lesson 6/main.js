
// Array 1

// function getLEAVL(n) {
//     let Array1 = [];

//     for (let i = 1; i <= n+1; i++) {
//         Array1.push(2**i);
//     }

//     return Array1;
// }

// const Array1 = getLEAVL(20);
// console.log(Array1);
// console.log(20);

// Array 3

// const arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
// console.log(arr.reverse(arr));

// Array 4


// let n = 15
// let arr = [1,23,455,87,66,45,89,444,25,445,222,55,77,88,9,];

// for(let i=1;i<n;i++){
//     if(i%2==1){
//         arr.push(i)
//     }
// for(let j=0; j<arr.length;j++){
//         if(arr[j]%2 !==0){
//             console.log(j);
//         }
//     }
// }


// Array 5

// const arrr=[]
// let n = 50;
// let arr = [1,23,455,87,66,45,89,444,25,445,222,55,77,88,9,];

// for (let i = 1; i < n; i++) {
//     if (i % 2 == 0) {
//         arr.push(i);
//     }
// }
// for (let j = 0; j < arr.length; j++) {
//     if (arr[j] % 2 !== 0) {
//         arrr.push(arr[j])
//     }
// }
// console.log(arrr);


// Array 6

// const pl=[]
// let n = 50;
// let arr = [1,23,455,87,66,45,89,444,25,445,222,55,77,88,9,];

// for (let i = 1; i < n; i++) {
//     if (i % 2 == 0) {
//         arr.push(i);
//     }
// }
// for (let j = 0; j < arr.length; j++) {
//     kl=[]
//     if (arr[j] % 2 == 0) {
    
//         pl.push(arr[j])
    
//     }
// }
// console.log(pl);


// Array 7

// const pl = [];
// let n = 50;
// let arr = [1, 23, 455, 87, 66, 45, 89, 444, 25, 445, 222, 55, 77, 88, 9];

// for (let i = 1; i < n; i++) {
//     if (i % 2 == 0) {
//         arr.push(i);
//     }
// }

// for (let j = 0; j < arr.length; j++) {
//     if (arr[j] % 2 !== 0) {
//         pl.push(arr[j]);
//     }
// }

// console.log(pl);


// Array 8

// const kl = [];
// let arr = [1, 23, 455, 87, 66, 45, 89, 444, 25, 445, 222, 55, 77, 88, 9];
// let n = arr.length;

// for (let i = 0; i < n; i++) {
//     if (arr[i] % 2 !== 0) {
//         kl.push(arr[i]);
//     }
// }

// for (let i = 0; i < n; i++) {
//     if (arr[i] % 2 === 0) {
//         kl.push(arr[i]);
//     }
// }

// console.log(kl);

// Array 9

// function toqJuftIndeksliChiqar(arr) {
//   for (var i = 1; i < arr.length; i += 2) {
//     console.log(arr[i]);
//   }
//   for (var j = arr.length - 2; j >= 0; j -= 2) {
//     console.log(arr[j]);
//   }
// }
// var array = [1, 2, 3, 4, 5, 6, 7, 8];
// toqJuftIndeksliChiqar(array);

// Array 11

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

// function rangeoutSUM() {
//     let sum = 0;
//     for (let i = 1; i < arr.length-1; i++) {
    
//             sum += arr[i];
        
//     }
//     return sum;
// }

// console.log(rangeoutSUM());


// Array 12

// function separateTruthyFalsy(arr) {
//   var truthyArray = [];
//   var falsyArray = [];

//   for (var i = 0; i < arr.length; i++) {
//     if (arr[i]) {
//       truthyArray.push(arr[i]);
//     } else {
//       falsyArray.push(arr[i]);
//     }
//   }

//   console.log("Truthy: ", truthyArray);
//   console.log("Falsy: ", falsyArray);
// }
// var inputArray = [10, false, "", "Abdulaziz", null];
// separateTruthyFalsy(inputArray);


// Array 13

    
// const pl=[]
// let arr = [1,23,455,87,66,45,89,444,25,445,222,55,77,88,9,];

// for (let i in arr) {
//     if (i % 2 == 0 && i != 0) {
//         pl.push(arr[i]);
//     }
// }

// console.log(pl.sort());

// Array 14

// const pl=[]
// let arr = [1,23,455,87,66,45,89,444,25,445,222,55,77,88,9,];

// for (let i in arr) {
//     if (i % 2 == 1 && i != 0) {
//         pl.push(arr[i]);
//     }
// }

// console.log(pl.sort().reverse());

// Array 20

// let a = [1,2,3,4,5,6,7,8,9,10]
// let b= []

// for(let i =0 ; i<a.length; i++){
//     if(a[i]% 2===0){
//         b.push(a[i])
//     }
// }
// console.log(b);

// Array 21

// let a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let b = [];

// for (let i = 0; i < a.length; i++) {
//     b.push(a[i] + 1);
// }

// console.log(b);


// N 16

// let a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let r = 2.89;

// let closestValue = a[0];

// for (let i = 1; i < a.length; i++) {
//     if (Math.abs(a[i] - r) < Math.abs(closestValue - r)) {
//         closestValue = a[i];
//     }
// }

// console.log(closestValue);


// // ar17

// function findMaxPair(arr) {
//   if (arr.length < 2) {
//     return "Arrayda kamida 2 ta element bo'lishi kerak";
//   }
//   var maxSum = arr[0] + arr[1];
//   var maxPair = [arr[0], arr[1]];
//   for (var i = 1; i < arr.length - 1; i++) {
//     var currentSum = arr[i] + arr[i + 1];
//     if (currentSum > maxSum) {
//       maxSum = currentSum;
//       maxPair = [arr[i], arr[i + 1]];
//     }
//   }
//   return maxPair;
// }
// var array = [1, 3, 6, 9, 12, 8, 7];
// console.log(findMaxPair(array));