// Function
// arow function, normal function

function addNormal(num1: number, num2: number): number {
  const sum = num1 + num2;
  return sum;
}
addNormal(2, 3);

const addArrow = (num1: number, num2: number): number => num1 + num2;

// addArrow(2,'8')


//* object =. function => method

const poorUser = {
    name: "mezba",
    balance: 0,
    addBalance(value: number){
        const totalBalance = this.balance + value;
        return totalBalance;
    }
}
poorUser.addBalance(10000)

//* arry => callback function 
const arr: number[] = [1,2,3];
const sqrArray = arr.map((element:number): number=> element * element)

console.log(sqrArray);
