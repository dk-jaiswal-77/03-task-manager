const express = require("express");

// router
const router = express.Router();

// importing controller function 
const {getAllTasks, getTask, createTask, updateTask, deleteTask} = require("../controllers/tasks");

// crud operations
router.route("/").get(getAllTasks).post(createTask);
router.route("/:id").get(getTask).patch(updateTask).delete(deleteTask);



// exporting router
module.exports = router;