// 3a
for(i=0;i<7;i++){
    console.log(i)
}

// 3b
let number = prompt("Enter a number")
for(i=0;i<number;i++){
    console.log(i);
}

// 3c
let number = prompt("Enter a number")
for(i=3;i<number;i++){
     console.log(i);
}

// 3d
let numberN = prompt("Enter n")
let numberC = prompt("Enter c")
for(i=numberC;i<numberN;i++){
    console.log(i);
}

// 3e
let numberN = prompt("Enter n");
let numberC = prompt("Enter c");
for(i=numberC;i<numberN;i+=3){
    console.log(i);
}

// 3f
let numberN = prompt("Enter n")       
let numberC = prompt("Enter c")
let numberS = prompt("Enter s")
for(i=numberC;i<numberN;i+=numberS){
    console.log(i);
}

// 4
let number = prompt("Enter a number")
let a = 1;
for(i=1;i<=number;i++){
    a *= i;
}
    alert(`The factorial of ${number} is ${a}`)

// 5
let age = prompt("How old are you?")
if (age<=14){
    alert("You are not old enough to view this content")
}
else {
    alert("Enjoy!")
}

// 6
let number = prompt("Enter a number")
if (number<4.5){
    alert("lower half of 9")
}
else if (number>4.5 && number<9) {
    alert("higer half of 9")
}

// 7
let numberN = prompt("n =")
let numberX = prompt("x =")
if (numberN/numberX > 2){
    alert(`${numberX} is lower half of ${numberN}`)
}
else if(numberN/numberX < 2){
    alert(`${numberX} is higer half of ${numberN}`)
}

// 8
let number =prompt("X =")
if (number%2==0) {
    alert(`${number} is an even number`)
}
else {
    alert(`${number} is an odd number`)
}

// 9a
let number = 6
for(i=number/2;i<number;i++){
    console.log("L")
}
for(i=number/2;i<number;i++){
    console.log("H")
}

// 9b
let number = prompt("Enter the total number of L's and H's?")
let number2 = number / 2
for(i=0;i<number2;i++){
    console.log('L')
}
for(i=number2;i<number;i++){ 
    console.log('H')
}

// 9c
for(i=0;i<8;i++)
    if (i%2===0)
{
    console.log(0)
}
else{
    console.log(1)
}

// 9d
let number = prompt("Enter the total number of 1's and 0's?")
for(i=0;i<number;i++)
    if (i%2==0)
{
    console.log(0)
}
else{
    console.log(1)
}

// 10           
let weight = prompt("Your weight in kg?") 
let heightCm = prompt("Your height in cm?")
let heightM = heightCm/100
let bmi = weight/(heightM**2)
if (bmi<16){
    alert(bmi)
    alert("You are Severely underweight")
}
else if (bmi>=16 && bmi<=18.5){
    alert(bmi)
    alert("You are Underweight")
}
else if (bmi>=18.5 && bmi<=25){
    alert(bmi)
    alert("You are normal")
}
else if (bmi>=25 && bmi<=30){
    alert(bmi)
    alert("You are Overweight")
}
else{
    alert(bmi)
    alert("You are Obese")
}

// 11a
for (let i=0; i<4; i++) 
    fd(50);
    rt(90);

// 11b
for (let i=0; i<3; i++) 
    fd(50);
    rt(120);

// 11c
for (let i=0; i<5; i++) 
    fd(50);
    rt(72);

// 11d
for (let i=0; i<6; i++) 
    fd(50);
    rt(60);

// 12
let numberOE = prompt("Enter number of edges")
for(let i=0; i<numberOE; i++)
    fd(50)
    rt(360/numberOE)

