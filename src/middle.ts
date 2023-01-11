// To use in dev tools
// always must be first
const local = `http://localhost:${3001}`;

// Structure of fetch (url,{}) -> using the object of the request
// fields -> HTTP method type -> will match according to the type of method specified in the App
//                              if we use app.get() -> "GET" , if we use app.post()-> 'POST'

// Body -> is passed where we usually contain most of the data in post requests.

/* We want to let my App know that we are passing the data as JSON

    headers: {
        'Content-Type': 'application/json'
    }

*/
// POST Example 1 - Test 1
fetch(`${local}/data`,{
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({data: "Yellow"})
}).then((res) => res.text()).then(answer => console.log(answer));
// prints to console "Yellow"

// POST Example 1 - Test 2
fetch(`${local}/data`,{
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({data1: "Problem"})
}).then((res) => res.text()).then(answer => console.log(answer));
// prints undefined
// since we are looking for the field "data" and here we have only the field "data1" by default we will get undefined

fetch(`${local}/data`,{
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({data: "Hello", testing: "World"})
}).then((res) => console.log(res));
// prints "Hello" and never using the "testing" field, since we only look for the field "data"


// DB part 2
// Users
const newUser1 = {id: 1, name: "Inbal"}
const newUser2 = {id: 2, name: "Idan"}
const newUser3 = {id: 3, name: "Tal"}
const newUser4 = {id: 4, name: "Dan"}

// Products 
const newProd1 = {id: 1, name: "water", price:7}
const newProd2 = {id: 2, name: "cola", price:10}
const newProd3 = {id: 3, name: "hamburger", price: 20}
const newProd4 = {id: 4, name: "milk", price:12}

// Adding users succesfully
fetch(`${local}/db/insert/Users`,{
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(newUser1)
}).then((res) => res.text()).then(answer => console.log(answer));

fetch(`${local}/db/insert/Users`,{
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(newUser2)
}).then((res) => res.text()).then(answer => console.log(answer));

fetch(`${local}/db/insert/Users`,{
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(newUser3)
}).then((res) => res.text()).then(answer => console.log(answer));

fetch(`${local}/db/insert/Users`,{
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(newUser4)
}).then((res) => res.text()).then(answer => console.log(answer));

// Inserting products succesfully
fetch(`${local}/db/insert/Products`,{
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(newProd1)
}).then((res) => res.text()).then(answer => console.log(answer));


fetch(`${local}/db/insert/Products`,{
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(newProd2)
}).then((res) => res.text()).then(answer => console.log(answer));

fetch(`${local}/db/insert/Products`,{
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(newProd3)
}).then((res) => res.text()).then(answer => console.log(answer));

fetch(`${local}/db/insert/Products`,{
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(newProd4)
}).then((res) => res.text()).then(answer => console.log(answer));

// Unsuccesful inserting
fetch(`${local}/db/insert/Product`,{
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({id: 5, name: "pasta", price:8})
}).then((res) => res.text()).then(answer => console.log(answer));
// Only accepts Products or Users see the URL

fetch(`${local}/db/insert/User`,{
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({id: 5, name: "abc"})
}).then((res) => res.text()).then(answer => console.log(answer));
// Only accepts Products or Users see the URL

fetch(`${local}/db/insert/haha`,{
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({id: 5, name: "abc"})
}).then((res) => res.text()).then(answer => console.log(answer));
// Only accepts Products or Users see the URL

fetch(`${local}/db/insert/Users`,{
    method: 'PUT',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({id: 5, name: "abc"})
}).then((res) => res.text()).then(answer => console.log(answer));
// Only accepts Products or Users as POST requst see the Method

// get product succesfully (assuming you inserted the product with id 1)
fetch(`${local}/db/getbyid/Products/1`,{
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
}).then((res) => res.text()).then(answer => console.log(answer));

// get user succesfully (assuming you inserted the user with id 1)
fetch(`${local}/db/getbyid/Users/1`,{
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
}).then((res) => res.text()).then(answer => console.log(answer));

// get product unsuccesfully (assuming you didn't insert any product with id 7)
fetch(`${local}/db/getbyid/Products/1`,{
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
}).then((res) => res.text()).then(answer => console.log(answer));

// get user unsuccesfully (assuming you didn't insert any user with id 7)
fetch(`${local}/db/getbyid/Users/7`,{
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
}).then((res) => res.text()).then(answer => console.log(answer));

// get user unsuccesfully (assuming you didn't insert any user with id 7)
fetch(`${local}/db/getbyid/User/7`,{
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
}).then((res) => res.text()).then(answer => console.log(answer));
// Only accepts Products or Users as URL

fetch(`${local}/db/getbyid/Users`,{
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
}).then((res) => res.text()).then(answer => console.log(answer));
// Only accepts Products or Users, no second query param was passed

fetch(`${local}/db/getbyid/Users`,{
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({id:3})
}).then((res) => res.text()).then(answer => console.log(answer));
// Only accepts Products or Users, even though I passed a second param 
// it was passed from body

fetch(`${local}/db/getbyid/Users/7`,{
    method: 'PUT',
    headers: {
        'Content-Type': 'application/json'
    },
}).then((res) => res.text()).then(answer => console.log(answer));
// Only accepts Products or Users as POST requst see the Method