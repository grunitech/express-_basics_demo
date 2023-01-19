import jwt,{ Jwt } from 'jsonwebtoken';
import bcrypt from 'bcrypt'
import { Product } from './Product';
import { CartItem } from './CartItem';
import { saltRounds,secret } from './app';
// we want to export the object in order to use it
export class User {
    name:string; // the name of the user
    id:number;// the user's unique id
    cart: CartItem[]; // the user's cart
    password:string; // the user encrypted password
    token: string | undefined; // the user's current jwt token

    // constructor with id, and name passed to it.
    constructor(id:number,name:string, password:string){
        this.id = id;
        this.name = name;
        this.cart = []
        this.password = bcrypt.hashSync(password,saltRounds);
    }
    // the following function adds a product to the cart 
    // the flag tells up from which route it came, (need for both examples to work)
    addToCart (product:Product, flag:boolean = false){
        // since id is unique value field. when we filter by it will result in array sized 0 or 1. 
        const inCart = this.cart.filter(cartItem => cartItem.product.id === product.id) 
        if (inCart.length === 0){
            // when array is sized 0 => didn't found so we create a new CartItem and add it
            const cartItem = new CartItem(product);
            this.cart.push(cartItem);
        } else {
            // when array is sized 1 => did found so increase by 1
            inCart[0].addByNumber(1);
        }
        if (flag){
            // resends token
            this.createToken();
        }
        return this.cart
    }
    // check when user try to login
    login(password:string){
        return bcrypt.compareSync(password,this.password);
    }
    // reset token when user try logout
    logout(){
        this.token = undefined;
    }

    createToken(){
        this.token = jwt.sign(JSON.stringify({id:this.id,name:this.name,cart:this.cart}),secret);
        return this.token;
    }

}