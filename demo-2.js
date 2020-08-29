'use strict';
(function () {
 
    // let person = {
    //     firstName: 'Jim',
    //     lastName: 'Cooper',
    //     age : 29
    // };
    
    // Enumerable
    // Object.defineProperty(person, 'firstName', {enumerable: false});
    // properties
    // for (const propetyName in person) {
    //     display(propetyName + ': ' + person[propetyName]);
    // }
    // display(Object.keys(person));
    // display(JSON.stringify(person));

    // Property discriptor
    // Change property writable
    // Object.defineProperty(person, 'firstName', {writable: false}); 

    // Freeze properties
    // Object.freeze(person.name);

    // display(Object.getOwnPropertyDescriptor(person, "firstName"));
    // Try to update read only property
    // person.firstName = 'Roshan';

    // Configurable
    // Object.defineProperty(person, 'firstName', {configurable: false});
    // Object.defineProperty(person, 'firstName', {enumerable: true});

    // delete person.firstName;
    // display(person);

    // Setters and Getters
    let person = {
        name : {
            firstName: 'Jim',
            lastName: 'Cooper'
        },        
        age : 29
    };

    Object.defineProperty(person, 'fullName', {
        get: function () {
            return this.name.firstName + ' ' + this.name.lastName;
        },
        set: function (value) {
            var nameParts = value.split(' ');
            this.name.firstName = nameParts[0];
            this.name.lastName = nameParts[1];
        }
    });

    person.fullName = 'Roshan Deniyage';
    display(person.fullName);
    display(person.name.firstName);
    display(person.name.lastName);

})();