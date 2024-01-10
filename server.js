import express from 'express'
const app = express();

app.use(express.static('public')); //static folder
app.use(express.urlencoded({extended: true})); // parse URL encoded body (HTML)
app.use(express.json()); // parse JSON body (API)

// handle GET request to fetch 
app.get('/users', async(req, res) => {
    // const users = [
    //     {id: 1, name: 'Mikhail Soroka'},
    //     {id: 2, name: 'Antony MacDon'},
    //     {id: 3, name: 'Jenifer Tower'}
    // ];

    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await response.json();

    res.send(`
        <h1 class="text-2xl font-bold my-4">Users</h1>
        <ul>
            ${users.map((user) => `<li>${user.name}</li>`).join('')}
        </ul>
    `);
})

app.listen(8000, () => {
    console.log('Server listening on port 8000');
});