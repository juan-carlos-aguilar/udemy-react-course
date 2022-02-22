// function calculateSquareArea() {
//     return new Promise(function(resolve, reject) {
//         setTimeout(() => {
//             const squareArea = 5 * 5;
//             resolve(squareArea);
//         }, 500);
//     })
// }

// const myPromises = [
//     new Promise((resolve, reject) => setTimeout(() => resolve(100), 100)),
//     new Promise((resolve, reject) => setTimeout(() => reject(200), 200)),
//     new Promise((resolve, reject) => setTimeout(() => resolve(300), 300))
// ];

// function onFulFilled(data) {
//     console.log('onFulFilled', data);
// }

// **.any and .race example**
// Promise.race(myPromises)
// .then(onFulFilled)
// .catch((reason) => {
//     console.log('catch:', reason);
// });
// function onRejected(reason) {
//     console.log('onRejected:', reason)
// }

// Promise.reject('testresolve')
// .then(onFulFilled)
// .catch((reason) => {
//     console.log('catch:', reason);
// });

// **async and await examples**
let myNumber = 5;

function changeNumber() {
    return new Promise((resolve) => {
        setTimeout(() => {
            myNumber = 10;
            resolve(myNumber);
        }, 500);
    })
}

async function startChange() {
    await changeNumber();
    console.log(myNumber);
}

startChange();