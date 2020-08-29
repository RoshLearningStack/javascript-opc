'use strict';

(function() {
    
//    let myFunction = function () {
       
//    } 
function Person(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    Object.defineProperty(this, 'fullName', {
        get: function() {
           return this.firstName + ' ' + this.lastName; 
        },
        enumerable: true
    })
};

function Student(firstName, lastName, age) {
    Person.call(this, firstName, lastName, age);
    this._enrolledCourses = [],

    this.enroll = function(courseId) {
        this._enrolledCourses.push(courseId);
    };

    this.getCourses = function() {
       return this.fullName + "'s enrolled courses are: " + this._enrolledCourses;
    }
}
Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

let jimStudent = new Student('Jim', 'Cooper', 29);
jimStudent.enroll('CS205');
jimStudent.enroll('CS206');
jimStudent.enroll('CS207');
display(jimStudent.getCourses());


})();