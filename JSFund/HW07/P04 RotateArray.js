// Write a JS function that rotates an array. The array should be rotated to the right side, meaning that the last element should become the first, upon rotation. 
// The input comes as array of strings. The last element of the array is the amount of rotation you need to perform.
// The output is the resulted array after the rotations. The elements should be printed on one line, separated by a single space.

// Input	Output
// 1
// 2
// 3
// 4
// 2	    3 4 1 2

// Banana
// Orange
// Coconut
// Apple
// 15	

// Orange Coconut Apple Banana

function rotateArray(arr){

    let rotations = Number(arr.pop());
    //console.log(rotations);

    let arrLength = arr.length;

    let rotateCount = rotations%arrLength;
    //console.log(rotateCount);


    for(let i = 0; i <rotateCount;i++){
        let lastEl = arr.pop();
        arr.unshift(lastEl);
    }

    return arr.join(' ');
}

rotateArray(['Banana','Orange','Coconut','Apple',15]);