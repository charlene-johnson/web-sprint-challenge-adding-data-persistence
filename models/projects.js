const db = require("../data/config")

function getProjects() {
    return db("projects")
}

function getProjectById(id) {
    return db("projects")
    .where("id", id)
    .first()
}

function addProject(project) {
    return db("projects")
    .insert(project)
    .then(ids => {
        return getProjectById(ids[0])
    })
}

module.exports = {
    getProjects,
    getProjectById,
    addProject,
}