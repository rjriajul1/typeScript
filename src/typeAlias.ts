//* type alias

type User = {
  id: number;
  name: {
    firstName: string;
    lastName: string;
  };
  gender: "male" | "female";
  contactNo: string;
  address: {
    division: string;
    city: string;
  };
};

const user1: User = {
  id: 123,
  name: {
    firstName: "Mr.",
    lastName: "x",
  },
  gender: "male",
  contactNo: "8754871",
  address: {
    division: "Khunla",
    city: "Kaliganj",
  },
};

const user2: User = {
  id: 123,
  name: {
    firstName: "Mr.",
    lastName: "y",
  },
  gender: "female",
  contactNo: "875482471",
  address: {
    division: "Dhaka",
    city: "Dhaka",
  },
};

// boolen
type IsAdmin = true;
const isAdmin : IsAdmin = true;

// string 
type Name = string;
const myName : Name = 'Riajul'

// function
type AddFunc = (num1: number, num2: number) => number
const add: AddFunc = (num1, num2) => num1 + num2;