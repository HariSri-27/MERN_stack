//Section 1 — Variables & Assignment
//1 & 2. Declare variables, assign values, and print

let name = "HARI SRI";
let age = 19;
let isStudent = true;

console.log("Name:", name);
console.log("Age:", age);
console.log("Is Student:", isStudent);

//3. Swap two variables without a third variable
let a = 5;
let b = 10;

a = a + b;  // 15
b = a - b;  // 5
a = a - b;  // 10

console.log("a:", a);
console.log("b:", b);

//4. What will be printed and why?
let x = 10;
let y = x;
y = 20;
console.log(x);

//5. Rewrite using const where appropriate
const pi = 3.14;
const radius = 5;
const area = pi * radius * radius;

console.log(area);

//Section 2 — Operators
//6. Arithmetic operations
let num1 = 20;
let num2 = 4;

console.log("Sum:", num1 + num2);
console.log("Difference:", num1 - num2);
console.log("Product:", num1 * num2);
console.log("Quotient:", num1 / num2);
console.log("Remainder:", num1 % num2);

//7. Predict the output
console.log(5 + "5");   // "55"
console.log(5 - "2");   // 3
console.log(true + 1);  // 2

 
//8. Compare number with 100
let number = 120;

if (number > 100) {
  console.log("Greater than 100");
} else if (number === 100) {
  console.log("Equal to 100");
} else {
  console.log("Less than 100");
}

//9. Difference between == and ===
console.log(5 == "5");   // true
console.log(5 === "5");  // false


//10. Age eligibility check
let personAge = 30;

if (personAge >= 18 && personAge <= 60) {
  console.log("Eligible");
} else {
  console.log("Not Eligible");
}

//Section 3 — Control Statements
//11. Even or Odd
let num = 7;

if (num % 2 === 0) {
  console.log("Even");
} else {
  console.log("Odd");
}

//12. FizzBuzz
let n = 15;

if (n % 3 === 0 && n % 5 === 0) {
  console.log("FizzBuzz");
} else if (n % 3 === 0) {
  console.log("Fizz");
} else if (n % 5 === 0) {
  console.log("Buzz");
} else {
  console.log(n);
}

//13. Switch weekday
let day = 3;

switch (day) {
  case 1: console.log("Monday"); break;
  case 2: console.log("Tuesday"); break;
  case 3: console.log("Wednesday"); break;
  case 4: console.log("Thursday"); break;
  case 5: console.log("Friday"); break;
  case 6: console.log("Saturday"); break;
  case 7: console.log("Sunday"); break;
  default: console.log("Invalid day");
}

//14. For loop
for (let i = 1; i <= 20; i++) {
  console.log(i);
}

console.log("Even numbers:");

for (let i = 2; i <= 20; i += 2) {
  console.log(i);
}

//15. While loop (Sum 1 to N)
let N = 5;
let sum = 0;
let i = 1;

while (i <= N) {
  sum += i;
  i++;
}

console.log("Sum:", sum);

//16. Break and Continue
for (let i = 1; i <= 10; i++) {
  if (i === 5) continue;
  if (i === 8) break;
  console.log(i);
}

//Section 4 — Functions
//17. Function returning sum
function add(num1, num2) {
  return num1 + num2;
}

console.log(add(5, 3));

//18. Arrow function
const addArrow = (num1, num2) => num1 + num2;

console.log(addArrow(5, 3));

//19. Check prime number
function isPrime(number) {
  if (number <= 1) return false;

  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}

console.log(isPrime(7));

//20. Reverse a string
function reverseString(str) {
  return str.split("").reverse().join("");
}

console.log(reverseString("hello"));

//21. Output?
function test() {
  return;
  console.log("Hello");
}

test();


//22. Largest number in array
function findLargest(arr) {
  let largest = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    }
  }

  return largest;
}

console.log(findLargest([10, 25, 7, 99, 3]));

//Section 5 — Integrated Challenge
//23. Student grading program
function calculateGrade(marks) {
  if (marks >= 90) {
    return "A";
  } else if (marks >= 75) {
    return "B";
  } else if (marks >= 50) {
    return "C";
  } else {
    return "Fail";
  }
}

let studentName = "HARI SRI";
let studentMarks = 82;

let grade = calculateGrade(studentMarks);

console.log("Student:", studentName);
console.log("Marks:", studentMarks);
console.log("Grade:", grade);
