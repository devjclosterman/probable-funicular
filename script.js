function isEvenOrOdd(n) {
    return n % 2 === 0 ? 'Even' : 'Odd';
}

console.log(isEvenOrOdd(5))

//////////////////////////////////////////////////////////////

// Are you here?
function areYouHere(arr1, arr2) {
    for(let i = 0; i < arr1.length; i++) {
        for(let j = 0; j < arr2.length; j++) {
            if(arr1[i] === arr2[j]) {
                return true;
            }
        }
    }
    return false;
}

console.log(areYouHere(['h3llo'], ['hello']))

//////////////////////////////////////////////////////////////

// Doubler
function double(arr) {
    for(let i = 0; i < arr.length; i++) {
   arr[i] *= 2;     
    }
    return arr;
}

console.log(double([1, 2, 3]))

////////////////////////////////////////////////////
function naiveSearch(str, pattern) {
    for(let i = 0; i < str.length; i++) {
        for(let j = 0; j < pattern.length; j++) {
            if(str[i + j] !== pattern[j]) break;
            if(j === pattern.length - 1) return i;
        }
    }
    return -1;
}

console.log(naiveSearch('Hello', 'el'))
////////////////////////////////////////////////

// Creating pairs
function createPairs(arr) {
    for(let i = 0; i < arr.length; i++) {
        for(let j = i + 1; j < arr.length; j++) {
            console.log(arr[i]+ "," + arr[j])
        }
    }
}

console.log(createPairs(['Hello', 1]));
///////////////////////////////////////////////

// Computing Fibonacci numbers
function fibonacci(n) {
    if(n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(23))
/////////////////////////////////////////////////
function efficientSearch(array, item) {
    let minIndex = 0;
    let maxIndex = array.length - 1;
    let currentIndex;
    let currentElement;

    while(minIndex <= mnaxIndex) {
        currentIndex = Math.floor((minIndex + maxIndex) / 2);
        currentElement = array[currentIndex];
        if(currentElement < item) {
            minIndex = currentIndex - 1;
        } else {
            return currentIndex;
        }
    }
    return -1;
}

console.log(efficientSearch())
////////////////////////////////////////////////

// Random Element
function getRandomElement(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex]
}

console.log(getRandomElement());
/////////////////////////////////////////////////

// Factorial of a Number w/ Recursion
function factorial(n) {
    if(n === 0 || n === 1) return 1;
    return n * factorial(n - 1);
}

console.log(factorial())
////////////////////////////////////////////////
