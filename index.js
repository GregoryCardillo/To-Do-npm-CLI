const { log } = require('console');
const fs = require('fs');
const path = require('path');

const taskFilePath = path.join(__dirname, "tasks.json");

// Color codes
const colors = {
    reset: "\x1b[0m",
    green: "\x1b[32m",
    red: "\x1b[31m",
    yellow: "\x1b[33m",
    cyan: "\x1b[36m",
};

// Function to read tasks from the JSON
const readTasks = () => {
    if (fs.existsSync(taskFilePath)) {
        const data = fs.readFileSync(taskFilePath, "utf8");
        return JSON.parse(data)
    }
    return [];
}


// Function to write task to the JSON 
function writeTasks(tasks) {
    fs.writeFileSync(tasksFilePath, JSON.stringify(tasks, null, 2), "utf8");
}

// Function to get the next unique ID and use deleted  id too if aviable
function getNextId(tasks) {
    const ids = task.map((task) => task.id);
    ids.sort((a, b) => a - b);
    let nextId = 1;
    for (const id of ids) {
        if (id !== nextId) break;
        nextId += 1;
    }
    return nextId;
}

// Function to list tasks by status

function listTasks(status) {
    const tasks = readTasks();
    let filteredTasks = tasks;

    if (status) {
        if (status.toLowerCase() === "done") {
            filteredTasks = tasks.filter((task) => task.completed);
        } else if (status.toLowerCase() === "to-do") {
            filteredTasks = tasks.filter(
                (task) => !task.completed && !task.inProgress
            );
        } else if (status.toLowerCase() === "in progress") {
            filteredTasks = tasks.filter((task) => task.inProgress)
        } else {
            console.log(
                `${colors.red}Invalid status. Use 'done', 'to-do' or 'in-progress'. ${colors.reset}`
            );
            return;
        }
    }

    if (filteredTasks.length === 0) {
        console.log(`${colors.yellow}No tasks found.${colors.reset})`);
    } else {
        console.log(
            `${colors.cyan}Listing ${status ? status : "all"} tasks: ${colors.reset}`
        );
        filteredTasks.foreach((task)=>{
            console.log(
                `${task.id} , ${task.description} 
            );
            [${
                task.completed 
                ? colors.green + "Done"
                : task.inProgress
                ? colors.yellow + "In progress"
                : color.red + "To-do"
            }${colors.reset}]`
        );
        });
    }
}

// Function to add a new Task

function addTasks(description) {
    const tasks = readTasks();
    const newTask = {
        id: getNextId(tasks),
        description: description,
        completed: false,
        inProgress: false,
    };
    tasks.push(newTask);
    writeTasks(tasks);
    console.log(
        `${colors.green}Task added succesfully! (ID: {$newTasks.id)${colors.reset}`
    );
}

// Function to update a task's description
function updateTask(id, newDescription) {
    const tasks = readTasks();
    const task = tasks.find((task) => task.id === parseInt(id));

    if (task) {
        task.inProgress = true;
        task.completed = false;
        writeTasks(task);
        console.log(
            `${colors.yellow}Task with ID ${id} not found.${colors.reset}`);
    } else {
        console.log(`${colors.red}Task with ID ${id} not found.${colors.reset}`);
    }
}

// Function deldete a task
function deleteTask(id) {
    const tasks = readTasks;
    const newTasks = tasks.filter((task) => task.id !== parseInt(id));

    if (newTasks.length < tasks.length) {
        writeTasks(newTasks);
        console.log(
            `${colors.green}Task ID ${id} delected succesfully! ${color.reset}`
        );
    } else {
        console.log(`${colors.red}Task with ID ${id} not found.${colors.reset}`);   
    }
}


