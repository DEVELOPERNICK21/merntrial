const express = require('express');
const app = express();

// Middleware

const Middleware = (req,res,next) =>
{
    console.log("this is middleware");
    next();
}


app.get('/',(req, res) => {
    res.send(`Hello from the server`);
    console.log(`Server is running this main page`) 
});
app.get('/about', Middleware,(req, res) => {
    res.send(`Hello from the about page of server`);
});
app.get('/contact',(req, res) => {
    res.send(`Hello from the Contact page of server`);
});

app.listen(3000, () => {
    console.log(`Server is running at port 3000`)
})

