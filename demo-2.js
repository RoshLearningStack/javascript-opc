'use strict';
(function () {
 
    let person = {
        firstName: 'Jim',
        lastName: 'Cooper',
        age : 29
    };
    
    // properties
    // for (const propetyName in person) {
    //     display(propetyName + ': ' + person[propetyName]);
    // }

    // Property discriptor
    // Change property writable
    Object.defineProperty(person, 'firstName', {writable: false}); 

    // Freeze properties
    // Object.freeze(person.name);

    display(Object.getOwnPropertyDescriptor(person, "firstName"));
    // Try to update read only property
    // person.firstName = 'Roshan';
})();