console.log('tut3');
//variables in js
// var, let, const
var name='Anshuman';
// console.log(name);
// var name2= `Ans""huma"`;
// console.log(name2);
var channel;
var marks= 34;
// channel="Code with me";
console.log(name, channel, marks);
// rules for creating JavaScript variable


/*
1. Can not start with numbers.
2. can start with letter, numbers,_ ,dollar($)
3. Are case sensitive
*/

// var ^city= 'Delhi'   It will show error
var city= 'Delhi'

var $city= 'Mumbai'
console.log($city)

const ownersName= "Hari Ram";
console.log(ownersName);
// ownersName= "Anshuman"; Cont do this error
// const fruit;   You will have to define this it will show error like this
{
    let city = "Rampur";
    city= 'Kolkata';
    console.log(city)
}
console.log(city);

const arr1=[12,23,45,44,223];
// arr1=[1,23,3,3,3]      This is not possible (re-declaration)
console.log(arr1);
arr1.push(45)                      //array can be changed, it is possible.
console.log(arr1);     
arr1.reverse()                 //reverse the array by inbuilt function
console.log(arr1)         


/*
Most common program case type
1. camelCase 
2. kebab-case  
3. snake_case
4. PascalCase  


*/
