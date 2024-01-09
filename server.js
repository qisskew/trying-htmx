import express from 'express'
const app = express();

app.use(express.static('public')); //static folder
app.use(express.urlencoded({extended: true})); // parse URL encoded body (HTML)
app.use(express.json()); // parse JSON body (API)

app.listen(8000, () => {
    console.log('Server listening on port 8000');
});