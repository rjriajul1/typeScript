"use strict";
// Function
// arow function, normal function
Object.defineProperty(exports, "__esModule", { value: true });
function addNormal(num1, num2) {
    const sum = num1 + num2;
    return sum;
}
addNormal(2, 3);
const addArrow = (num1, num2) => num1 + num2;
// addArrow(2,'8')
//* object =. function => method
const poorUser = {
    name: "mezba",
    balance: 0,
    addBalance(value) {
        const totalBalance = this.balance + value;
        return totalBalance;
    }
};
poorUser.addBalance(10000);
//* arry => callback function 
const arr = [1, 2, 3];
const sqrArray = arr.map((element) => element * element);
console.log(sqrArray);
//# sourceMappingURL=function.js.map