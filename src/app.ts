// imports from modules
import express from 'express'
import { Request, Response } from 'express'
import bodyParser from 'body-parser';
import cors from 'cors';

// import from files
import { User } from './User';
import { Product } from './Product';

// constants for app
const app = express();
const port = 3001;

// app uses
app.use(cors()); // used for communications with other apps
app.use(bodyParser.json()); // allowing the body to be parsed in my app
app.use(bodyParser.urlencoded({extended : true})); // allowing pass query params in POST requests

// mock database
// version 1 -> Only name
let nameOne = "";

// version 2 -> Users and Products 
const users: User[] = [];
const products: Product[] = [];

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
        users.push(new User(id,name));
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
            message = `User : id: ${result[0].id}, name:${result[0].name}`;
        }
        // console.log(users,products);
        res.send(message);
        return;
    }
    if (objType === 'Products'){
        const id:number = Number(req.params.oid);
        const result = products.filter((user ) => user.id === id);
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

// App listen to port
app.listen(port, ()=>{
    console.log(`Server start at http://localhost:${port}`)
});
