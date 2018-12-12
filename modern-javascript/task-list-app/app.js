//  Define UI Vars

const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

// Load all event listeners

loadEventListeners()

// Load all event listeners

function loadEventListeners(){
  //DOM load event
  document.addEventListener('DOMContentLoaded',getTasks);
  //Add task event
  form.addEventListener('submit',addTask);
  //Remove task event
  taskList.addEventListener('click', removeTasks);
  //Clear task event
  clearBtn.addEventListener('click',clearTasks);
  //Filter tasks event
  filter.addEventListener('keyup',filterTasks);
}

// Get Tasks from LS
function getTasks(){
  let tasks;
  if(localStorage.getItem('tasks') === null){
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }

  console.log(tasks)

  tasks.forEach(function(task){
    // Create li element
    const li = document.createElement('li');
    li.className = 'collection-item';
    li.appendChild(document.createTextNode(task));

    const link = document.createElement('a');
    link.className = 'delete-item secondary-content';
    link.innerHTML = '<i class="fa fa-times"></i>';

    //Append the link to li
    li.appendChild(link);

    //Append li to ul
    taskList.appendChild(li);
  });
}


// Add Task
function addTask(e){
  if(taskInput.value === ''){
    alert('Add a task');
  }

  // Create li element
  const li = document.createElement('li');
  li.className = 'collection-item';
  li.appendChild(document.createTextNode(taskInput.value));

  const link = document.createElement('a');
  link.className = 'delete-item secondary-content';
  link.innerHTML = '<i class="fa fa-times"></i>';

  //Append the link to li
  li.appendChild(link);

  //Append li to ul
  taskList.appendChild(li);

  //Store in LS
  storeTaskInLocalStorage(taskInput.value);

  //Cleat input
  taskInput.value = '';

  e.preventDefault();
}

// Store Task
function storeTaskInLocalStorage(task){
  let tasks;
  if(localStorage.getItem('tasks') === null){
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }

  tasks.push(task);

  localStorage.setItem('tasks',JSON.stringify(tasks));
}

// Remove Tasks

function removeTasks(e){
  if(e.target.parentElement.classList.contains('delete-item')){
    if(confirm('Are You Sure?')){
      e.target.parentElement.parentElement.remove(); 
      
      //Remove from LS
      removeTaskFromLocalStorage(e.target.parentElement.parentElement);
    }
  }
}

// Remove from LS
function removeTaskFromLocalStorage(taskItem){
    let tasks;
  if(localStorage.getItem('tasks') === null){
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }

  tasks.forEach((task, index)=>{
    if(taskItem.textContent === task){
      tasks.splice(index, 1);
    }
  });

  localStorage.setItem('tasks',JSON.stringify(tasks));
}

function clearTasks(){
  // taskList.innerHTML = '';

  // Faster
  while(taskList.firstChild){
    taskList.removeChild(taskList.firstChild);
  }
  // Clear from LS
  clearTasksFromLocalStorage();
}

const clearTasksFromLocalStorage = () => localStorage.clear();

function filterTasks(e){
  const text = e.target.value.toLowerCase();

  document.querySelectorAll('.collection-item').forEach((task)=>{
    console.log(`text: ${text}, task: ${task.firstChild.textContent}`)
    const item = task.firstChild.textContent;
    if(item.toLowerCase().indexOf(text) != -1){
      task.style.display = 'block';
    }else{
      task.style.display = 'none';
    }
  });
}