let i = 0;
while(i <= 10){
    console.log(i);
    i++;
}
//fabonacci series
let num1 = 0;
let num2 = 1;
let temp ;
let fibonacciArray =[];
while(fibonacciArray.length <= 25){
    fibonacciArray.push(num1);
    temp = num1 + num2;
    num1 = num2;
    num2 = temp;
}
console.log(fibonacciArray);
/* Generate a number under 100 using math.random() function*/
const maxNum = 100;
const num = Math.floor(Math.random() * maxNum) +1;
console.log(num);
function sayHello(name1, name2){
    //let you = prompt("What's your name? ");
    console.log(name1, "Said Hello to" ,  name2);
}
let nam1 = "Sita";
let nam2 = "Gita";
sayHello(nam1, nam2);
function sumOfTwoNumber(x, y){
    console.log("The sum of two number is", x+y)
}
let a = 95;
let b = 25;
sumOfTwoNumber(a , b);
