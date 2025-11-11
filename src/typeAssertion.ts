//* type Assertion

let anything: any;

anything = 6565;
anything = "Riajul";
// (anything as number)
(anything as string)


const kgToGmConverter = (input: number | string): string | number | undefined => {
    if(typeof input === 'number') {
        return input * 1000;
    }else if(typeof input === 'string'){
       const [value] = input.split(" ");
       return `converted output is : ${Number(value) * 1000}`
    }
}


const result1 = kgToGmConverter(100) as number
console.log({result1});
const result2 = kgToGmConverter("100 kg") as string
console.log({result2});