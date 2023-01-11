const local = `http://localhost:${3001}`;
fetch(`${local}/data`,{
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({data: "Yellow"})
}).then((res) => res.text()).then(result => console.log(result));
// prints Yellow