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
app.listen(port, ()=>{
    console.log(`Server start at http://localhost:${port}`)
});

