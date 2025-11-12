"use strict";
//* keyof: type operator
Object.defineProperty(exports, "__esModule", { value: true });
const myVehicle = 'car';
const user = {
    id: 222,
    name: 'Mezba',
    address: {
        city: 'Dhaka'
    }
};
// const myId = user.id
// const myId = user['id']
// const myName = user['name']
// const myAddress = user['address']
// console.log(myId,myAddress,myName);
const getPropertyFromObj = (obj, key) => {
    return obj[key];
};
const product = {
    brand: 'HP',
};
const result1 = getPropertyFromObj(user, 'name');
const result2 = getPropertyFromObj(product, 'brand');
console.log(result2);
//# sourceMappingURL=keyofConstraint.js.map