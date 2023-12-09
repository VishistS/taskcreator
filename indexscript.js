const TaskList = document.getElementById("TaskList");
const InputForm = document.getElementById("InputForm");
const TaskName = document.getElementById("TaskName");
const TaskDesc = document.getElementById("TaskDesc");
const ClearButton = document.getElementById("ClearButton");

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
    }
});

ClearButton.addEventListener('click', function(){
    while (TaskList.firstChild){
        TaskList.removeChild(TaskList.firstChild);
    }
});

// add localstorage functionality
