const express = require("express")
const helmet = require("helmet")

const projectRouter = require("./routers/project_router")
const resourceRouter = require("./routers/resource_router")
const taskRouter = require("./routers/task_router")

const server = express()
const port = process.env.PORT || 5000

server.use(helmet())
server.use(express.json())

server.use("/api/projects", projectRouter)
server.use("/api/resources", resourceRouter)
server.use("/api/projects", taskRouter)

server.use((err, req, res, next) => {
    console.log(err)
    res.status(500).json({
        message: "Sorry, something went wrong, try again later",
    })
})

server.listen(port, () => {
    console.log(`Running at http://localhost:${port}`)
})