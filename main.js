// function sum(...thisArgs) {
//     return thisArgs.reduce(function(previous, current){
//         return previous + current;
//     })
// }

// function sum(...thisArgs) {
//     return arguments.length;
// }

// function sum(...thisArgs) {
//         return arguments.reduce();
// }

//console.log(sum(5, 5, 5));

// const userDetails = {
//     address: 'Anywhere',
//     sample: {
//         test: 'test'
//     }
// }

// const { name: newName = 'May', address, ...otherDetails } = userDetails;

// console.log(newName);
// console.log(otherDetails);

// //const newUserDetails = { ...userDetails, mobileNumber: 123 }
// const newUserDetails = { ...userDetails, name: 'May' }
// //newUserDetails.sample.test = 'newTest';

// console.log('userDetails:', userDetails);
// console.log('newUserDetails:', newUserDetails);

const fruits = [ undefined, 'guava', 'coconut']

const [  firstFruit = 'strawberry', ...otherFruits ] = fruits;

console.log(firstFruit);
console.log(otherFruits);

// console.log('userDetails:', fruits);
// console.log('newUserDetails:', newFruits);