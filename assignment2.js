var strArr = ['fara', 'mosin', 'ashwini', 'sanjana', 'prajwal', 'shara']

console.log(strArr.sort());                 //sort array


// ******************************************************************************************


var arr = [10,15,20,30,35,40]
clone = arr.map((element) => element);
    console.log(clone)                                   //clone

// ******************************************************************************************


 var arr1 = ['fara', 'mosin', 'ashwini', 'sanjana', 'prajwal', 'shara']

var firstele=arr1.filter((ele)=>{if (ele=='fara')return ele;})  
console.log(firstele.toString());                      //first element print

// ******************************************************************************************



 var arr2=['ashwini','fara', 'mosin',   'prajwal','sanjana', 'shara']

 console.log(arr2.toString());     //convert array into string                            

// ******************************************************************************************
 var name = "JavaScript"

 console.log(name.toUpperCase());                                   //convert string in uppercase and lowecase

  console.log(name.toLowerCase());

 // ******************************************************************************************

 var name=['fara','mosin','ashwini','sanjana','prajwal','shara'];
 var removelment=name.shift();
 console.log("after removing first element",name);

 // que . remove and delete first element from array
//  // removed element : fara

// ******************************************************************************
 var arr = [10,15,20,30,35,40]
 var newfun=Object.assign(arr);
 console.log(typeof newfun);                     //clone with predefine function
