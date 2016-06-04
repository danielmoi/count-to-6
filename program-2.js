// You'll be given a variable number of arguments (process.argv[2] onward) to your program, all of which will be strings. Use arrow functions to perform a map-reduce operation over them, before outputting them to the console. That is, your solution should start with something like:
//

var inputs = process.argv.slice(2);
//
// var result = inputs.map( str => )
//                         .reduce(/* what goes here? */);

// var inputs = ['one', 'two'];

// arr.map(function (el) {
//   console.log(el);
// });


// var result = inputs.map( str => str ).reduce( (prev,curr) => prev + curr);

var result = inputs.map( str => str.slice(0,1) ).reduce( (prev,curr) => prev + curr);

console.log(`[${inputs}] becomes "${result}"`);


var inputs = process.argv.slice(2);
var result = inputs.map(s => s[0])
                   .reduce((soFar, s) => soFar + s);

console.log(`[${inputs}] becomes "${result}"`);
