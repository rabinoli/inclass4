for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz"); // For multiples of both 3 and 5
    } else if (i % 3 === 0) {
        console.log("Fizz"); // For multiples of 3
    } else if (i % 5 === 0) {
        console.log("Buzz"); // For multiples of 5
    } else {
        console.log(i); // For all other numbers
    }
}