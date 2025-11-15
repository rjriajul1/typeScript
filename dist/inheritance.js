"use strict";
//* inheritance
Object.defineProperty(exports, "__esModule", { value: true });
class Student {
    name;
    age;
    address;
    constructor(name, age, address) {
        this.name = name;
        this.age = age;
        this.address = address;
    }
    getSleep() {
        console.log(`Eni eto ghonta ghumi`);
    }
}
const student1 = new Student('Riajul', 21, 'dhaka');
console.log(student1);
//# sourceMappingURL=inheritance.js.map