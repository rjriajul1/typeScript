//* dynamically generalize

type GenericArray<T> = Array<T>;

// const friends: string[] = ["Mr. x", "Mr. y", "Mr. z"];
const friends: GenericArray<string> = ["Mr. x", "Mr. y", "Mr. z"];

// const rollNumbers: number[] = [4, 7, 11];
const rollNumbers: GenericArray<number> = [4, 7, 11];

// const isEligibleList: boolean[] = [true, false, true];
const isEligibleList: GenericArray<boolean> = [true, false, true];

type Coordiantes<X, Y> = [X, Y];

const coordiantes1: Coordiantes<number, number> = [2, 4];
const coordiantes2: Coordiantes<string, string> = ["2", "4"];

const userList: GenericArray<{ name: string; age: number }> = [
  {
    name: "Mr. X",
    age: 22,
  },
  {
    name: "Mr. Y",
    age: 25,
  },
 
];
