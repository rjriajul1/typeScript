//* keyof: type operator

type RichPeoplesVehicle = {
    car: string;
    bike: string;
    cng: string;
};


type MyVhicle1 = "bike" | "car" | "cng";

type MyVehicle2 = keyof RichPeoplesVehicle;

const myVehicle: MyVhicle1 = 'car'

type User = {
    id:number;
    name: string;
    address: {
        city: string
    }
}
const user = {
    id: 222,
    name: 'Mezba',
    address: {
        city: 'Dhaka'
    }
}

// const myId = user.id
// const myId = user['id']
// const myName = user['name']
// const myAddress = user['address']
// console.log(myId,myAddress,myName);

const getPropertyFromObj = <X>(obj: X, key: keyof X) => {
    return obj[key];
}

const product = {
    brand: 'HP',
}

const result1 = getPropertyFromObj(user, 'name')
const result2 = getPropertyFromObj(product, 'brand')
console.log(result2);
