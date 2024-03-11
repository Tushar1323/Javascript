// Immediately Invoked Function Expressions (IIFE)

/*
What are the benefits of IIFE?

IIFE Explained: Immediately Invoked Function Expressions | by ...
Advantages and Use Cases

    Encapsulation. IIFE provides encapsulation, allowing you to create private scopes for variables and functions. ...

    Avoiding Global Pollution. By encapsulating code within IIFE, you avoid polluting the global namespace. ...

    Immediate Execution. IIFE executes code immediately after declaration. ...
    Data Privacy
*/


// () -> definition of function
// () -> Execution of function


// Error -> 
// function chai(){
//     // named IIFE
//     console.log(`DB CONNECTED`);
// }(); 


// Correct ->
(function chai() {
    // named IIFE
    console.log(`DB CONNECTED 1`);
})(); // semi-colon is important for IIFE 
// other wise next IIFE will give an error ! 

// or 

(function () {
    // without named IIFE
    console.log(`DB CONNECTED 2`);
})(); // semi-colon is important for IIFE 
// other wise next IIFE will give an error ! 

// IIFE with parameter -
(function (name){
    console.log("I am IIFE function");
})(177);

// or

((name) => {
    console.log(`DB CONNECTED TWO ${name}`);
})('Tushar');


