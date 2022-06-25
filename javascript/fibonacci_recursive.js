function fibonacci(n) {
  if (n < 2) {
    return n
  } else if (n===2){
    return fibonacci(0) + fibonacci(1)
  }
  return fibonacci(n-1) + fibonacci(n-2)
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 0");
  console.log("=>", fibonacci(0));

  console.log("");

  console.log("Expecting: 1");
  console.log("=>", fibonacci(2));
  console.log("Expecting: 2");
  console.log("=>", fibonacci(3));
  console.log("Expecting: 3");
  console.log("=>", fibonacci(4));

  console.log("");

  console.log("Expecting: 55");
  console.log("=>", fibonacci(10));
}

module.exports = fibonacci;

// Please add your pseudocode to this file
// And a written explanation of your solution
