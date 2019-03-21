// Easy Going 

// for (let i = 1; i <= 20; i++) {
//     console.log(i);
// }

// Get Even 

// for (let i = 0; i <= 200; i += 2) {
//     console.log(i); 
// }

// Excited Kitten 

// for (let i = 0; i < 20; i++) {
//     let random = ['...human...why you taking pictures of me?...', '...the catnip made me do it...', '...why does the red dot always get away...'];
//     console.log('Love me, pet me! HSSSSSS!')
//     if (i % 2 === 0) {
//         console.log(random[Math.floor(Math.random() * 3)]);
//     }
// }

// Fizz Buzz 

// Create a for loop that log numbers between 1 - 100
// If statement that checks if number is divisible by 3 - logs "Fizz"
// If statement that checks if number is divisible by 5 - logs "Buzz"
// If state that checks if number is divisible by 3 AND 5 - logs "FizzBuzz"

// for (let i = 1; i <= 100; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//         console.log('FizzBuzz');
//     } else if (i % 5 === 0) {
//         console.log('Buzz');
//     } else if (i % 3 === 0) {
//         console.log('Fizz');
//     } else {
//         console.log(i);
//     }
// }

// Getting to Know You 

// const kenny = ["Kenny", 1000, "Austin"];
// const jimHaff = ["Jim H", 16, "All cities"];
// const reuben = ["Reuben", 22, "Durham"];
// const jimClark = ["Jim C", 186, "LA"];
// const ryan = ["Ryan", 65, "Denver"];

// 1

// kenny.splice(0, 1, "Gameboy");

// 2 

// for (let i = 0; i < jimClark.length; i++) {
//     if (!isNaN(jimClark[i])) {
//         jimClark[i]++
//     }
// }

// 3

// ryan.splice(2, 1, "Gotham City");

// 4

// reuben.pop();
// reuben.push("Chicago");

// 5

// jimHaff.splice(2, 1, "LA", "SF", "SD")

// 6

// jimHaff.splice(2, 1)


// Yell at the Ninja Turtles 

// #1

// const turtles = ['Donatello', 'Leonardo', 'Raphael', 'Michaelangelo'];

// #2

// for (let i = 0; i < turtles.length; i++) {
//    console.log(turtles[i].toUpperCase());
// };

// Bonus 

// for (let i = 0; i < turtles.length; i++) {
//     let thisTurtle = turtles[i];
//     let mixedTurtle = '';
//     for (let j = 0; j < thisTurtle.length; i++) {
//         if (j % 2 === 0) {
//             mixedTurtle += thisTurtle[j].toUpperCase();
//         } else {
//             mixedTurtle += thisTurtle[j].toLowerCase();
//         }
//     }
//     console.log(mixedTurtle);
// }


// Return of the Closets

// const kristynsCloset = [
//     "left shoe",
//     "cowboy boots",
//     "right sock",
//     "GA hoodie",
//     "green pants",
//     "yellow knit hat",
//     "marshmallow peeps"
//   ];

// const thomsCloset = [
//     [
//       // These are Thom's shirts
//       "grey button-up",
//       "dark grey button-up",
//       "light blue button-up",
//       "blue button-up",
//     ],[
//       // These are Thom's pants
//       "grey jeans",
//       "jeans",
//       "PJs"
//     ],[
//       // Thom's accessories
//       "wool mittens",
//       "wool scarf",
//       "raybans"
//     ]
//   ];

// Alien Attire #1

// kristynsCloset.splice(0, 1);
// let kristynsShoe = 'left shoe';
// thomsCloset[2].push(kristynsShoe);

// Dress 'em up #1

// console.log('Thom is wearing a ' + thomsCloset[0][0] + ' with ' + thomsCloset[1][0] + ' and ' + thomsCloset[2][2]);
// console.log('Thom is wearing a ' + thomsCloset[0][3] + ' with ' + thomsCloset[1][1] + ' and a ' + thomasCloset[2][1]);
// console.log('Thom is wearing a ' + thomsCloset[0][2] + ' with ' + thomsCloset[1][2] + ' and ' + thomasCloset[2][0]);    

// Dirt Laundry 

// #1 

// for (let i = 0; i < kristynsCloset.length; i++) {
//     console.log('WHIRR: Now washing ' + kristynsCloset[i]);
// }

// #2

// console.log(thomsCloset[0], thomsCloset[1], thomsCloset[2]);


// Multiples of 3 and 5

// var sum = 0;
// for (let i = 0; i <= 1000; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//         sum += i;
//     }
// }
// console.log(sum); 








