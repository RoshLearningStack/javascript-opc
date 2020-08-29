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

  let person1 = {
    firstName: 'Jim',
    lastName: 'Cooper',
    age: 18,
    isAdult() {return this.age > 18}
  };
  
  // for (const propertyName in person) {
  //   if (person.hasOwnProperty(propertyName)) {
  //     display(propertyName);      
  //   }
  // }

  // let healthStats = {
  //   height: 68,
  //   weight: 150
  // };

  // // merge objects in immutable way
  // function mergeHealthStats(person, healthstats) {
  //   return Object.assign({}, person, healthStats);
  // }
  // let mergedPerson = mergeHealthStats(person1, healthStats);
  // display(mergedPerson);
  // display(person1);

  // Constructor functions

  function Person(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age,
    this.isAdult = function() {return this.age > 18}
  }
  let personJim = new Person('Jim', 'Cooper', 29);
  let personSofia = new Person('Sofia', 'Cooper', 17);
  display(personJim);
  display(personSofia);

})();