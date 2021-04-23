
const express = require('express');
const mongoose = require('mongoose');

// Check if the service has started or not 
const routes = require("./Routes")

const url = 'mongodb://localhost:127.0.0.1:27017/students'

var cors = require('cors'); // needed for allowing access to mongodb data for react applicaiton


mongoose.connect(url,{useNewUrlParser:true,useUnifiedTopology:true});
const connection = mongoose.connection;

connection.once('open',()=>{
    console.log('\nMongoDB connection estabilished successfully');
});


const app= express();
app.use(cors())
app.use(express.json())
app.use("/Students", routes);

app.get('/',(req,res)=>{
    res.send("Crud Application");

})

app.listen(5000,()=>{
    console.log(`\nserver running on port: 5000`);
})