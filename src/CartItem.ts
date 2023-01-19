import { Product } from './Product';
export class CartItem {
    product: Product; // the product
    quantity: number; // how many times product in cart

    // constructor with id, name, and price passed to it.
    constructor (product:Product){
        this.product = product;
        this.quantity = 1;
    }
    addByNumber(count:number){
        if (count < 0){
            return;
        }
        this.quantity += count;
    }
}