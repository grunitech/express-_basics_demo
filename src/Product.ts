// we want to export the object in order to use it
export class Product{
    id: number; // the product's unique id
    name: string; // the product's name
    price: number; // the product's price

    // constructor with id, name, and price passed to it.
    constructor (id:number, name:string, price:number){
        this.id = id;
        this.name = name;
        this.price = price;
    }
}
