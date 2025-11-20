"use strict";
//* inheritance
Object.defineProperty(exports, "__esModule", { value: true });
class Person {
    name; // common
    age; // common
    address; // common 
    constructor(name, age, address) {
        this.name = name;
        this.age = age;
        this.address = address;
    }
    // common method
    getSleep(numOfHours) {
        console.log(`${this.name} eto ghonta ${numOfHours}`);
    }
}
class Student extends Person {
    rollNo;
    constructor(name, age, address, rollNo) {
        super(name, age, address);
        this.rollNo = rollNo;
    }
}
const student1 = new Student('Riajul', 21, 'dhaka', 10);
student1.getSleep(15);
// console.log(student1); 
class Teacher extends Person {
    designation; // extra property
    constructor(name, age, address, designation) {
        super(name, age, address);
        this.designation = designation;
    }
    // own method
    takeClass(numOfHours) {
        console.log(`${this.name} eato ghonta class nai ${numOfHours} `);
    }
}
const teacher1 = new Teacher('Hossain', 30, 'dhaka', 'senior teacher');
//# sourceMappingURL=inheritance.js.map