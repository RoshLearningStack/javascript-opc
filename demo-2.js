'use strict';
(function () {
 
    let person = {
        firstName: 'Jim',
        lastName: 'Cooper',
        age : 29
    };
    
    // Enumerable
    Object.defineProperty(person, 'firstName', {enumerable: false});
    // properties
    for (const propetyName in person) {
        display(propetyName + ': ' + person[propetyName]);
    }
    display(Object.keys(person));
    display(JSON.stringify(person));

    // Property discriptor
    // Change property writable
    // Object.defineProperty(person, 'firstName', {writable: false}); 

    // Freeze properties
    // Object.freeze(person.name);

    // display(Object.getOwnPropertyDescriptor(person, "firstName"));
    // Try to update read only property
    // person.firstName = 'Roshan';



})();