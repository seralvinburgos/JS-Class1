const taskInput=document.getElementById("task");
const taskInput2=document.getElementById("task2");
let c=0;

/* Priority checklist */

function addTask(){
    let task=taskInput.value;
    console.log(task);
    displayTask(task);
    clearTask(task);
    c++;
}
function displayTask(newTask){
    document.getElementById("task-list").innerHTML += `
    <li id=${c}>${newTask} <button id="deleteButton" onclick="deleteTask(${c})">X </button></li>`;
}
function clearTask(task){
    taskInput.value="";
    taskInput.focus();
}
function deleteTask(taskID){
    document.getElementById(taskID).remove();
    console.log("Deleting task" + taskID);
}

/* General checklist */

function addTask2(){
    let task2=taskInput2.value;
    console.log(task2);
    displayTask2(task2);
    clearTask2(task2);
    c++;
}
function displayTask2(newTask2){
    document.getElementById("task-list2").innerHTML += `
    <li id=${c}>${newTask2} <button id="deleteButton" onclick="deleteTask(${c})">X </button></li>`;
}
function clearTask2(task2){
    taskInput2.value="";
    taskInput2.focus();
}
function deleteTask2(taskID2){
    document.getElementById(taskID2).remove();
    console.log("Deleting task" + taskID2);
}