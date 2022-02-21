//console.log(test);
//var test = "test";
//let test = "test";
//const test = "test";

// test();

// function test() {
//     console.log("It is a function");
// }

// function test() {
//     var nice = "nice";
// }

// console.log(nice);

// if(true) {
//     var test = "test";
// }

// console.log(test);

// for (let i = 0; i < 3; i++) {
//     setTimeout(() => {
//         alert(i);
//     }, 500)
// }

for(let i = 0; i < 3; i++) {
    (function test(o){
        alert(o);
    })(i)
}