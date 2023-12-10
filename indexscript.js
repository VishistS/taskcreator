const TaskList = document.getElementById("TaskList");
const InputForm = document.getElementById("InputForm");
const TaskName = document.getElementById("TaskName");
const TaskDesc = document.getElementById("TaskDesc");
const ClearButton = document.getElementById("ClearButton");
const ThemeButton = document.getElementById("ThemeButton");
const RestoreButton = document.getElementById("RestoreButton");
const TaskDate = document.getElementById("DateButton");
const WebHead = document.getElementById("WebHead");

let ActiveTasks = [];
let DarkMode = false;

function Task(taskn, taskd, date) {
    this.taskname = taskn;
    this.taskdesc = taskd;
    this.taskdate = date;
}

function RestoreTaskInit() {
    let listitems = JSON.parse(localStorage.getItem("StoreArray"));
    console.log(listitems);
    while (TaskList.firstChild){
        TaskList.removeChild(TaskList.firstChild);
    }
    for (let i = 0; i < listitems.length; i++) {
        let tempName = listitems[i].taskname;
        let tempDesc = listitems[i].taskdesc;
        let tempDate = listitems[i].taskdate;
        let newTaskItem = document.createElement('li');
        if (tempDate) {
            newTaskItem.innerHTML = "<b>" + tempName + "</b><br><i>" + tempDesc + "</i>" + "<br><i> Due Date : " + tempDate + "</i>";
        }
        else {
            newTaskItem.innerHTML = "<b>" + tempName + "</b><br><i>" + tempDesc + "</i>";
        }
        TaskList.append(newTaskItem);
    }
    console.log("Restored");
}

RestoreTaskInit();

InputForm.addEventListener('submit', function(){
    event.preventDefault();
    console.log("We're being called");
   if (!TaskName.value || TaskName.value === "Enter the task name") {
       alert("Please make sure all fields are filled out.");
   }
    else {
        let newTaskItem = document.createElement('li');
        let taskObj = new Task(TaskName.value, TaskDesc.value, TaskDate.value);
        if (taskObj.taskdate) {
            newTaskItem.innerHTML = "<b>" + taskObj.taskname + "</b><br><i>" + taskObj.taskdesc + "</i>" + "<br><i> Due Date : " + taskObj.taskdate + "</i>";
        }
        else {
            newTaskItem.innerHTML = "<b>" + taskObj.taskname + "</b><br><i>" + taskObj.taskdesc + "</i>";
        }
        TaskList.append(newTaskItem);
        ActiveTasks.push(taskObj);
        localStorage.setItem("StoreArray", JSON.stringify(ActiveTasks));
        console.log("Pushed");
    }
});

ClearButton.addEventListener('click', function(){
    while (TaskList.firstChild){
        TaskList.removeChild(TaskList.firstChild);
    }
    ActiveTasks.length = 0;
    localStorage.setItem("StoreArray", JSON.stringify(ActiveTasks));
});

ThemeButton.addEventListener('click', function(){
    if (DarkMode === false) {
        DarkMode = true;
        document.body.style.backgroundColor = "#121212";
        WebHead.style.color = "white";
        // will need to reimplement adjustment of theme for individual list items later on
        // use loop ^^
        ThemeButton.value = "Light Mode";
    }
    else if (DarkMode === true) {
        DarkMode = false;
        document.body.style.backgroundColor = "antiquewhite";
        // will need to reimplement adjustment of theme for individual list items later on
        // use loop ^^
        WebHead.style.color = "black";
        ThemeButton.value = "Dark Mode";
    }
});



// add localstorage functionality
