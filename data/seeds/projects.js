
exports.seed = async function(knex) {
  await knex("project_resources").truncate()
  await knex("project_tasks").truncate()
  await knex("resources").truncate()
  await knex("tasks").truncate()
  await knex("projects").truncate()

  await knex("projects").insert([
    {name: "Finish Sprint Challenge", description: "Finish the sprint challenge on time", complete: false},
    {name: "Take a nap", description: "take a nice long nap", complete: false},
    {name: "Gaming", description: "Play an online game with friends", complete: false},
  ])
  await knex("tasks").insert([
    {description: "Install Dependencies", notes: "Install the dependencies you need", complete: false, project_id: 1},
    {description: "Make folders you need", notes: "make the folders you will need for the challenge", complete: false, project_id: 1},
    {description: "Write code", notes:"Write the code necessary to complete the sprint", complete: false, project_id: 1},
    {description: "Take a nap", notes: "A nice long nap, you deserve it", complete: false, project_id: 2},
    {description: "Turn gaming computer on", notes: "You know how to turn it on...the power button", complete: false, project_id: 3},
    {description: "Login", description: "login to your computer", complete: false, project_id: 3},
    {description: "Click the game you want to play", complete: false, project_id: 3},
    {description: "Enjoy", notes: "Have fun!", complete: false, project_id: 3},
  ])
  await knex("resources").insert([
    {name: "Computer"},
    {name: "VS code", description: "Used for writing code"},
    {name: "Insomnia", description: "No, not the sleep depreived insomnia, the insomnia to test endpoints"},
    {name: "TablePlus", description: "makes sure our tables are working"},
    {name: "Bed", description: "A soft comfy bed with fluffy pillows"},
    {name: "Mouse", description: "Not the squeaky kind, the one you use on computers to click things"},
    {name: "Monitor"},
    {name: "Mechcanical Keyboard", description: "a very nice keyboard"}
  ])
  await knex("project_tasks").insert([
    {project_id: 1, task_id: 1},
    {project_id: 1, task_id: 2},
    {project_id: 1, task_id: 3},
    {project_id: 2, task_id: 4},
    {project_id: 3, task_id: 5},
    {project_id: 3, task_id: 6},
    {project_id: 3, task_id: 7},
    {project_id: 3, task_id: 8}
  ])
  await knex("project_resources").insert([
    {project_id: 1, resource_id: 1},
    {project_id: 1, resource_id: 2},
    {project_id: 1, resource_id: 3},
    {project_id: 1, resource_id: 4},
    {project_id: 1, resource_id: 6},
    {project_id: 1, resource_id: 7},
    {project_id: 2, resource_id: 5},
    {project_id: 3, resource_id: 1},
    {project_id: 3, resource_id: 6},
    {project_id: 3, resource_id: 7},
    {project_id: 3, resource_id: 8},
  ])
};
