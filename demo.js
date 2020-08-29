'use strict'; 
(function() {

  let person = {
    firstName : 'Jim',
    lastName: 'Cooper',
    age : 17,
    isAdult : function() {return this.age > 18;}
  }
  
  display(person.isAdult());

})();