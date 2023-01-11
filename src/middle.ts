const local = `http://localhost:${3001}`;
fetch(`${local}/data`,{
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({data: "Yellow"})
}).then((res) => res.text()).then(answer => console.log(answer));
// prints Yellow

fetch(`${local}/data`,{
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({data: "Yellow"})
}).then((res) => console.log(res));

fetch(`${local}/data`,{
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({data: "Yellow"})
}).then((res) => console.log(typeof(res)));



// DB part 2
const newUser = {id: 1, name:"Inbal"}
fetch(`${local}/db/insert/Users`,{
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(newUser)
}).then((res) => res.text()).then(answer => console.log(answer));

const newProduct = {id: 1, name:"Water", price: 5}
fetch(`${local}/db/insert/Products`,{
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(newProduct)
}).then((res) => res.text()).then(answer => console.log(answer));