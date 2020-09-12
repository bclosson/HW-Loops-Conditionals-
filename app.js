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

// 2. For every **even** number in your loop, log "...human...why you taking pictures of me?...", "...the catnip made me do it...", 
// or "...why does the red dot always get away..." at random.

// >Hint: You will need to use Math.random()

// ![Image of cat with funny quote about dot](https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRETGsssSXu2AS15GpQIBhuSgkhP2q_4JZcPopN4dFP-v85mAePGA)

// const catPhrase = ['...human...why you taking pictures of me?...', 
// '...the catnip made me do it...', 
// '...why does the red dot always get away...'];

// const ranPhrase = catPhrase[Math.floor(Math.random() * catPhrase.length)];

// const catSpeak = 'Love me, pet me! HSSSSSS!';

// for (let i = 1; i <= 20; i++) {
//      if (i % 2 === 0) {
//         console.log(ranPhrase)
//     } else {
//          console.log(catSpeak);
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

for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log('FizzBuzz');
    }else if (i % 3 === 0) {
        console.log('Fizz')
    }else if (i % 5 === 0) {
        console.log('Buzz');
    }else {
        console.log(i);
    }
}