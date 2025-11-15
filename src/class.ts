//* object oriented program - class - object 

// class Animal {
//     name: string;
//     species: string;
//     sound: string

//     constructor (name: string, species: string, sound: string) {
//         this.name = name
//         this.species = species
//         this.sound = sound 
//     }

//     makeSound () {
//         console.log(`The animal is making ${this.sound}`);
//     }
// }


//* parameter properties

class Animal {
//    public name: string;
//    public species: string;
//    public sound: string

    constructor (public name: string, public species: string, public sound: string) {

        // this.name = name
        // this.species = species
        // this.sound = sound 
    }

    makeSound () {
        console.log(`The animal is making ${this.sound}`);
    }
}


const dog = new Animal ("dogesh bahi", "dog", "ghew ghew")
const cat = new Animal ("cat bhai", "cat", "maw maw")
console.log(dog.sound);
console.log(cat.sound);
cat.makeSound();
dog.makeSound();