'use strict';

(function() {
    
//    let myFunction = function () {
       
//    } 
function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}
Person.prototype.age = 4;

let jim = new Person('Jim', 'Cooper');

display(jim.__proto__);
display(jim.__proto__.__proto__);
display(jim.__proto__.__proto__.__proto__);

})();