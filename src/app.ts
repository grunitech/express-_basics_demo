import jwt,{Jwt } from 'jsonwebtoken';
// imports from modules
import express from 'express'
import { Request, Response } from 'express'
import bodyParser from 'body-parser';
import cors from 'cors';

// import from files
import { User } from './User';
import { Product } from './Product';
import { CartItem } from './CartItem';

// constants for app
const app = express();
const port = 3001;
export const saltRounds = 10;
export const secret = "Test";
// app uses
app.use(cors()); // used for communications with other apps
app.use(bodyParser.json()); // allowing the body to be parsed in my app
app.use(bodyParser.urlencoded({extended : true})); // allowing pass query params in POST requests

// mock database
// version 1 -> Only name
let nameOne = "";

// users
const newUser1 = new User(1,"Inbal","hello");
const newUser2 = new User(2,"Idan","world");
const newUser3 = new User(3,"Tal","work");
const newUser4 = new User(4,"Dan","demo");
const newUser5 = new User(5,"Shahar","password");

// Products 
const newProd1 = {id: 1, name: "water", price:7}
const newProd2 = {id: 2, name: "cola", price:10}
const newProd3 = {id: 3, name: "hamburger", price: 20}
const newProd4 = {id: 4, name: "milk", price:12}

// version 2 -> Users and Products 
// Original 
// const users: User[] = [];
// const products: Product[] = [];
// V3
const users:User[] = [newUser1,newUser2,newUser3,newUser4,newUser5]
const products:Product[] = [newProd1,newProd2,newProd3,newProd4];


// App routes
// home page GET method example 1
app.get("/",(req:Request, res:Response)=> {
    res.send("Hello World");
})

// Add second router calculation GET method example 2
app.get("/oneplusone",(req:Request, res:Response)=> {
    res.send(`${1+1}`);
})

// GET + Query params example 1 
app.get("/hello/:name",(req:Request, res:Response)=> {
    const name = req.params.name; 
    res.send(`Hello ${name}`);
})

// Query params Bad example 
// DONT UNCOMMENT :) 
// Will catch everything with one "section" of url. 
// Every route should be built with prefixes which represent to area this route calculate
// And every operation should be named with logical meaning to the operation it does.
// app.get("/:name",(req:Request, res:Response)=> {
//     const name = req.params.name; 
//     res.send(`Hello ${name}`);
// })


// GET + Query params example 2 
app.get("/hello/upper/:name",(req:Request, res:Response)=> {
    const name = req.params.name; 
    res.send(`Hello ${name.toUpperCase()}`);
})

// GET + Query params type example 1 
app.get("/concat/:num1/:num2",(req:Request, res:Response)=> {
    const num1 = req.params.num1;
    const num2 = req.params.num2; 
    res.send(`Result: ${num1 + num2}`);
})

// GET + Query params type example 2
app.get("/add/:num1/:num2",(req:Request, res:Response)=> {
    const num1 = Number(req.params.num1);
    const num2 = Number(req.params.num2); 
    res.send(`Result: ${num1 + num2}`);
})

// POST method example 1
app.post("/data",(req:Request, res:Response)=> {
    const data = req.body.data;
    res.send(`${data}`);
})

// Mock Database method example 1
app.get("/hello/edit/:name",(req:Request, res:Response)=> {
    console.log(nameOne);
    nameOne = req.params.name;
    console.log(nameOne); 
    res.send(`Hello ${nameOne}`);
})

// FROM here everything related to mock DB 
// objType => Users / Products / else 

// Show the data in the url
app.get("/db/info",(req:Request, res:Response)=> {
    res.send(`users: ${users.map(user=>(`${user.id},${user.name}`))} 
             products:${products.map(product=>(`${product.id},${product.name},${product.price}`))}`);
})

