const express = require("express")
const Tasks = require("../models/tasks")
const router = express.Router()

router.get("/:id/task", async (req,res,next) => {
    try{
        const tasks = await Tasks.getTasks(req.params.id)
        if(!tasks) {
            return res.status(404).json({
                message: "task not found"
            })
        }
        res.json(tasks)
    } catch(err) {
        next(err)
    }
})

router.post("/:id/task", async (req, res, next) => {
    try {
        const addTask = await Tasks.addTask(req.body)

        res.status(201).json(addTask)
    } catch(err) {
        next(err)
    }
})

module.exports = router