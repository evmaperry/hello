const { Greeter } = require('./greeter');

// Default is "World"
const name = process.argv[2] || "World";

const greeter = new Greeter(name);
console.log(greeter.greet());