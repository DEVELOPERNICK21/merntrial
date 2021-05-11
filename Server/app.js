const mongoose = require('mongoose');
const express = require('express');
const app = express();

const DB = "mongodb+srv://nick:#two7two1@cluster0.ajtxv.mongodb.net/trialmern?retryWrites=true&w=majority"

mongoose.connect(DB,
    {
        useNewUrlParser:true,
        useCreateIndex:true,
        useUnifiedTopology:true,
        useFindAndModify:false
    }
    ).then(() => {
    console.log(`connected Succesfully`)
}).catch((err) => console.log(`Not Connected`)); 

// Middleware

// const Middleware = (req,res,next) =>
// {
//     console.log("this is middleware");
//     next();
// }


app.get('/',(req, res) => {
    res.send(`Hello from the server`);
    console.log(`Server is running this main page`) 
});
// app.get('/about', Middleware,(req, res) => {
//     res.send(`Hello from the about page of server`);
// });
app.get('/about',(req, res) => {
    res.send(`Hello from the about page of server`);
});
app.get('/contact',(req, res) => {
    res.send(`Hello from the Contact page of server`);
});

app.listen(3000, () => {
    console.log(`Server is running at port 3000`)
})

