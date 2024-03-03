let answer = parseInt(prompt('Please enter the number you would like to FizzBuzz up to:'));

for (let x = 1; x <= answer; x++) {
    if ( x % 3 === 0 && x % 5 ===0) {
        console.log('FizzBuzz');
    } else if (x % 5 ===0) {
        console.log('Buzz');
    } else if (x % 3 === 0) {
        console.log('Fizz');
    } else {
        console.log(x);
    }
}