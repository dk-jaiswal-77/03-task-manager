const express = require("express");

// express app 
const app = express();

// dotenv
require("dotenv").config();

// middlewares
app.use(express.json()); // parse json body of req object

// routes
const tasksRouter = require("./routes/tasks");

app.use("/api/v1/tasks", tasksRouter);  



// port
const port = 3000;

// connect db && listening to port
const connect_db = require("./db/connect");

const start = async ()=>{
    try{
        await connect_db(process.env.MONGO_URI);
        console.log("connected to db...");
        app.listen(port, console.log(`server listening to port ${port}...`));
    }catch(error){
        console.log(error);
    }
};

start();
