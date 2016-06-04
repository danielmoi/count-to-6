// The minimum of [18,5,7,24] is 5

var args = process.argv.slice(2);

console.log(`The minimum of [${args}] is ${Math.min(...args)}`);

var numbers = process.argv.slice(2);
    var min = Math.min(...numbers);

    console.log(`The minimum of [${numbers}] is ${min}`);
