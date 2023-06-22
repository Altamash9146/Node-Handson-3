const express = require('express');
const route = require("./Routes/UserRoute");
const { Allauth } = require('./Middleware/auth');

const app = express()

app.use(Allauth)

app.listen(8080,()=>{
    console.log("Server runned successfully");
})