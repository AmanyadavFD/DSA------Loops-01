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
    While Loop 
*/
let x = 0;
while(x < 5){
    console.log(x);
    x++;
}
