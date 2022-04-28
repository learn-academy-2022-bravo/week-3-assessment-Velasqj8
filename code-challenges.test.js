// ASSESSMENT 3: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// --------------------1) Create a function that takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence.

// a) Create a test with expect statements for each of the variables provided.

// Example input: 6
// Expected output: [1, 1, 2, 3, 5, 8]

// Example input: 10
// Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

describe("fibonacciNumbers", () => {
  it("takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence", () => {
    // Example input: 6
    // Expected output: [1, 1, 2, 3, 5, 8]
    // Example input: 10
    // Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]
    expect(fibonacciNumbers(6)).toEqual([1, 1, 2, 3, 5, 8])
    expect(fibonacciNumbers(10)).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55])
  })
})

// Pseudocode
// Create a function called fibonacciNumbers that takes in a number
// Iteration with a for loop
// Access each index and perform addition
// Use push method to add elments to end of array
// Expected output: [1, 1, 2, 3, 5, 8]
// Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

// b) Create the function that makes the test pass.

const fibonacciNumbers = (number) => {
  let array = [1, 1]
  for(let i = 1; i < number - 1; i++) {
    if (number > 2){
      array.push(array[i] + array[i - 1])
    }
  }
  return array
}

// PASS  ./code-challenges.test.js
//  fibonacciNumbers
//    ✓ takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence (1 ms)

// --------------------2) Create a function that takes in an array and returns a new array of only odd numbers sorted from least to greatest.

// a) Create a test with expect statements for each of the variables provided.

// const fullArr1 = [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"]
// Expected output: [-9, 7, 9, 199]

// const fullArr2 = ["hello", 7, 23, -823, false, 78, null, "67", 6, "number"]
// Expected output: [-823, 7, 23]

describe("oddNumbersFiltered", () => {
  it("takes in an array and returns a new array of only odd numbers sorted from least to greatest", () => {
    const fullArr1 = [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"]
    // Expected output: [-9, 7, 9, 199]
    const fullArr2 = ["hello", 7, 23, -823, false, 78, null, "67", 6, "number"]
    // Expected output: [-823, 7, 23]
    expect(oddNumbersFiltered(fullArr1)).toEqual([-9, 7, 9, 199])
    expect(oddNumbersFiltered(fullArr2)).toEqual([-823, 7, 23])
  })
})

// FAIL  ./code-challenges.test.js
//  oddNumbersFiltered
//    ✕ takes in an array and returns a new array of only odd numbers sorted from least to greatest
//
//  ● oddNumbersFiltered › takes in an array and returns a new array of only odd numbers sorted from least to greatest
//
//    ReferenceError: oddNumbersFiltered is not defined

// Pseudocode
// Create a function called oddNumbersFiltered that takes in an array.
// Use filter to create a new array
// Use if statement to iterate
// Create a statement to seperate odd numbers
// Use sort method to order from least to greatest
// Expected output: [-9, 7, 9, 199]
// Expected output: [-823, 7, 23]

// b) Create the function that makes the test pass.

const oddNumbersFiltered = (array) => {
  return array.filter(value => {
    if (value % 2 !== 0 && typeof (value) === "number") {
      return array
    }
  }).sort((a, b) => a - b)
}

// PASS  ./code-challenges.test.js
//  oddNumbersFiltered
//    ✓ takes in an array and returns a new array of only odd numbers sorted from least to greatest (2 ms)

// --------------------3) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

// a) Create a test with expect statements for each of the variables provided.

// const numbersToAdd1 = [2, 4, 45, 9]
// Expected output: [2, 6, 51, 60]

// const numbersToAdd2 = [0, 7, -8, 12]
// Expected output: [0, 7, -1, 11]

// const numbersToAdd3 = []
// Expected output: []

describe("sumNumbers", () => {
  it("takes in an array and returns an array of the accumulating sum. An empty array should return an empty array", () => {
    const numbersToAdd1 = [2, 4, 45, 9]
    // Expected output: [2, 6, 51, 60]
    const numbersToAdd2 = [0, 7, -8, 12]
    // Expected output: [0, 7, -1, 11]
    const numbersToAdd3 = []
    // Expected output: []
    expect(sumNumbers(numbersToAdd1)).toEqual([2, 6, 51, 60])
    expect(sumNumbers(numbersToAdd2)).toEqual([0, 7, -1, 11])
    expect(sumNumbers(numbersToAdd3)).toEqual([])
  })
})

// Pseudocode
// Create a function called sumNumbers that takes in an array
// Use the map method to hold key value pair
// Use if statement to iterate
// Use return statements to accumulate sum
// Expected output: [2, 6, 51, 60
// Expected output: [0, 7, -1, 11]
// Expected output: []

// b) Create the function that makes the test pass.

const sumNumbers = (array) => {
  let newArray = []
  return array.map((value, index) => {
    if (index > 0) {
      return newArray = value + newArray
    } else {
        return newArray = value
    }
  })
}
console.log(sumNumbers(numbersToAdd1))
console.log(sumNumbers(numbersToAdd2))

// PASS  ./code-challenges.test.js
//  sumNumbers
//    ✓ takes in an array and returns an array of the accumulating sum. An empty array should return an empty array (1 ms)
