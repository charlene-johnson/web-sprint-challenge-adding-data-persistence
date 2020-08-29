const express = require("express")
const Resources = require("../models/resources")
const router = express.Router()

router.get("/", async (req, res ,next) => {
    try{
        const resources = await Resources.getResources()
        res.json(resources)
    } catch(err) {
        next(err)
    }
})

router.get("/:id", async (req, res, next) => {
    try {
        const resource = await Resources.getResourceById(req.params.id)
        if(!resource) {
            return res.status(404).json({
                message: "The resorce with this ID is not found"
            })
        }
        res.json(resource)
    } catch(err) {
        next(err)
    }
})

router.post("/", async (req, res, next) => {
    try {
        const addAResource = await Resources.addResource(req.body)

        res.status(201).json(addAResource)
    } catch(err) {
        next(err)
    }
})
module.exports = router