"use strict";
//* Nullable type
Object.defineProperty(exports, "__esModule", { value: true });
const getUser = (input) => {
    if (input) {
        console.log(`From DB: ${input}`);
    }
    else {
        console.log(`From DB: ALL USER`);
    }
};
getUser(null);
//* Unkonw
const discountCalculator = (input) => {
    if (typeof input === "number") {
        const discountPrice = input * 0.1;
        console.log(discountPrice);
    }
    else if (typeof input === "string") {
        const [discountPrice] = input.split(" ");
        console.log((Number(discountPrice)) * 0.1);
    }
    else {
        console.log('worng input');
    }
};
discountCalculator(100);
discountCalculator("100 TK");
discountCalculator(null);
//* void   : Never 
const throwError = (msg) => {
    throw new Error(msg);
};
throwError("Error...");
//# sourceMappingURL=nullableUnknownNever.js.map