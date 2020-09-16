// console.log('js is working');

// 1)

// ## Easy Going
// 1. Write a for loop that will log the numbers 1 through 20.

// <hr>
// &#x1F534; The commit message should read: <br>
// "Commit 1 - Easy Going answered"

// for (let i = 1; i < 21; i++) {
//     console.log(i);
// }

// 2)


// // ## Get Even
// 1. Write a `for` loop that will log only the even numbers in 0 through 200.
// >Hint: Think about the increment expression.

// <hr>
// &#x1F534; The commit message should read: <br>
// "Commit 2 - Get Even answered"

// for (let i = 0; i <= 200; i += 2) {
//     console.log(i);
// }

// 3)

// ## Excited Kitten
// 1. Write code that logs "Love me, pet me! HSSSSSS!" 20 times.

// 1)

// for (let i = 0; i < 20; i++) {
//   console.log("Love me, pet me! HSSSSSS!");
// }

// 2. For every **even** number in your loop, log "...human...why you taking pictures of me?...", 
// "...the catnip made me do it...", 
// or "...why does the red dot always get away..." at random.

// >Hint: You will need to use Math.random()

// ![Image of cat with funny quote about dot](https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRETGsssSXu2AS15GpQIBhuSgkhP2q_4JZcPopN4dFP-v85mAePGA)

// const catPhrase = ['...human...why you taking pictures of me?...', 
// '...the catnip made me do it...', 
// '...why does the red dot always get away...'];

// for (let i = 0; i < 20; i++) {
//      if (i % 2 === 0) {
//         console.log(catPhrase[Math.floor(Math.random() * catPhrase.length)]);
//     } else {
//          console.log([i]);
//      }
// }

// 4)

// ## Fizz Buzz 

// >NOTE: THIS IS A CLASSIC RITE-OF-PASSAGE FOR JAVASCRIPT PROGRAMMERS, ESPECIALLY ONES AT GA

// Write a javascript application that logs all numbers from 1 - 100 **AND**: 

//   1. If a number is divisible by 3 log "Fizz" instead of the number.
  
//   1. If a number is divisible by 5 log "Buzz" instead of the number.
  
//   1. If a number is divisible by 3 and 5 log "FizzBuzz" instead of the number, "Fizz", or "Buzz".
    
// <hr>
// &#x1F534; The commit message should read: <br>
// "Commit 4 - Fizz Buzz answered"

// for (let i = 1; i <= 100; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//         console.log('FizzBuzz');
//     }else if (i % 3 === 0) {
//         console.log('Fizz')
//     }else if (i % 5 === 0) {
//         console.log('Buzz');
//     }else {
//         console.log(i);
//     }
// }

//  5.

// // ## Getting to Know You
// // Use the following arrays to answer the questions below (name, age, hometown):
// // ```javascript
// const kenny = ["Kenny", 1000, "Austin"];
// const jimHaff = ["Jim H", 16, "All cities"];
// const reuben = ["Reuben", 22, "Durham"];
// const jimClark = ["Jim C", 186, "LA"];
// const ryan = ["Ryan", 65, "Denver"];
// // ```
// // 1. Jim Clark decides that Kenny can't be named "Kenny" anymore. Remove "Kenny" from the `kenny` array and replace it with "Gameboy".
 
// // 1)
// kenny[0] = "Gameboy";
//   kenny.splice(0, 1, "Gameboy");
//   console.log(kenny);
// // 2. Jim Clark just had his birthday; change jimClark's array to reflect him being a year older.  Don't just hard code `187`--pretend that you didn't already know that his age is 186, and write your code to just make him a year older than whatever age he was.

// // 2)

// for (let i = 0; i < jimClark.length; i++) {
//     if (typeof jimClark[i] === "number") {
//         let age = jimClark[i] + 1;
//         jimClark.splice(1, 1, age);
//         console.log(jimClark)
//     }
// }

// // 3. Ryan is Batman maybe. Or possibly Robin. Change Ryan's hometown from "Denver" to "Gotham City".

// // 3)

// ryan.splice(2, 1, "Gotham");
//  console.log(ryan);

// // 4. Reuben left Durham 5 years ago to come to Chicago. First, remove "Durham" from Reuben's array, and then add "Chicago". (Note: remove and then add is different from simply changing the value at that index.)

// // 4)

// reuben.pop();
// console.log(reuben);

// reuben.push("Chicago");
// console.log(reuben);

// // 5. Jim Haff could be literally anywhere in the world. Remove "All cities" from his array, then pick any 3 cities you like, and add them to Jim's array. If you did it in 3 lines of code that's fine, but [see if you can do it in one line of code](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push)

// // 5)

// jimHaff.splice(0, 3, "Paris", "Tokyo", "Prague");
// console.log(jimHaff);



// // 6. Bonus: Whoops! Jim Haff is actually only allowed to be in one of two cities.  Whatever the _first_ of the 3 cities for Jim Haff is now, remove it from the array using [`.splice()`](https://www.google.com/search?q=mdn+splice&oq=mdn+splice&aqs=chrome.0.0j69i60j0l4.1078j0j7&sourceid=chrome&ie=UTF-8)

