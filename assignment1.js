 var arr=[1,2,3,4]

 var a=arr.fill(6,0,5)
 console.log(a);


// ******************************question1**************************************************

 var a=arr.slice(2)          //it will give new array from 2 indexing point
 console.log(a);



// +++++++++++++++++++++++++++++++++question 3+++++++++++++++++++++++++++++++++++++++

var arr2=[1,2,3,4,5];
arr2.map((element,i)=>{ 

     ++i;                                        //using map function increment of given elements by 2 in array
    console.log(element+i);
})

// -----------------------------------------question 2------------------------------------------------

const arr1=['a','b','c'];
 const arr2=['d','e','f'];                         //question 2 concat two array

console.log(arr1.concat(arr2));


// =========================================question 3======================================================

const words=['spray','limit','elite','exuberant','destruction','color'];

const search='spray'
const b=words.find(element=>element==search);
if(b)
{
    console.log("sparay string present in array");
}

