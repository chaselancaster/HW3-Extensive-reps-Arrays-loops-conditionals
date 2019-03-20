// Easy Going 

for (let i = 1; i <= 20; i++) {
    console.log(i);
}

// Get Even 

for (let i = 0; i <= 200; i += 2) {
    console.log(i); 
}

// Excited Kitten 

for (let i = 0; i < 20; i++) {
    let random = ['...human...why you taking pictures of me?...', '...the catnip made me do it...', '...why does the red dot always get away...'];
    console.log('Love me, pet me! HSSSSSS!')
    if (i % 2 === 0) {
        console.log(random[Math.floor(Math.random() * 3)]);
    }
}

// Fizz Buzz 

// Create a for loop that log numbers between 1 - 100
// If statement that checks if number is divisible by 3 - logs "Fizz"
// If statement that checks if number is divisible by 5 - logs "Buzz"
// If state that checks if number is divisible by 3 AND 5 - logs "FizzBuzz"

for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log('FizzBuzz');
    } else if (i % 5 === 0) {
        console.log('Buzz');
    } else if (i % 3 === 0) {
        console.log('Fizz');
    } else {
        console.log(i);
    }
}