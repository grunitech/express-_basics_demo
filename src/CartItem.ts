import { Product } from './Product';

//CartItem : {product: {id: 1, name: "water", price:7}, quantity: 1}
//Cart : [{product: {id: 1, name: "water", price:7}, quantity: 6},{product:{id: 2, name: "cola", price:10},quantity:2},({id: 3, name: "hamburger", price: 20},1)]

export class CartItem {
    product: Product; // the product
    quantity: number; // how many times product in cart

    // constructor with id, name, and price passed to it.
    constructor (product:Product){
        this.product = product;
        this.quantity = 1;
    }
    // the following function adds a given positive number of items to the cartItem 
    addByNumber(count:number){
        if (count < 0){
            return;
        }
        this.quantity += count;
    }
}