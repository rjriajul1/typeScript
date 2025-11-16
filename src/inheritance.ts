//* inheritance


class Person
 {
    name: string; // common
    age: number; // common
    address: string // common 

    constructor (name: string, age: number,
         address: string
    ){
        this.name = name;
        this.age = age;
        this.address = address
    }

    // common method
    getSleep (numOfHours: number) {
        console.log(`${this.name} eto ghonta ${numOfHours}`);
    }
}

class Student extends Person
{

    rollNo: number;

    constructor(name:string, age:number, address: string, rollNo: number) {
        super(name,age, address)
        this.rollNo = rollNo
    }
    
}

const student1 = new Student('Riajul', 21, 'dhaka',10)
student1.getSleep(15)
// console.log(student1); 
   


class Teacher extends Person
 {

    designation: string  // extra property

    constructor ( name: string, age: number, address: string, designation: string
    ){
        super(name,age,address)
        this.designation = designation;
    }

    // own method
    takeClass (numOfHours: number) {
        console.log(`${this.name} eato ghonta class nai ${numOfHours} `);
    }
}

const teacher1 = new Teacher('Hossain', 30, 'dhaka', 'senior teacher')
 
