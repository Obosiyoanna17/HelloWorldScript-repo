const { rejects } = require('assert');
const { resolve } = require('dns');
const fs = require('fs')
// Callback function
// 1. setTimeout
setTimeout(() => {
    console.log("Waited 1 second");
}, 1000);
// nested setTimeouts
setTimeout(() => {
    console.log('3');
setTimeout(() => {
    console.log('2');
setTimeout(() => {
    console.log('1');
}, 1000);
}, 1000);
}, 1000);

// Promises: Passing in a function that accepts bth a resolve and reject
const myPromise = new Promise((resolve, reject) => {
    const rand = Math.floor(Math.random() * 2);
    if (rand = 0) {
        resolve();
    } else {
        reject();
    }
});
myPromise
.then(() => console.log('Success'))
.catch(() => console.error('Something went wrong'));

// fs readFile with promises
fs.promises
    .readFile('writtenText.txt', 'utf-8')
    .then(data => console.log(data))
    .catch((err) => console.error(err));
        
// *****Asyn/Await****
// load file with asyn/await
const loadFile = async () => {
    const data = await fs.promises.readFile('writtenText.txt', 'utf-8');
    console.log(data);
};
loadFile();