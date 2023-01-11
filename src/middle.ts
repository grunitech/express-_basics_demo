const local = `http://localhost:${3001}`;
fetch(`${local}/data`,{
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({data: "info"})
}).then((res) => res.json()).then((res)=> console.log(res));
