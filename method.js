// before swapping

let a=10;
let b=5;
//after swapping 
a=a+b;
b=a-b;
a=a-b;
console.log(a,b);


// 1...>join
let joinArray=[1,23,4,5,6,7];
console.log(joinArray.join("--"));

// 2...>concat
let concat1=[12,45,6,7];
let concat2=[2,3,4,5,6,8];
let concat3=[1,9,0,10];
console.log(concat1.concat(concat2,concat3));

// 3...>pop
let popArray=[1,2,3,5,6];
console.log(popArray.pop());

// 4...>push
let pushArray=[1,2,34,5,6];
pushArray.push(9);
console.log(pushArray);

// 5...>shift
let shiftArray=[1,2,3,4,5];
console.log(shiftArray.shift());

// 6...>unshift
let unshiftArray=[1,6,3,7,9];
unshiftArray.unshift(0);
console.log(unshiftArray);

// 7...>tostring
let toStringArray=[1,2,3,4,5,6];
console.log(toStringArray.toString());

// 8...>length
let lengthArray=[1,2,4,5,6,8,9];
console.log(lengthArray.length);

// 9...>typeof
let typeofString=[1,5,3,6,8];
console.log(typeof(typeofString));

// 10...>indexof
let indexArray1=[1,7,3,9,3];
console.log(indexArray1.indexOf(9));

// 11...>lastindexof
let lastIndexArray=[1,5,79,3];
console.log(lastIndexArray.lastIndexOf(1));

// 12...>splice
let spliceArray=[1,23,4,5,7];
console.log(spliceArray.splice(1,3,23,45,24));
console.log(spliceArray);

// 13...>slice
let sliceArray=[1,5,3,7,9];
console.log(sliceArray.slice(3,5));

// 14...>sort
let sortArray=[2,6,9,3,5,1,4,7,8]
console.log(sortArray.sort());

//...>forEach
var forEachArray=[1,2,3,4,5,6,7];
forEachArray.forEach((val)=>{
  console.log(val);
});

//15...>map
var mapArray=[1,2,3,4,5,6];
var newArr = mapArray.map((val)=>{
  return val*2;
});
console.log(newArr)

// 16...>filter
let filterArray=[1,5,7,4,9];
let newArray=filterArray.filter((newArray)=>{
  return newArray>7;
})
console.log(filterArray,newArray);

// 17...>reduce
let reduceArray=[1,2,3,4,5,6];
let newArr1 = reduceArray.reduce((acc, cur)=>{
  return acc + cur;
})
console.log(newArr1)

// 18...>reverse
let reverseArray=[1,2,3,4,55,5];
console.log(reverseArray.reverse());


//Remove duplicate values from an array
let array=[1,2,3,4,5,3,2,8];
for(var i=0;i<array.length;i++){
  for(var j=1; j<array.length; j++)
  if(array[i]==array[j]){
    array[j]=array[j+1];
  }
}
console.log(array);
array.sort();
console.log(array);

