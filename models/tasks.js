const db = require("../data/config")

function getTasks(project_id) {
    return db("tasks as t")
    .leftJoin("projects as p", "p.id", "t.project_id")
    .where("t.project_id", project_id)
    .select(
        "p.name as ProjectName",
        "p.description as projectDescription",
        "t.description as taskDescription",
        "t.notes as taskNotes",
        "t.complete"
    )
    .orderBy("t.id")
}

function addTask(task) {
    return db("tasks")
    .insert(task)
}

module.exports = {
    getTasks,
    addTask
}