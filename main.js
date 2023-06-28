//============ Exercise #1 ============//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/
let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}
function displayFaveDishes(person){
    for(property in person){
        console.log(person[property]);
    }
}
displayFaveDishes(person3)

//============ Exercise #2 ============//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

// Create our Person Prototype
function Person(name, age){
    this.name = name;
    this.age = age;
// Use an arrow to create the printInfo method
    this.printInfo = () => {
        console.log(`${name} is ${age} years old.`);
    };
// Create another arrow function for the addAge method that takes a single parameter
// Adding to the age 
    this.addAge = () => {
        age += 1;
    };
};
let person1 = new Person('Jason', 26);
let person2 = new Person('Cooper', 13)
person1.printInfo()
person2.printInfo()

person1.addAge()
person1.addAge()
person1.addAge()

person1.printInfo()

// ============ Exercise #3 ============//
/*
    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/
function stringLength(string_one) {
    return new Promise((resolve, reject)=>{
        if (string_one.length > 10){
            resolve(string_one);
        } else {
            reject(string_one);
        }
    });
}
stringLength("vacationing")
.then( (result) =>{
    console.log("Big word");
}).catch( (result) => {
    console.log('Small Number');
});
stringLength("working")
.then( (result) =>{
    console.log("Big word");
}).catch( (result) => {
    console.log('Small Number');
});

//============ Code Wars #1 ============//
// This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.
function simpleMultiply(num) {
    return new Promise((resolve, reject)=>{
        if (num % 2 === 0){
            resolve(num * 8);
        } else {
            reject(num * 9);
        }
    });
}
simpleMultiply(8)
.then( (result) =>{
    console.log(result);
}).catch( (result) => {
    console.log(result);
});
simpleMultiply(5)
.then( (result) =>{
    console.log(result);
}).catch( (result) => {
    console.log(result);
});

//============ Code Wars #2 ============//
// Make a function that returns the value multiplied by 50 and increased by 6. If the value entered is a string it should return "Error".
function problem(test) {
    return new Promise((resolve, reject) => {
        if (typeof test === 'string') {
            resolve("Error");
        } else {
            reject((test*50) + 6);
        }
    });
}
problem("hello")
.then( (result) =>{
    console.log(result);
}).catch( (result) => {
    console.log(result);
})
problem(1)
.then( (result) =>{
    console.log(result);
}).catch( (result) => {
    console.log(result);
})