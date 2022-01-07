'use strict'

let arr = ['a','b','c','d','e'];
let arr2 = ['j','i','h','g','f'];

//------------------------ARRAY METHODS----------------------//
//Slice()
console.log(arr.slice(2));
console.log(arr.slice(2,4)); //last index is not included.
console.log(arr.slice(-2)); // (-)Begins from the end.
console.log(arr.slice(1,-2)); 
console.log(arr.slice());

//Splice() -- Mutates the original array
//console.log(arr.splice(2));
// arr.splice(-1);
// arr.splice(1,2);
// console.log(arr);

//Reverse()-- Mutates the original array.
console.log(arr2.reverse());

//Concat() 
const letters = arr.concat(arr2);
console.log(letters);
console.log([...arr,...arr2]);

//Join()
console.log(letters.join('-'));

//---------------------LOOPING THROUGH ARRAYS-----------------------------//

const movements = [200,-450,-400,3000,-650,-130,70,1300];

//The for-of loop.
for(const movement of movements){
    if(movement > 0){
        console.log(`You deposited ${movement}`);
    }
    else{
        console.log(`You widthdrew ${Math.abs(movement)}`);
    }
}
//Accessing with index.
for(const[i,movement] of movements.entries()){
    if(movement > 0){
        console.log(`Movement ${i+1} : You deposited ${movement}`);
    }
    else{
        console.log(`Movement ${i+1} : You Withdrew ${Math.abs(movement)}`);
    }
}

//-----------------The for-each loop

//continue and break statements do not work in for each loop.

movements.forEach(function(movement){
    if(movement > 0){
        console.log(`You deposited ${movement}`);
    }
    else{
        console.log(`You widthdrew ${Math.abs(movement)}`);
    }
})
//Accessing With Index 
movements.forEach(function(movement,index){
    if(movement > 0){
        console.log(`Movement ${index+1} : You deposited ${movement}`);
    }
    else{
        console.log(`Movement ${index+1} : You Withdrew ${Math.abs(movement)}`);
    }
});
