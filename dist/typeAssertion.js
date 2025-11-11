"use strict";
//* type Assertion
Object.defineProperty(exports, "__esModule", { value: true });
let anything;
anything = 6565;
anything = "Riajul";
// (anything as number)
anything;
const kgToGmConverter = (input) => {
    if (typeof input === 'number') {
        return input * 1000;
    }
    else if (typeof input === 'string') {
        const [value] = input.split(" ");
        return `converted output is : ${Number(value) * 1000}`;
    }
};
const result1 = kgToGmConverter(100);
console.log({ result1 });
const result2 = kgToGmConverter("100 kg");
console.log({ result2 });
//# sourceMappingURL=typeAssertion.js.map