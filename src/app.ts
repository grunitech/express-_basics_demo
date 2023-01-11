import express from 'express'
import {Request, Response} from 'express'
import cors from 'cors';
import bodyParser from 'body-parser';
import {User} from './User';
import {Product} from './Product';

const app = express();
const port = 3001;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));

let nameOne = "";
const users: User[] = [];
const products: Product[] = [];


app.get("/",(req:Request, res:Response)=> {
    res.send("Hello World")
})

app.get("/oneplusone",(req:Request, res:Response)=> {
    res.send(`${1+1}`)
})

app.get("/hello/:name",(req:Request, res:Response)=> {
    const name = req.params.name; 
    res.send(`Hello ${name}`)
})

app.get("/hello/edit/:name",(req:Request, res:Response)=> {
    console.log(nameOne);
    nameOne = req.params.name;
    console.log(nameOne); 
    res.send(`Hello ${nameOne}`);
})

app.get("/hello/upper/:name",(req:Request, res:Response)=> {
    const name = req.params.name; 
    res.send(`Hello ${name.toUpperCase()}`)
})

app.get("/concat/:num1/:num2",(req:Request, res:Response)=> {
    const num1 = req.params.num1;
    const num2 = req.params.num2; 
    res.send(`Result: ${num1 + num2}`)
})

app.get("/add/:num1/:num2",(req:Request, res:Response)=> {
    const num1 = Number(req.params.num1);
    const num2 = Number(req.params.num2); 
    res.send(`Result: ${num1 + num2}`)
})

app.post("/data",(req:Request, res:Response)=> {
    const data = req.body.data;
    res.send(`${data}`);
})
// FROM here everything related to mock DB 
// objType => users / products 

app.get("/db/info",(req:Request, res:Response)=> {
    res.send(`users: ${users} \n products:${products}`);
})
app.post("/db/insert/:objType",(req:Request, res:Response)=> {
    console.log(users,products)
    const objType = req.params.objType;
    if (objType === 'Users'){
        const id:number = req.body.id;
        const name:string = req.body.name; 
        users.push(new User(id,name));
        res.send("User was entered")
        return;
    }
    if (objType === 'Products'){
        const id:number = req.body.id;
        const name:string = req.body.name;
        const price:number = req.body.price;
        products.push(new Product(id,name,price));
        res.send("Product was entered")
        return;
    }
    res.send("Nothing was added")

})

app.listen(port, ()=>{
    console.log(`Server start at http://localhost:${port}`)
});
