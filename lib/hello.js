const rl = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question(`What's your name`, (myName) => {
  console.log(`Hello ${myName}!`)
  rl.close();
});