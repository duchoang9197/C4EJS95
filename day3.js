// 1. Variable swap
// 1.1
let a = 5;
let b = 6;
[a, b] = [b, a];
console.log(a, b);

// 1.2
let a = 5;
let b = 6;
let tmp = "";
tmp = a;
a = b;
b = tmp;
console.log(a, b);

//2. Split String into Array
const aString = "Hello beauty there";
const spString = aString.split(" ");
console.log(spString);

//3
let a = [0, 9, 0, 1, 1, 9, 9, 7];
console.log(...a);

//4. Write a script to simulate a clothes shop, asking and performing certain tasks from users
const welcome = prompt(
  "Hi there, welcome to shop admin panel, what do you want (C, R, U, D)?"
);
let currentItems = ["Jeans", "T-Shirt", "Socks"];
switch (welcome) {
  case "c":
  case "C":
    const newItem = prompt("Enter the name of the new item");
    alert("Done");
    currentItems.push(newItem);
    break;
  case "r":
  case "R":
    console.log(`The current items are: ${currentItems}`);
    break;
  case "u":
  case "U":
    const itemchange = prompt("Enter the position you want to update");
    const newNameItem = prompt("Enter the new name");
    currentItems[itemchange] = newNameItem;
    alert("Done");
    break;
  case "d":
  case "D":
    const delItem = prompt("Enter the position you want to delete");
    let i = delItem - 1;
    currentItems.splice = (i, 1);
    alert("Done");
    break;
  default:
    alert("This command is not supported");
    break;
}

// 5. Write a script to ask users enter a sequence of numbers, the Numbers are separated by commas, calculate the sum of the numbers and show it to users
const number = prompt("Enter a squence of Number, separated by commas (,)");
let spNumber = number.split(",");
let sum = 0;
for (let i = 0; i < spNumber.length; i++) {
  sum += Number(spNumber[i]);
}
alert(`The sum of them is: ${sum}`);

//6.Write a script asking users to enter a sequence of numbers, the numbers are separated by commas, find the smallest number and log it out to users
const squenceNumber = prompt("Enter  a squence of numbers, separated by ,");
let spNumber = squenceNumber.split(",");
let min = spNumber[0];
for (let i = 0; i < spNumber.length; i++) {
  if (Number(spNumber[i]) < min) {
    min = Number(spNumber[i]);
  }
}
alert(`The smallest number is: ${min}`);

// 7.
const arr = [2, 5, 9, 1, 3, 6, 26, 7];
const number = Number(prompt("Enter a number"));
let i = 0;
while (i < arr.length) {
  if (number === arr[i]) {
    alert(`${number} is FOUND in my array at index ${i}`);
    break;
  }
  i++;
  if (i > arr.length) {
    alert(`${number} is NOT found in my array`);
    break;
  }
}

//8.1.Create an array to represent the sizes of your flock, and log all of your flock size, expected screen output:
console.log("Hello, my name is Phuong Nam and here is my sheep size");
let sizeOfSheep = [5, 7, 300, 90, 24, 50, 75];
console.log(...sizeOfSheep);

//8.2.
console.log("Hello, my name is Phuong Nam and here is my sheep size");
let sizeOfSheep = [5, 7, 300, 90, 24, 50, 75];
console.log(...sizeOfSheep);
console.log(
  `Now my biggest sheep has size ${Math.max(...sizeOfSheep)}, let's shave it`
);

//8.3
console.log("Hello, my name is Phuong Nam and here is my sheep size");
let sizeOfSheep = [5, 7, 300, 90, 24, 50, 75];
console.log(...sizeOfSheep);
let biggestSheep = Math.max(...sizeOfSheep);
console.log(`Now my biggest sheep has size ${biggestSheep}, let's shave it`);
let defaultSize = sizeOfSheep.indexOf(biggestSheep);
sizeOfSheep[defaultSize] = 8;
console.log("After shearing, here is my flock");
console.log(...sizeOfSheep);

//8.4
console.log("Hello, my name is Phuong Nam and here is my sheep size");
let sizeOfSheep = [5, 7, 300, 90, 24, 50, 75];
console.log(...sizeOfSheep);
let biggestSheep = Math.max(...sizeOfSheep);
console.log(`Now my biggest sheep has size ${biggestSheep}, let's shave it`);
let defaultSize = sizeOfSheep.indexOf(biggestSheep);
sizeOfSheep[defaultSize] = 8;
console.log("After shearing, here is my flock");
console.log(...sizeOfSheep);
for (let i = 0; i < sizeOfSheep.length; i++) {
  sizeOfSheep[i] += 50;
}
console.log("MONTH 1");
console.log("One month has, passed, my sheep have grown, here are their size");
console.log(...sizeOfSheep);

//8.6
console.log("Hello, my name is Phuong Nam and here is my sheep size");
let sizeOfSheep = [5, 7, 300, 90, 24, 50, 75];
console.log(...sizeOfSheep);
let biggestSheep = Math.max(...sizeOfSheep);
console.log(`Now my biggest sheep has size ${biggestSheep}, let's shave it`);
let defaultSize = sizeOfSheep.indexOf(biggestSheep);
sizeOfSheep[defaultSize] = 8;
console.log("After shearing, here is my flock");
console.log(...sizeOfSheep);
for (let i = 0; i < sizeOfSheep.length; i++) {
  sizeOfSheep[i] += 50;
}
console.log("MONTH 1");
console.log("One month has, passed, my sheep have grown, here are their size");
console.log(...sizeOfSheep);
let sumOfSheep = 0;
for (let j = 0; j < sizeOfSheep.length; j++) {
  sumOfSheep += sizeOfSheep[j];
}
let totalMoney = sumOfSheep * 2;
console.log(`My flock has size in total: ${sumOfSheep}`);
console.log(`I would get ${totalMoney}`);

//10
const name = prompt("Enter a sequence of names");
let arrName = name.split(",");
const newName = arrName.map((x) => "<" + x + ">");
console.log(newName);

//11
const numbers = prompt("Enter a sequence number");
let arrNumber = numbers.split(",");
let oddNumber = arrNumber.filter((number) => number % 2 !== 0);
console.log(...oddNumber);
