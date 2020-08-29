'use strict';

(function () {
    
    class Person {
        constructor(firstName, lastName, age) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.age = age;
        }
        get fullName() {
            return this.firstName + ' ' + this.lastName;
        }
        set fullName(fullName) {
            var nameParts = fullName.split(' ');
            this.firstName = nameParts[0];
            this.lastName = nameParts[1];
        }
        isAdult() {
            return this.age >= 18;
        }
    }
    
    class Student extends Person {
        constructor(firstName, lastName, age) {
            super(firstName, lastName, age);
            this._enrolledCourses = [];
        }

        enroll(courseId) {
            this._enrolledCourses.push(courseId);
        }

        getCourses() {
            return this.fullName + "'s enrolled courses are: " + this._enrolledCourses;
        }
    }


    Object.defineProperty(Person.prototype, 'fullName', {enumerable: true});

    let jim = new Person('Jim', 'Cooper', 29);
    jim.fullName = 'Roshan Deniyage';
    display(jim);

    let jimStudent = new Student('Jim', 'Cooper', 29);
    jimStudent.enroll('CS205');
    jimStudent.enroll('CS206');
    jimStudent.enroll('CS207');
    display(jimStudent.getCourses());

})();