console.log("Hello World");
console.log("Hello World");

for(let i = 0; i < 5;i++){
    console.log("I'm learning about JavaScript with DSA");
}
console.log("---------------------------------------------------");

for(let i = 0; i < 9; i =i+2){
    console.log(i)
}

console.log("---------------------------------------------------");

function greet(){
    console.log("Learning DSA for problem solving...")
}

for(let i =0; i < 5; i++){
    greet();
}

console.log("---------------------------------------------------");
let arr = [10,6,2,0,8,3,80];

for(let i = 0; i < arr.length;i++){
    console.log(arr[i]);
}

console.log("---------------------------------------------------");

/*
    Print the all the even numbers 
*/

for(let i = 0; i < arr.length;i++){
    if(arr[i] % 2 === 0){
        console.log("Even");
    }else{
        console.log("ODD")
    }
}

console.log("---------------------------------------------------");
/*
    That's a great question. The answer is simple:

    Use a for loop when you know how many times you need to repeat something.
    Use a while loop when you don't know how many times it will repeat, and you want to continue until a condition becomes false.

    Let's look at real-world examples.
*/

/*
    1. for loop (Most Common)

    Use a for loop when working with arrays or when the number of iterations is known.

    Example 1: Display products
*/

const products = ["Laptop","Phone","Watch"];

for(let i = 0; i < products.length;i++){
    console.log(products[i])
};
/*
    Real-world: An e-commerce website displaying products.
*/

console.log("---------------------------------------------------");

/*
    Example 2: Send email to every employee
*/
const employees = ["Alice", "Bob", "Charlie"];

for(let i = 0; i < employees.length;i++){
    console.log(`Sending the mail ${employees[i]}`);
}

console.log("---------------------------------------------------");
/*
    Example 3: Create 10 stars
*/

for(let i = 0; i <=10;i++){
    console.log("*");
}

console.log("---------------------------------------------------");

/*
    Example 4: Calculate total price
*/

const prices = [100, 200, 300];
let total = 0;

for(let i = 0; i < prices.length ;i++){
    total += prices[i];
}
console.log(total)

console.log("---------------------------------------------------");

/*
    While Loop 
*/
console.log(`

2. while loop
Use while when you don't know how many times the loop will run.

    `)

/*
    Example 1: Login system
*/


