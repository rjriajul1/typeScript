"use strict";
//* oop: instace of type guard ? type narrowing
Object.defineProperty(exports, "__esModule", { value: true });
class Person {
    name;
    constructor(name) {
        this.name = name;
    }
    getSleep(numberOfHours) {
        console.log(`${this.name} doink ${numberOfHours} ghumi `);
    }
}
class Student extends Person {
    constructor(name) {
        super(name);
    }
    doStudy(numberOfHours) {
        console.log(`${this.name} doink ${numberOfHours}`);
    }
}
class Teacher extends Person {
    constructor(name) {
        super(name);
    }
    takeClass(numberOfHours) {
        console.log(`${this.name} doink ${numberOfHours} ghonta calss nei`);
    }
}
//* function guard 
const isStudent = (user) => {
    return user instanceof Student; // user is sutdent 
};
const isTeacher = (user) => {
    return user instanceof Teacher; // user is teacher 
};
const getUserInfo = (user) => {
    if (isStudent(user)) {
        user.doStudy(20);
    }
    else if (isTeacher(user)) {
        user.takeClass(10);
    }
    else {
        user.getSleep(40);
    }
};
const student1 = new Student('Mr.Student');
const teacher1 = new Teacher('Mr.Teacher');
const person1 = new Person('Mr. Person');
getUserInfo(person1);
//# sourceMappingURL=instanceOfTypeGuard.js.map