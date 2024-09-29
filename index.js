 
 


let age = 13;
let visitor = age < 5 ? "Free admission for children" : 
              age > 5 && age <= 12 ? "A discounted fee of $10" :
              age > 12 && age <= 18 ? "A discounted fee of $20" :
              "Regular admission fee of $30";

console.log(visitor);

 


let hour = 4; 
let greeting = hour >= 5 && hour < 12 ? "Good Morning" :
               hour >= 12 && hour < 18 ? "Good Afternoon" :
               hour >= 18 && hour < 22 ? "Good Evening" :
               "Good Night";

console.log(greeting);


let number = 10; // Example number
let result = number > 0 ? "Positive" : 
             number < 0 ? "Negative" :
             "Zero";

console.log(result);
        