import jwt,{ Jwt } from 'jsonwebtoken';
import bcrypt from 'bcrypt'
import { Product } from './Product';
import { CartItem } from './CartItem';
import { saltRounds,secret } from './app';
// we want to export the object in order to use it
export class User {
    name:string; // the name of the user
    id:number;// the user's unique id
    cart: CartItem[]; 
    password:string;
    token: string | undefined;

    // constructor with id, and name passed to it.
    constructor(id:number,name:string, password:string){
        this.id = id;
        this.name = name;
        this.cart = []
        this.password = bcrypt.hashSync(password,saltRounds);
    }
    
    addToCart (product:Product, flag:boolean = false){
        //CI : {product: {id: 1, name: "water", price:7}, quantity: 1}
        //Cart : [{product: {id: 1, name: "water", price:7}, quantity: 6},{product:{id: 2, name: "cola", price:10},quantity:2},({id: 3, name: "hamburger", price: 20},1)]
        const inCart = this.cart.filter(cartItem => cartItem.product.id === product.id) 
        if (inCart.length === 0){
            const cartItem = new CartItem(product);
            this.cart.push(cartItem);
        } else {
            const item = inCart[0].product.id;
            const index = this.cart.map((cartItem)=> cartItem.product.id).indexOf(item);
            this.cart[index].addByNumber(1);
        }
        if (flag){
            this.login();
        }
        return this.cart
    }

    verify(password:string){
        return bcrypt.compareSync(password,this.password);
    }

    logout(){
        this.token = undefined;
    }

    login(){
        this.token = jwt.sign(JSON.stringify({id:this.id,name:this.name,cart:this.cart}),secret);
        return this.token;
    }

}