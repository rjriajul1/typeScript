"use strict";
// constraints : strict rules deya
Object.defineProperty(exports, "__esModule", { value: true });
const addStudentToCourse = (studentInfo) => {
    return {
        course: 'Next Level',
        ...studentInfo
    };
};
const student1 = {
    id: 123,
    name: "Riajul",
    hasPen: true,
};
const student2 = {
    id: 23,
    name: 'Susanto',
    hasCar: true,
    isMarried: true
};
const student3 = {
    isWatch: true,
    id: 235,
    name: 'Sunto',
    class: 'three',
    dateOfBirth: '12/07/2020'
};
// const result6 = addStudentToCourse(student1)
// console.log(result6);
// const result7 = addStudentToCourse(student2)
// console.log(result7);
const result8 = addStudentToCourse(student3);
console.log(result8);
//# sourceMappingURL=constraint.js.map