//* inheritance


class Student {
    name: string;
    age: number;
    address: string

    constructor (name: string, age: number,
         address: string
    ){
        this.name = name;
        this.age = age;
        this.address = address
    }

    getSleep () {
        console.log(`Eni eto ghonta ghumi`);
    }
}

const student1 = new Student('Riajul', 21, 'dhaka')
console.log(student1);