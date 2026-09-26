'use strict';

// Prepare function to print greeting with single argument

const hello = (Ivan) => {
  console.log(`Hello, ${Ivan}!`);
};
hello("Ivan");
module.exports = { hello };