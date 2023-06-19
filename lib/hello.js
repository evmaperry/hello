const { Greeter } = require('./greeter');

// Default is "World"
// Author: Evan Perry (evan@perry.com)
const name = process.argv[2] || "World";

const greeter = new Greeter(name);
console.log(greeter.greet());