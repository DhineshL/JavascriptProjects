// define ui variables
const form = document.querySelector("#task-form");
const taskList = document.querySelector(".collection")
const clearBtn = document.querySelector(".clear-tasks")
const  filter = document.querySelector("#filter")
const taskInput = document.querySelector("#task")

//load all event listeners
loadEventListeners();

function loadEventListeners(){
  //domcontentloaded - each time when content loads
  document.addEventListener("DOMContentLoaded",getTasks);
  form.addEventListener("submit",addTask);
  taskList.addEventListener("click",removeTask);
  clearBtn.addEventListener("click",clearTasks);
  filter.addEventListener("keyup",filterTasks);
}
//get from ls
function getTasks(){
  let tasks;
  if(localStorage.getItem("tasks")==null){
    tasks = []
  }
  else{
    tasks = JSON.parse(localStorage.getItem("tasks"))
  }
  tasks.forEach(function(task){
    const li = document.createElement("li");
    li.className ="collection-item";
    li.appendChild(document.createTextNode(task));
    const link = document.createElement("a");
    link.className = "delete-item secondary-content"
    link.innerHTML = `<i class="fa fa-remove"></i>`;
    li.append(link);
    taskList.appendChild(li);
  });
}
//add task
function addTask(e){
  if(taskInput.value===""){
    alert("Add a task");
  }
  const li = document.createElement("li")
  li.className ="collection-item"
  li.appendChild(document.createTextNode(taskInput.value));
  const link = document.createElement("a")
  link.className = "delete-item secondary-content"
  link.innerHTML = `<i class="fa fa-remove"></i>`
  li.appendChild(link);
  taskList.appendChild(li)
  storeTaskLocalStorage(taskInput.value);
  taskInput.value = "";
  e.preventDefault();
}
//store Task
function storeTaskLocalStorage(task){
  let tasks;
  if(localStorage.getItem("tasks")===null){
    tasks = []
  }
  else{
    tasks = JSON.parse(localStorage.getItem("tasks"))
  }
  tasks.push(task);
  localStorage.setItem("tasks",JSON.stringify(tasks));
}
//remove task
function removeTask(e){
  if(e.target.parentElement.classList.contains("delete-item")){
    if(confirm("Are You Sure?")){
      e.target.parentElement.parentElement.remove();
      removeTaskFromLocalStorage(e.target.parentElement.parentElement)
    }
  }
}
//remove from ls
function removeTaskFromLocalStorage(taskItem){
  let tasks;
  if(localStorage.getItem("tasks")===null){
    tasks = []
  }
  else{
    tasks = JSON.parse(localStorage.getItem("tasks"))
  }
  for(let i =0;i < tasks.length;i++){
    if(taskItem.textContent===tasks[i])
      {
        tasks.splice(i,1);
      break;}
  }
  localStorage.setItem("tasks",JSON.stringify(tasks));
}
//clear tasks
function clearTasks(){
  while(taskList.firstChild){
    taskList.removeChild(taskList.firstChild)
  }
  clearTasksFromLocalStorage();
}
//clear from ls
function clearTasksFromLocalStorage(){
  localStorage.clear();
}
function filterTasks(e){
  const text = e.target.value.toLowerCase();
  document.querySelectorAll('.collection-item').forEach(function(task){
    const item = task.firstChild.textContent;
    if(item.toLowerCase().indexOf(text)!= -1){
      task.style.display ="block";
    }
    else{
      task.style.display ="none";
    }
  })
}