// Changed a bit from what we did in the workshop to show the data after the insert of data also in console of VSC
// The following function insert a new element to mock db according to the type given 
app.post("/db/insert/:objType",(req:Request, res:Response)=> {
    console.log(users,products);
    let message;
    const objType = req.params.objType;
    if (objType === 'Users'){
        const id:number = req.body.id;
        const name:string = req.body.name; 
        const password:string = req.body.password; 
        users.push(new User(id,name,password));
        message = "User was entered";
    } else if (objType === 'Products'){
        const id:number = req.body.id;
        const name:string = req.body.name;
        const price:number = req.body.price;
        products.push(new Product(id,name,price));
        message = "Product was entered";        
    } else{
        message = "Nothing was added";        
    }
    console.log(users,products);
    console.log();
    res.send(message);

})
// The following function looks for a object of the sepecified objType and returns it if found else mentioned
app.post("/db/getbyid/:objType/:oid",(req:Request, res:Response)=> {
    console.log(users,products);
    const objType = req.params.objType;
    let message;
    if (objType === 'Users'){
        const id:number = Number(req.params.oid)
        const result = users.filter((user ) => user.id === id)
        if (result.length === 0){
            message = "No user was found";
        } else {
            message = `User : id: ${result[0].id}, name:${result[0].name} , cart:${JSON.stringify(result[0].cart)}`;
        }
        // console.log(users,products);
        res.send(message);
        return;
    }
    if (objType === 'Products'){
        const id:number = Number(req.params.oid);
        const result = products.filter((product ) => product.id === id);
        
        if (result.length === 0){
            message = "No product was found";
        } else {
            message = `Product : id: ${result[0].id}, name:${result[0].name}, price:${result[0].price}`;
        }
        // console.log(users,products);
        res.send(message);
        return;
    }
    res.send("Invalid");

})
// The following function adds a given product to a given user's cart while the user's id is passed in body 
app.post("/addToCart",(req:Request, res:Response)=> {
    const userId = Number(req.body.uid);
    const productId = Number(req.body.pid);
    const prodResult = products.filter((product ) => product.id === productId);
    const userResult = users.filter((user ) => user.id === userId);
    if (prodResult.length === 0 || userResult.length === 0){
        res.send("Invalid");
        return;
    }
    const result = userResult[0].addToCart(prodResult[0]);
    res.send(JSON.stringify(result));
})
// The following function trys to login a user, if successful returns it's jwt token
app.post("/login",(req:Request, res:Response)=> {
    const userId = Number(req.body.uid);
    const password =req.body.pass;
    const userResult = users.filter((user ) => user.id === userId);
    if (userResult.length === 0){
        res.send("No such user");
        return;
    }
    if (!userResult[0].login(password)){
        res.send("Wrong password!")
        return;
    }
    if (userResult[0].token !== undefined){
        res.send("Already logged!")
        return;
    }
    userResult[0].createToken();
    res.send(userResult[0].token);
})

// The following function adds a given product to a given user's cart while the user's id is passed in jwt token
app.post("/addToCart2",(req:Request, res:Response)=> {
    let user:User;
    let tokenDecoded:string;
    try {
        tokenDecoded = JSON.stringify(jwt.verify(req.body.token, secret));
        user = JSON.parse(tokenDecoded);
    }catch(e){
        res.send("Invalid token");
        return;
    }
    const list = users.filter((userr)=>user.id === userr.id)
    if (list.length === 0){
        res.send("error");
        return;
    }
    const productId = Number(req.body.pid);
    const prodResult = products.filter((product ) => product.id === productId);
    if (prodResult.length === 0){
        res.send("Invalid");
        return;
    }
    const result = list[0].addToCart(prodResult[0],true);
    res.send(list[0].token);
})
// the following cart does do checkout 
// TODO Need to empty the user's cart
app.post("/checkout",(req:Request, res:Response)=> {
    let user:User;
    let tokenDecoded:string;
    try {
        tokenDecoded = JSON.stringify(jwt.verify(req.body.token, secret));
        user = JSON.parse(tokenDecoded);
    }catch(e){
        res.send("Invalid token");
        return;
    }
    const list = users.filter((userr)=>user.id === userr.id)
    if (list.length === 0){
        res.send("error");
        return;
    }
    const total = list[0].cart.map(cartItem => cartItem.product.price * cartItem.quantity).reduce((acc,num)=>acc+num,0);
    res.send(JSON.stringify({total:total,token:list[0].token}));
})
// App listen to port
app.listen(port, ()=>{
    console.log(`Server start at http://localhost:${port}`)
});
