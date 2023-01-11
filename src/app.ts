import express from 'express'
import {Request, Response} from 'express'

const app = express();
const port = 3001;

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

app.get("/hello/upper/:name",(req:Request, res:Response)=> {
    const name = req.params.name; 
    res.send(`Hello ${name.toUpperCase()}`)
})

app.get("/add/:num1/:num2",(req:Request, res:Response)=> {
    const num1 = req.params.num1;
    const num2 = req.params.num2; 
    res.send(`Result: ${num1 + num2}`)
})

app.listen(port, ()=>{
    console.log(`Server start at http://localhost:${port}`)
});

