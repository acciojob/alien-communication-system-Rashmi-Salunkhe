// Macrotask: setTimeout with a delay of 0 (moves to macrotask queue)
setTimeout(() => {
    console.log("Macrotask: setTimeout 1");
}, 0);

// Microtask: Promise resolved immediately (goes to microtask queue)
Promise.resolve().then(() => {
    console.log("Microtask: Promise 1");
});

// Another Macrotask: setTimeout
setTimeout(() => {
    console.log("Macrotask: setTimeout 2");
}, 0);

// Another Microtask: Promise resolved immediately
Promise.resolve().then(() => {
    console.log("Microtask: Promise 2");
});

// This will be logged first because it's in the main execution stack
console.log("Main thread: Program starts");
