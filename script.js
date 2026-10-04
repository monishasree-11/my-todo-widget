let input = document.getElementById("taskInput");
let button = document.getElementById("addButton");
let taskList = document.getElementById("taskList");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function displayTasks() {

    taskList.innerHTML = "";

    for (let i = 0; i < tasks.length; i++) {

        let line = document.createElement("div");

        let checkbox = document.createElement("input");
        checkbox.type = "checkbox";

        let text = document.createTextNode(" " + tasks[i]);

        line.appendChild(checkbox);
        line.appendChild(text);

        taskList.appendChild(line);
    }
}

button.addEventListener("click", function() {

    let task = input.value.trim();

    if (task !== "") {

        tasks.push(task);

        localStorage.setItem("tasks", JSON.stringify(tasks));

        input.value = "";

        displayTasks();
    }
});

displayTasks();