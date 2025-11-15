//* oop: instace of type guard ? type narrowing

class Person {
    name: string;

    constructor (name: string) {
        this.name = name;
    }

       getSleep(numberOfHours: number) {
        console.log(`${this.name} doink ${numberOfHours} ghumi `);
    }
}

class Student extends Person {
    constructor(name: string) {
        super(name)
    
    }

    doStudy(numberOfHours: number) {
        console.log(`${this.name} doink ${numberOfHours}`);
    }
}


class Teacher extends Person {
    constructor(name: string) {
        super(name);
    }
    takeClass(numberOfHours: number ){
        console.log(`${this.name} doink ${numberOfHours} ghonta calss nei`);
    }
}

//* function guard 

const isStudent = (user: Person) => {
    return user instanceof Student; // user is sutdent 
}
const isTeacher = (user: Person) => {
    return user instanceof Teacher; // user is teacher 
}
const getUserInfo = (user: Person) => {
    if(isStudent(user)) {
        user.doStudy(20)
    }else if (isTeacher(user)) {
        user.takeClass(10)
    }else{
        user.getSleep(40)
    }
}
const student1 = new Student('Mr.Student')
const teacher1 = new Teacher('Mr.Teacher')
const person1 = new Person('Mr. Person')
getUserInfo(person1)

