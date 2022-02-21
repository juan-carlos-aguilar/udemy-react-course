// const orig = {
//     test: 'test',
//     userDetails: {
//         address: {
//             province: 'Province',
//             country: 'country'
//         },
//         name: 'myObject'
//     },
//     myFn: () => {},
//     undef: undefined,
// }

const orig = ['avocado', 'apple', {name: 'strawberry'}];

//const copy = Object.assign({}, orig);
//const copy = JSON.parse(JSON.stringify(orig));
const copy = orig.slice();

//copy.test = 'newTest';
//copy.userDetails.name = 'newName';
//copy.push('guava');
copy[2].name = 'coconut';

console.log('orig:', orig);

console.log('copy:', copy);