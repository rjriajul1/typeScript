"use strict";
//* Generic Function
Object.defineProperty(exports, "__esModule", { value: true });
// const createArrayWithString = (value: string) => [value]
// const createArrayWithNumber = (value: number) => [value]
// const createArrayWithUserObj = (value: {
//     id: number; name: string
// }) => {
//     return [value]
// }
const createArrayWithGeneric = (value) => {
    return [value];
};
const arrString = createArrayWithGeneric('apple');
const arrNum = createArrayWithGeneric(87);
const arrObj = createArrayWithGeneric({
    id: 26,
    name: 'Riajul'
});
console.log(arrObj);
//tuple 
const createArrayWithTuple = (param1, param2) => [param1, param2];
const createArrayTupleWithGeneric = (param1, param2) => [param1, param2];
const result1 = createArrayTupleWithGeneric(87978, '843');
const result2 = createArrayTupleWithGeneric({ id: 87, name: 'Riajul' }, '843');
const result3 = createArrayTupleWithGeneric(['ksjf'], '843');
// const result4 = createArrayWithTuple ('877', 98)
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
const result6 = addStudentToCourse(student1);
console.log(result6);
const result7 = addStudentToCourse(student2);
console.log(result7);
//# sourceMappingURL=genericFunction.js.map