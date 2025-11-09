//* array, object

let bazarList: string[] = ["eggs", "milk", "sugar"];

// bazarList.push(true)

let mixedArray: (string | number)[] = ["eggs", 4, "milk", 1, "sugar", 2];

mixedArray.push(3);
mixedArray.push("apple");
// mixedArray.push(true)
let coordinates: [number, number] = [20, 30];
let coupe: [string, string] = ["Husband", "wife"];

let RiajulNameAndRoll: [string, number] = ["Riajul", 30];

// RiajulNameAndRoll[0] = 20

let destination: [string, string, number] = ["Dhaka", "Satkhira", 4];

// reference = ojbect

// const user: {
//   orginzation: "Programming Hero"; //value => type literal types
//   isMarried: Boolean;
//   firstName: String;
//   middleName?: String;
//   lastName: String;
// } = {
//   firstName: "Riajul",
//   // middleName: 'Karim',
//   lastName: "Islam",
//   isMarried: false,
//   orginzation: "Programming Hero",
// };
// // user.orginzation = "Programming Hero Fire"

// console.log(user);

const user: {
  readonly orginzation: String; // access modifire
  isMarried: Boolean;
  firstName: String;
  middleName?: String;
  lastName: String;
} = {
  firstName: "Riajul",
  // middleName: 'Karim',
  lastName: "Islam",
  isMarried: false,
  orginzation: "Programming Hero",
};

// user.orginzation = "Programming Hero Fire"

console.log(user);