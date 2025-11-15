//* utility type

//pick

type Product = {
    id: number;
    name: string;
    price: string;
    stock: number;
    color?: string;
};


// type ProductSummary  = {
//     id:number;
//     name:string
// }

type ProductSummary  =  Pick<Product,'id' | 'name' | 'price'>
type ProductWithoutStock  =  Omit<Product,'stock' >
type ProductWithColor  =  Required<Product>


const product : ProductWithColor = {
    id: 234,
    name: "mouse",
    price: "20",
    stock: 14,
    color: 'blue'
}

type OptionalProduct = Partial<Product>
type ProductReadOnly = Readonly<Product>

const emptyObj: Record<string, unknown> = {};
const product1 = {
    id: 234,
    name: "Mouse",
    price: "20"
}

