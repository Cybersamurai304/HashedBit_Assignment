// 1. Write code to display from 1 to 100 but just even numbers.
const num = ()=>{
    for(let i = 1;i<=100;i++){
        if(i%2 === 0){
            console.log(i); 
        }
    }
}

num();


// 2. Write a function to calculate which can add, subtract, multiply and divide two numbers. Use switch inside function.

const cal = (num1,num2,ops)=>{
    let result;

    switch(ops){
        case 'add':
            result = num1 + num2;
            break;
        case 'subtract':
            result = num1 - num2;
            break;
        case 'multiply':
            result = num1 * num2;
            break;
        case 'divide':
            if(num2 != 0){
                result = num1 / num2;
            }
            else{
                result = Infinity;
            }
            break;
        default:
            result = "Please enter valid operation";
    }
    return result;
}

let ans = cal(1,2,'add');
console.log(ans);

// You need to write a function findTax() that takes a number 
// type variable as an argument which is the salary of a person. 
// You need to calculate the tax amount on his salary by using 
// the Js switch control flow. The tax rates are given below.

// if 500000 >= salary > 0 then 0% tax on the entire salary.
// If 1000000 >= salary > 500000 then 10% tax on the entire salary.
// If 1500000 >= salary > 1000000 then 20% tax on the entire salary.
// If the salary > 1500000 then 30% tax on the entire salary.

const findTax = (salary)=>{
    let taxedAmount;

    switch(true){
        case (salary > 0 && salary <= 500000):
            taxedAmount = 0;
            break;
        case (salary > 500000 && salary <= 1000000):
            taxedAmount = salary * 0.1;
            break;
        case (salary > 1000000 && salary <= 1500000):
            taxedAmount = salary * 0.2;
            break;
        case (salary > 1500000):
            taxedAmount = salary * 0.3;
            break;
        default:
            taxedAmount = "Invalid!~"; 
    }
    return taxedAmount;
}

console.log(findTax(100000));   
console.log(findTax(60000000));     
console.log(findTax(-1)); 

// 4. Write a function to perform this. You are given two numbers n1 and n2. 
// You need to find the sum of the products of their corresponding digits. 
// So, for a number n1= 6 and n2 = 34, you'll do (6*4)+(0*3) = 24.

function sum(num1,num2){
    let s = 0;

    while(num1 > 0 || num2 > 0){
        const d1 = num1 % 10;
        const d2 = num2 % 10;

        s += d1 * d2;
    
        num1 = Math.floor(num1 / 10);
        num2 = Math.floor(num2 / 10);
    }

    return s;
}

console.log(sum(6,34));
console.log(sum(4546,453));
