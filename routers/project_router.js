const express = require("express")
const Projects = require("../models/projects")
const router = express.Router()


router.get("/", async (req, res, next) => {
    try{
        const projects = await Projects.getProjects()
        res.json(projects)
    } catch(err) {
        next(err)
    }
})

router.get("/:id", async (req, res, next) => {
    try{
        const project = await Projects.getProjectById(req.params.id)
        if(!project) {
            return res.status(404).json({
                message: "Project not found with this ID"
            })
        }
        res.json(project)
    } catch (err) {
        next(err)
    }
})

router.post("/", async (req, res, next) => {
    try{
        const addAProject = await Projects.addProject(req.body)

        res.status(201).json(addAProject)
    } catch (err) {
        next(err)
    }
})

module.exports = router