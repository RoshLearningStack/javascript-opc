'use strict'; 
(function() {

  // function registerUser(firstName, lastName) {
  //   let person = {
  //     firstName,
  //     lastName
  //   };
  //   display(person);
  // }

  // registerUser('Jim', 'Cooper');

  let person = {
    firstName: 'Jim',
    lastName: 'Cooper',
    age: 18,
    isAdult() {return this.age > 18}
  };
  
  for (const propertyName in person) {
    if (person.hasOwnProperty(propertyName)) {
      display(propertyName);      
    }
  }

})();