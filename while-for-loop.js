// 1. Disply "Ajke amer mon valo nei" for 39 times.

// var number = 1;
// while(number < 39){
// console.log('Ajke amer mon valo nei');
// console.log(number);
// number++;
// }

// 2. Disply numbers between 58 to 98.

// var numbers = 58;
// while(numbers < 98){
//     console.log(numbers);
//     numbers++;
// }

// 3. Show all even numbers from 412 to 456.

// var numbers = 412;
// while(numbers <= 456){
//     console.log(numbers);
//     numbers = numbers + 2;
// }

// 4. Show all odd numbers 581 and for 623.

// var number = 581;
// while(number <= 623){
//     console.log(number);
//     number = number + 2;
// }

// 5. Difference between while loop and for loop.

// var whileLoop = 'While defrenc defrenc line kaj kore';
// console.log(whileLoop);
// var forLoop = 'For inline kaj kore';
// console.log(forLoop);

// 6. Declare an array for all the topics that you have learned last few days display then as output.
// var items = ['Html', 'css', 'tailwind', 'daisyui', 'bosteb', 'javaScipt']
// console.log(items);

// 7.create an array for all the mobile phones. Display all the elements of the array
// by using a while loop.
// var mobile = ['symponi', 'smile', 'vivoa', 'vivob', 'hplaptob'];
// while(mobile <= 5){
//     console.log(mobile);
//     mobile++;
// }

// 8. Run a loop from 30 to 86. this loop will stop if the values get higher than 44.
// var number = 30;
// while(number <= 86){
//     console.log(number);
//     number++;
//         if(number > 44){
//             break;
//         }
//         console.log(number);
// }

// 9. Write the price of the books that you have.Disply the prices is lower than 200.

// var bookPrices = [330, 190, 200, 150, 145, 400, 145, 250, 180];
// for(var i = 0; i < bookPrices.length; i++){
// var bookPrice = bookPrices[i];
// if(bookPrice > 200){
//      continue;
// }
// console.log(bookPrices);
// }

// --------------

// 1. what is javaScript ?
// var java = 'JavaScript is a programing language for the Web.';
// console.log(java);

// 2. How does JS works ?
// var works = 'JS code has to run in an environment, the most common ones are browsers and Node. js. The environment needs to have an engine, which takes the JS code that's written in human-readable syntax and turns it into machine code. The engine uses a parser to go through the code line by line and check if the syntax is correct.Feb 23, 2021';

// 3. what is Variable? 
// var abol = 'Variables are containers for storing information. Creating a variable in JavaScript is called "declaring" a variable: var carName; After the declaration, the variable is empty (it has no value).';
// console.log(abol);

// 4.Declare a variable.
// var decl = 'Declaration of a variable in a computer programming language is a statement used to specify the variable name and its data type. Declaration tells the compiler about the existence of an entity in the program and its location. When you declare a variable, you should also initialize it.';
// console.log(decl);

// 5.Types of variable? How can you find out tyes of a variable.
// 6. primitive and non-primitive data types.
// Primitive data types are basic and include such values as integers, boolean, characters and other simple stored memory types. Nonprimitive data types are more complex values such as strings, objects, and arrays. Memory locations are different for both difference between primitive and non primitive data types.Mar 23, 2023

// 7.Namitive convention of JS variables.
// Variable names must start with a letter, an underscore ( _ ) or a dollar sign ( $ ). Variable names cannot contain spaces. Variables cannot be the same as reserved keywords such as if or const . By convention, JavaScript variable names are written in camelCase.Jan 30, 2023

// 8.Maht operation +, -, *, /.
// + 
// var number1 = 23;
// var number2 = 45;
// var totleNumber = number1 + number2;
// console.log(totleNumber);

// -
// var number1 = 444;
// var number2 = 555;
// var totleNumber = number1 - number2;
// console.log(totleNumber);

// * 
// var number1 = 7;
// var number2 = 45;
// var totleNumber = number1 * number2;
// console.log(totleNumber);

// /
// var number1 = 5;
// var number2 = 20;
// var totleNumber = number1 / number2;
// console.log(totleNumber);

// %
// var number1 = 5;
// var number2 = 55;
// var totleNumber = number1 % number2;
// console.log(totleNumber);

// short hand +=, -=, *=, /= 

// +=
// price1 = 15;
// price1 += 34;
// console.log(price1)

// -=
// price1 = 45;
// price1 -= 23;
// console.log(price1)

// *=
// price1 = 15;
// price1 *= 3;
// console.log(price1)

// /=
// price1 = 45;
// price1 /= 5;
// console.log(price1)

// 10. ++, -- .

// ++
// var number = 0;
// while(number <= 20){
//     console.log(number);
//     number++;
// }

// --
// var number = 40;
// while(number >= 22){
//     console.log(number);
//     number--;
// }

// 11. parseInd, ParseFloat 

// parseInd
// var price1 = '23';
// var price2 = 45;
// var totlePrice = price1 + price2;
// var price1Number = parseInt(price1Number);
// console.log(price1);

// parseFloat
// var price1 = '4.45';
// var price2 = 20;
// var price1Nuimber = parseFloat(price1);
// console.log(price1)

// 12. toFixed
// var num1 = 0.1;
// var num2 = 0.2;
// var sum = num1 + num2;
// sum = sum.toFixed(1)
// console.log(sum);
// var sumNumber = parseInt(sum);
// console.log(sum);

// ---------------

// 1. what is the purpose ?

// 2.How to declare in array JS
// To declare an array with literal notation you just define a new array using empty brackets. It looks like this: let myArray = []; You will place all elements within the square brackets and separate each item or element with a comma.Nov 14, 2022

// 3.Number of elements in an array 
// var number = [23, 24, 56, 76, 89, 80]
// console.log(number)

// 4.What is index?
// index is a variale fo array in position number. 

// 5.Find the value of an element by index
// var number = [33, 45, 78, 23, 98, 36] 
// console.log(number[3])
// var positionIndex = number.indexOf(78);
// console.log(positionIndex)

// 6.Change an element by index
// var number = [33, 45, 78, 23, 98, 36]
// number[2] = 88;
// console.log(number)

// 7.get the index of an element by the value
// var number = [34, 44, 87, 90, 23, 33];
// var positionIndex = number.indexOf(23)
// console.log(positionIndex);

// 8.Whar does it mean when you get undefind while getting the value if an element

// 9.How can you add an element to an array at last position
// var number = [33, 35, 67, 89, 37, 67];
// number.push(88);
// console.log(number);

// 10.How can you remove the last element from array
// var number = [34, 56, 23, 87, 99, 57];
// number.pop(88);
// console.log(number);

// 11.add an element at the first position of an array
// var number = [34, 56, 23, 87, 99, 57];
// number.unshift(11);
// console.log(number);

// 12.Remove the first element of an array
// var number = [23, 56, 88, 99, 39];
// number.shift();
// console.log(number);
