"use strict";
//* spread operator => arry
Object.defineProperty(exports, "__esModule", { value: true });
const friends = ["Anik", "Imran"];
const schoolFriends = ["Touhid", "Masum", "Rokon"];
const collegeFriends = ["Robiyt", "Mehide"];
// friends.push(schoolFriends)
friends.push(...schoolFriends, ...collegeFriends);
// console.log(friends);
//* spread operator => object
const user = {
    name: "Riajul",
    phoneNo: "76347179843446",
};
const otherInfo = {
    hobby: "outing",
    favouriteColor: "White",
};
const userInfo = { ...user, ...otherInfo };
console.log(userInfo);
//* rest operator 
const sendInvite = (...friends) => {
    friends.forEach((friend) => {
        console.log(`send invitaiton to ${friend}`);
    });
    // console.log(`Send Invitation to ${friend1}`);
    // console.log(`Send Invitation to ${friend2}`);
    // console.log(`Send Invitation to ${friend3}`);
};
sendInvite('Susanto', 'Rokon', 'Sumon', 'Ziasan', 'Riajul');
console.log(sendInvite);
//# sourceMappingURL=restAndspread.js.map