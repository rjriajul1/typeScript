//* ? : ternary opearator : decission making
const biyerJonnoEligible = (age:number) => {
    //  if(age >= 21) {
    //     console.log('You are eligible');
    //  }else{
    //     console.log('You are not eligible');
    //  }
    // age>= 21 ? console.log("You are eligible"):console.log('You are not eligible');
}

biyerJonnoEligible(21)

//* ?? : nulish coalescing opetator : null / undefined
const userTheme1 = "dark theme";
const userTheme2 = null;
const userTheme3= undefined;

const seletedTheme = userTheme1 ?? "Light Theme"
// console.log(seletedTheme);

const isAuthenticated = "";

const resultWithTernary = isAuthenticated ? isAuthenticated : "You are guest"

const resultWithNulish = isAuthenticated ?? "you are guest";

console.log({resultWithNulish}, {resultWithTernary});


//* ?. : optional chaining

const user : {
    address : {
        city: string;
        town: string;
        postalCode?: number
    }
} = {
    address : {
        city:"Dhaka",
        town:"Bonani",
        // postalCode:7634
    }
}

const postalCode = user?.address?.postalCode;
console.log(postalCode);
