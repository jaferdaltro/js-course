const inputTask = document.querySelector('.input-task');
const btnAdd = document.querySelector('.btn-add');
const ul = document.querySelector('.tasks');

function createTask(imputedText) {
  const li = document.createElement('li');
  li.innerText = imputedText;
  ul.appendChild(li);
  createButtonDelete(li);
  saveTasks(imputedText);
}

function receivedEvent() {
  if (!inputTask.value) return;
  createTask(inputTask.value);
  inputCleaner();
}

btnAdd.addEventListener('click', () => receivedEvent());

inputTask.addEventListener('keypress', function (e) {
  if (e.keyCode === 13) {
    receivedEvent();
  }
});

function inputCleaner(){
  inputTask.value = '';
  inputTask.focus();
}

function createButtonDelete(li){
  li.innerText += ' ';
  const buttonDelete = document.createElement('button');
  buttonDelete.innerText = 'Delete';
  buttonDelete.setAttribute('class', 'delete')
  li.appendChild(buttonDelete);
}

document.addEventListener('click', function(e) {
  const el = e.target;

  if(el.classList.contains('delete')){
    el.parentElement.remove();
    saveTasks();
  }
})

function saveTasks(){
  const tasks = ul.querySelectorAll('li');
  const taskList = [];

  for(let task of tasks){
    let taskText = task.innerText;
    taskText = taskText.replace('Delete', '').trim();
    taskList.push(taskText);
  }

  const taskJSON = JSON.stringify(taskList);
  localStorage.setItem('tasks', taskJSON);
}

function loadSavedTasks(){
  const tasks = localStorage.getItem('tasks');
  const parsedTasks = JSON.parse(tasks);

  for(let task of parsedTasks){
    createTask(task);
  }
}

loadSavedTasks();