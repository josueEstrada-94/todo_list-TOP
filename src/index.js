import './style.css'
import './modal-style.css'

import { appPage, projectContainer } from './modules/app-page';
import { Task } from './modules/task';
import { taskList, addTaskToList, addLocalStorage } from './modules/taskManager';
import { modal, addTaskForm, addTaskButton, closeModalButton, resetButton, addToChecklistButton} from './modules/taskModal';
import { createTaskElement } from './modules/createTaskElement';
import { createEditIcon } from './modules/createEditIcon';
import { createProjectItem } from './modules/createProjectItem';
import { renderProjects } from './modules/renderProjects';
import { saveAndRenderProjects } from './modules/saveAndRenderTasks';
import { fillOutEditForm } from './modules/taskEdition';
import { addItemToChecklist } from './modules/addItemToChecklist';
import darkModeModule from './modules/darkMode';
import { renderChecklistItems } from './modules/renderChecklist';
import * as dateFunctions from "./modules/dateFunctions";


appPage()
darkModeModule.init();
addLocalStorage();
createEditIcon();
fillOutEditForm();

dateFunctions.displayCurrentDate();
dateFunctions.checkTaskReminders(taskList);
// taskModal.js events

closeModalButton.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', (e) => {
    if (e.target == modal) {
        modal.style.display = 'none'
    }
});

addTaskButton.addEventListener('click', () => {
    modal.style.display = 'block';
    document.querySelector('.form-title').textContent = 'Add New Task';
    document.querySelector('.btn, .form-add-button').textContent = 'Add';
});

addToChecklistButton.addEventListener('click',(e) =>{
    e.preventDefault();
    addItemToChecklist();
    
});

document.querySelector('.todo-ul').addEventListener('click', function(event) {
    if (event.target.classList.contains('remove-checklist-item')) {
        console.log('REMOVING ITEM');
        event.target.parentElement.remove();
    }
});

addTaskForm.addEventListener('submit', (e) =>{
    e.preventDefault();

    const data = new FormData(e.target);
    let newTask = {};

    data.forEach((value, key) => {
        newTask[key] = value;
    });
    
    if (document.querySelector('.form-title').textContent === 'Edit Project') {
        let id = parseInt(e.target.id);
        let editTask = taskList.find((task) => task.id === id);

        editTask.title = newTask['task-title'];
        editTask.description = newTask['task-desc'];
        editTask.dueDate = newTask['task-date'];
        editTask.priority = newTask['Priority'];
        editTask.checklist = newTask['add-to-checklist'].split(',');
        saveAndRenderProjects();
        
        renderChecklistItems(editTask.checklist);
        console.log('the object:', editTask)
        console.log('Checklist:', editTask.checklist);
        
    } else {
        addTaskToList(
            newTask['task-title'],
            newTask['task-desc'],
            newTask['task-date'],
            newTask['Priority'],
            newTask['add-to-checklist']
        );
        
    }
    
    addTaskForm.reset();
    modal.style.display = 'none'
});

resetButton.addEventListener('reset', (e) => {
    e.preventDefault();
    addTaskForm.reset();
})



createTaskElement();
createProjectItem();
renderProjects();
