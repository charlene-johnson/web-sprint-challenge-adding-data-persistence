const db = require("../data/config")

function getResources() {
    return db("resources")
}

function getResourceById(id) {
    return db("resources")
    .where("id", id)
    .first()
}

function addResource(resource) {
    return db("resources")
    .insert(resource)
    .then(ids => {
        return getResourceById(ids[0])
    })
}

module.exports = {
    getResources,
    getResourceById,
    addResource, 
}