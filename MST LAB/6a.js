function add(a, b) {
    let sum = a + b;
    console.log(`Sum of ${a} and ${b} is: ${sum}`);
   }
   function reverseString(str) {
    let reversed = str.split("").reverse().join("");
    console.log(`Reversed string of "${str}" is: "${reversed}"`);
   }
   function isEven(num) {
    if (num % 2 === 0) {
    console.log(`${num} is even.`);
    } else {
    console.log(`${num} is odd.`);
    }
   }
   add(5, 3);
   reverseString("hello");
   isEven(6);
   isEven(7);
   