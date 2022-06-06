// importing model
const Task = require("../models/task"); 


const getAllTasks = async(req, res) => {
    try{
        res.send("get all tasks");
    }catch(error){
        console.log(error);
    }
}

const getTask = async (req, res) => {
    try{
        res.json({id : req.params.id});
    }catch(error){
        console.log(error);
    }
}

const createTask = async(req, res) => {
    try{
        res.json({id : req.params.id});
    }catch(error){
        console.log(error);
    }
}

const updateTask = async (req, res) => {
    try{
        res.json({id : req.params.id});
    }catch(error){
        console.log(error);
    }
}

const deleteTask = async(req, res) => {
    try{
        res.json({id : req.params.id});
    }catch(error){
        console.log(error);
    }
}

module.exports = {
    getAllTasks, 
    getTask, 
    createTask, 
    updateTask, 
    deleteTask
};