"use strict";
//* object destructuring
Object.defineProperty(exports, "__esModule", { value: true });
const user = {
    id: 123,
    name: {
        firstName: "Riajul",
        lastName: "Islam",
    },
    gender: "Male",
    favouriteColor: "White",
};
// *[
//? old system
// const myFavouriteColor = user.favouriteColor
// const myFirstName = user.name.firstName
//*]
// *[
//? smart system
const { favouriteColor: myFavouriteColor, name: { firstName }, } = user;
//  console.log(myFavouriteColor,',',firstName);
//*]
//* array destructuring
const friends = ["Susanto", "Rokon", "Amrito"];
//* [
//? old system
const bestFriend = friends[0];
// console.log(bestFriend);
//* ]
//* [
//? smart system
//    const [A,myBestFriend,C] = friends;
//    const [,myBestFriend] = friends;
const [, , myBestFriend] = friends;
console.log(myBestFriend);
//* ]
//# sourceMappingURL=destructuring.js.map