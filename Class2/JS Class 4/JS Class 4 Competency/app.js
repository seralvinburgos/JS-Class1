const taskInput=document.getElementById("task");
let c=0;

function addTask(){
    let task=taskInput.value;
    console.log(task);
    displayTask(task);
    clearTask(task);
    c++;
}
function displayTask(newTask){
    document.getElementById("task-list").innerHTML += `
    <li id=${c}>${newTask} <button onclick="deleteTask(${c})">Delete </button></li>`;
}
function clearTask(task){
    taskInput.value="";
    taskInput.focus();
}
function deleteTask(taskID){
    document.getElementById(taskID).remove();
    console.log("Deleting task" + taskID);

}