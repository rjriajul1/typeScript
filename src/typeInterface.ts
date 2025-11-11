//* interface :  object type: array, object, function

type User = {
  name: string;
  age: number;
};

//object
interface Iuser {
  name: string;
  age: number;
}

type Role = {
  role: "admin" | "user";
};

type UserWithRole = User & Role;
interface IuserWithRole extends Iuser {
  role: "admin" | "user";
}

const user1: IuserWithRole = {
  name: "Riajul",
  age: 21,
  role: "admin",
};

const user2: Iuser = {
  name: "Susanto",
  age: 22,
};

//fucntion
type Add = (num1: number, num2: number) => number;
interface IAdd {
    (num1:number, num2:number): number
}

const add: Add = (num1, num2) => num1 + num2;
const iAdd: IAdd = (num1, num2) => num1 + num2;

//arry

type Friends = string[];

interface Ifriends {
  [index: number]: string;
}

const friends: Friends = ["A", "B", "C"];
const ifriends: Ifriends = ["A", "B", "C"];
