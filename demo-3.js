'use strict';

(function() {
    
//    let myFunction = function () {
       
//    } 
//    display(myFunction.prototype);

//    let person = {firstName: 'Jim'};
//    display(person.prototype);
//    display(person.__proto__);

function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}
Person.prototype.age = 29;

// display(Person.prototype);

let jim = new Person('Jim', 'Cooper');
let sofia = new Person('Sofia', 'Cooper');
// sofia.__proto__.age = 23;
// display(jim.__proto__);
// display(sofia.__proto__);
// display(Person.prototype === jim.__proto__);

Person.prototype = {age : 18};
let kris = new Person('Kris', 'Cooper');

display(Person.prototype);
display(jim.age);
display(sofia.age);
display(kris.age);


})();