const TaskList = document.getElementById("TaskList");
const InputForm = document.getElementById("InputForm");
const TaskName = document.getElementById("TaskName");
const TaskDesc = document.getElementById("TaskDesc");
const ClearButton = document.getElementById("ClearButton");
const ThemeButton = document.getElementById("ThemeButton");
const WebHead = document.getElementById("WebHead");

let ActiveTasks = [];
InputForm.addEventListener('submit', function(){
    event.preventDefault();
    console.log("We're being called");
   if (!TaskName.value || TaskName.value === "Enter the task name") {
       alert("Please make sure all fields are filled out.");
   }
    else {
        let newTaskItem = document.createElement('li');
        let newTaskName = TaskName.value;
        let newTaskDesc = TaskDesc.value;
        newTaskItem.innerHTML = "<b>" + newTaskName + "</b><br><i>" + newTaskDesc + "</i>";
        TaskList.append(newTaskItem);
        ActiveTasks.push(newTaskItem);
        console.log("Pushed");
    }
});

ClearButton.addEventListener('click', function(){
    while (TaskList.firstChild){
        TaskList.removeChild(TaskList.firstChild);
    }
    ActiveTasks.removeAll();
});

ThemeButton.addEventListener('click', function(){
    document.body.style.backgroundColor = "#121212";
    WebHead.style.color = "white";
    for (let i = 0; i < ActiveTasks.length; i++) {
        let tempTask = ActiveTasks[i];
        tempTask.style.backgroundColor = "grey";
        tempTask.style.color = "white";
        console.log("Morgan");
    }
    console.log("Your wish.")
});

// add localstorage functionality