// // 6) 

// jimHaff.splice(0,1)
// console.log(jimHaff);
// // <hr>
// // &#x1F534; The commit message should read: <br>
// // "Commit 5 - Getting to Know You answered"


// 6.

// ## Yell at the Ninja Turtles
// 1. Create an array with the members of the ninja turtles (Donatello, Leonardo, Raphael, Michaelangelo)

// // 1)

// const ninTurts = ['Donatello', 'Leonardo', 'Raphael', 'Michaelangelo'];



// 2. Use a `for loop` to call `.toUpperCase()` on each of them and print out the result.

// 2)

// for (let i = 0; i < ninTurts.length; i++) {
//     ninTurts[i] = ninTurts[i].toUpperCase();
//     console.log(ninTurts[i]);
// }

// 3. Bonus: Modify the answer you just wrote. Instead of all letters being uppercase, make the letters alternate back and forth between uppercase and lowercase.

// 3) 

// for (let i = 0; i < ninTurts.length; i++) {
//     // console.log(ninTurts[i].toUpperCase());
//     ninTurts[i] = ninTurts[i].split('');
//     for (let t = 0; t < ninTurts[i].length; t += 2) {
//     // console.log(ninTurts[i][t].toUpperCase());
//         ninTurts[i][t] = ninTurts[i][t].toUpperCase();
//     }
//     ninTurts[i] = ninTurts[i].join('');
//     console.log(ninTurts[i]);
// }
// <hr>
// &#x1F534; The commit message should read: <br>
// "Commit 6 - Yell at the Ninja Turtles answered"


// 7.
//## Return of the Closets

// Below, we've given you examples of Kristyn and Thom's closets 
//modeled as data in JavaScript. Use this data to answer the following 
//questions.

// ```javascript
const kristynsCloset = [
  "left shoe",
  "cowboy boots",
  "right sock",
  "GA hoodie",
  "green pants",
  "yellow knit hat",
  "marshmallow peeps"
];

// // Thom's closet is more complicated. Check out this nested data 
//structure!!
const thomsCloset = [
  [
    // These are Thom's shirts
    "grey button-up",
    "dark grey button-up",
    "light blue button-up",
    "blue button-up",
  ],[
    // These are Thom's pants
    "grey jeans",
    "jeans",
    "PJs"
  ],[
    // Thom's accessories
    "wool mittens",
    "wool scarf",
    "raybans"
  ]
];
// // ```

// // ### Alien Attire
// // 1. Kristyn's left shoe has traveled through time and space and 
// //turned up in Thom's accessories drawer! Remove Kristyn's shoe from 
// //the array and save it to the variable `kristynsShoe`. 
// //Use that variable to add Kristyn's lost shoe to Thom's accessories 
// //array.

// // 1)

// // const kristynsShoe = kristynsCloset.shift();
// // //console.log(kristynsCloset);

// // thomsCloset[2].unshift(kristynsShoe);
// // console.log(thomsCloset);

// // ### Dress 'em Up
// // 1. Modify your code to put together **3 separate outfits** for 
// //Kristyn and Thom. Put the output in a sentence to tell us what 
// //we'll be wearing. Mix and match!

// // 1)
//  let outfit1 = [];
//   for (let i = 0; i < kristynsCloset.length; i++) {
//       if (kristynsCloset[i] === kristynsCloset[1] || kristynsCloset[i] === kristynsCloset[3] 
//         || kristynsCloset[i] === kristynsCloset[4]) {
//         outfit1.push(kristynsCloset[i]);
//     } 
//   }
//   console.log("Kristyn's first outfit is,", outfit1.join(), ".");

//  let outfit2 = [];
//   for (let i = 0; i < kristynsCloset.length; i++) {
//       if (kristynsCloset[i] === kristynsCloset[0] || kristynsCloset[i] === kristynsCloset[2] 
//         || kristynsCloset[i] === kristynsCloset[5]) {
//         outfit2.push(kristynsCloset[i]);
//     } 
//   }
//   console.log("Kristin's second outfit is,", outfit2.join(), ".");
 
//   let outfit3 = [];
//   for (let i = 0; i < kristynsCloset.length; i++) {
//       if (kristynsCloset[i] === kristynsCloset[0] || kristynsCloset[i] === kristynsCloset[1] 
//         || kristynsCloset[i] === kristynsCloset[6]) {
//         outfit3.push(kristynsCloset[i]);
//     } 
//   }
//   console.log("Kristyn's third outfit is,", outfit3.join(),".");

// let tCloset = thomsCloset.flat();
// let tOutfit1 = [];

//     for (let i = 0; i < tCloset.length; i++) {
//          if (tCloset[i] === tCloset[0] || tCloset[i] === tCloset[4] || tCloset[i] === tCloset[7]){
//            tOutfit1.push(tCloset[i]);
//          }
//     }
//     console.log("Thom's first outfit is,", tOutfit1.join(),".");
// let tCloset1 = thomsCloset.flat();
// let tOutfit2 = [];

