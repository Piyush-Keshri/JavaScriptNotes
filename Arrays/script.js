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

const movements = [200,450,-400,3000,-650,-130,70,1300];

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

//MAP method
//map returns a new array containing the results of an operation on all original array elements. 
const numbers = [65, 44, 12, 4];
const newArr = numbers.map(myFunction)

function myFunction(num) {
  return num * 10;
}
console.log(newArr);

//filter Method
//filter returns a new array containing the array elements that passed the specified test condition.
const ages = [32,33,16,39,5,7,46,91,88,3,24,40];
const result = ages.filter(checkAdult);

function checkAdult(age) {
  return age >= 18;
}
console.log(result);

//reduce Method
//reduce boils("reduces") all array elements down to one single value. (eg:-adding all elements together).
//The reduce() method does not change the original array.

console.log(movements)

//accumulator is like a container which holds the cummulative values.It is the first parameter in the call back function of reduce()method.

const balance = movements.reduce(function(acc,curr,i,arr){
    console.log(`Iteration No. : ${i} - acc :${acc}`)
    return acc+curr;

},0);
console.log(balance);
//Here 0 is the starting point of the accumulator.We can give any number.

//Maximum Value
const max = movements.reduce((acc,mov) => {
    if(acc > mov)
    return acc;
    else 
    return mov;
},movements[0]);
 console.log(max);

 ///////////////////////------ CHALLENGE -----//////////////////////////////
/**
 * Calculae the dog age in human years using the following formula : if the dog is<= 2 years old,
 * humanAge = 2*dogAge.If the dog is > 2 years old, humanAge = 16 + dogAge*4.
 
 *Exclude all dogs that are less than 18 human years old(which is the same as keeping dogs that are at least 18 years old.)
 *Calculate the average human age of all adult dogs.
 *Run the function for both datasets.   
 */

 const data1 = [5,2,4,1,15,8,3];
 const data2 = [16,6,10,5,6,1,4];

 const calcAverageHumanAge = function(ages){
     const humanAges = ages.map(age => age <= 2? 2*age : 16+age*4);
    //  console.log(humanAges);

    const adults = humanAges.filter(age => age>= 18);
    // console.log(adults);

    const average = adults.reduce((acc,age) => acc+age,0) / adults.length;
    // return average;
    console.log(average);
 };
 calcAverageHumanAge(data1);

//-------------------------THE FIND METHOD-----------------------------------//
// The find() method returns the value of the first element in the provided array that satisfies the provided testing function. If no values satisfy the testing function, undefined is returned.
const firstWithdrawal = movements.find(mov => mov < 0);
console.log(movements);
console.log(firstWithdrawal);

//Some Method()
// The some() method tests whether at least one element in the array passes the test implemented by the provided function.
// It returns true if, in the array, it finds an element for which the provided function returns true; otherwise it returns false.
// It doesn't modify the array.

const anyDeposits = movements.some(mov => mov >1500);
console.log(anyDeposits);

//Every Method()
// The every() method tests whether all elements in the array pass the test implemented by the provided function.
//  It returns a Boolean value.


//FLAT METHOD

const arr1 = [[1,2,3,],[4,5,6],[7,8,9,],7,2,5,4];
console.log(arr1.flat());

const arrdeep = [[1,2,[3],99],[4,[5,6]],[[7,8],9,],7,2,5,4];
console.log(arrdeep.flat(2))