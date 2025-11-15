"use strict";
//* type  guard
Object.defineProperty(exports, "__esModule", { value: true });
const add = (num1, num2) => {
    if (typeof num1 === "number" && typeof num2 === "number") {
        return num1 + num2;
    }
    else {
        return num1.toString() + num2.toString();
    }
};
console.log(add(2, "2"));
const getUserInfo = (user) => {
    if ("role" in user) {
        console.log(`${user.name} and his role is : ${user.role}`);
    }
    else {
        console.log(`${user.name}`);
    }
};
getUserInfo({ name: "Normal", role: 'Admin' });
//# sourceMappingURL=typeGuard.js.map