//     for (let i = 0; i < tCloset1.length; i++) {
//          if (tCloset1[i] === tCloset1[1] || tCloset1[i] === tCloset1[5] || tCloset1[i] === tCloset1[8]){
//            tOutfit2.push(tCloset1[i]);
//          }
//     }
//     console.log("Thom's second outfit is,", tOutfit2.join(),".");

//   let tCloset2 = thomsCloset.flat();
//   let tOutfit3 = [];

//     for (let i = 0; i < tCloset2.length; i++) {
//          if (tCloset2[i] === tCloset2[3] || tCloset2[i] === tCloset2[6] || tCloset2[i] === tCloset2[9]){
//            tOutfit3.push(tCloset2[i]);
//          }
//     }
//     console.log("Thom's third outfit is,", tOutfit3.join(),".");

// // <hr>
// // &#x1F534; The commit message should read: <br>
// // "Commit 7 - Kristyn and Thom have their outfits ready for class 
// //- array practice"

// 8.

// ## Dirty Laundry
// Continue looking at the closet arrays:
// 1. Time to do laundry - loop through Kristyn's closet and log the sentence "WHIRR: Now washing (item)"
// for each item in the array.

// 8)

// for (let i = 0; i < kristynsCloset.length; i++) {
//         console.log("WHIRR: Now washing " + kristynsCloset[i]);
// }

// // ### Inventory
// // 2. Thom wants to do inventory on his closet. Using **bracket notation**, log the **arrays** 
// // (not the elements in the arrays) containing all of Thom's shirts, pants, and accessories.

// console.log(thomsCloset[0]);
// console.log(thomsCloset[1]);
// console.log(thomsCloset[2]);

/* <hr>
&#x1F534; The commit message should read: <br>
"Commit 8 - I loops through their closets".
<hr> */

//9.
// ## Multiples of 3 and 5

// _Yes, you might have tackled this earlier, but try it again (don't look back at your other code :eyes:)_

// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. 
// The sum of these multiples is 23.

// Find the **sum** of all the multiples of 3 or 5 below 1000.

// 9)

for (let i = 0; i <= 1000; i++) {
  if ([i] % 3 === 0 && [i] % 5 === 0){
      console.log([i] + "This is a multiple of '3 and 5'.");
  }else if ([i] % 3 === 0) {
      console.log([i] + "This is a multiple of '3'.");
  }else if ([i] % 5 === 0) {
    console.log([i] + "This is a multiple of '5'.");
  }else{
    console.log([i]);
  }
}

function sumMulti() {
  let sum = 0;
  for (let i = 0; i <= 1000; i++) {
    if ([i] % 3 === 0 || [i] % 5 === 0) {
      sum += i;
    }
}
return sum;
}
console.log(sumMulti());
// :clap: You just solved [Project Euler](https://projecteuler.net/problem=1) problem 1! :clap:

// >Tip: Get used to thinking about how to solve problems _now_. Will help immensely with coding challenges, and get your coding brain muscles nice and flexed for the class. Make a habit of going to Project Euler and taking a crack at the problems

// <hr>
// &#x1F534; The commit message should read: <br>
// "Commit 9 - Project Euler Problem 1 answered"
// <hr>

// ---

{/* 
# Hungry for more?

## Triangles

0. declare a variable `argument` and set it equal to 7.

1. Write a loop that console logs a "left isosceles" triangle (SEE BELOW) made of '#' that has the height and length of `argument`.

>Ex: `argument` is 7

```
#
##
###
####
#####
######
#######
```

2. Write a loop that console logs a "right isosceles" triangle (SEE BELOW) made of '#' that has the height and length of `argument`.  This is deceptively tricky. 

>Ex: `argument` is 7

```
      #
     ##
    ###
   ####
  #####
 ######
#######
```


3. Write a loop that console logs an "upside down left" isosceles triangle made of '#' that has the height and length of the argument.

>Ex: `argument` is 7

```
#######
######
#####
####
###
##
#
```

4. Write a loop that console logs an "upside down right" isosceles triangle made of '#' that has the height and length of the argument.  This is also tricky.

>Ex: `argument` is 7

```
#######
 ######
  #####
   ####
    ###
     ##
      #
```

5. Change the value of `argument` and reload your code and marvel at how you just solved a challenging problem and feel proud of yourself.

<hr>
&#x1F534; The commit message should read: <br>
"Commit 10 - Triangles answered"
<hr>

## Find the Median
- Find the median number in the following `nums` array, then console.log that number.
- _hint_ this will likely involve breaking down the problem into a few steps
-  _hint_: Click "Details" below (don't read this unless you've been stuck for a while) 
<details>
if you check the length of the array / 2, you might get not get a whole number. In which case, look into `Math.floor( // something )`
</details>

```javascript
const nums = [14, 11, 16, 15, 13, 16, 15, 17, 19, 11, 12, 14, 19, 11, 15, 17, 11, 18,12, 17, 12, 71, 18, 15, 12];

Expected output:
=> 15
```

<hr>
&#x1F534; The commit message should read: <br>
"Commit 11 - Find the Median answered"
<hr>
 */}



