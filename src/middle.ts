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