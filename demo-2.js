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
    display(Object.getOwnPropertyDescriptor(person, "firstName"));
})();