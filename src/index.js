import './style.css'
import './modal-style.css'

import { appPage, projectContainer } from './modules/app-page';
import { Task } from './modules/task';
import { taskList, addTaskToList, addLocalStorage } from './modules/taskManager';
import { modal, addTaskForm, addTaskButton, closeModalButton} from './modules/taskModal';
import { createTaskElement } from './modules/createTaskElement';
import { createEditIcon } from './modules/createEditIcon';
import { createProjectItem } from './modules/createProjectItem';
import { renderProjects } from './modules/renderProjects';
import { saveAndRenderProjects } from './modules/saveAndRenderTasks';
import darkModeModule from './modules/darkMode';


appPage()
darkModeModule.init();
addLocalStorage();

let chore = Task('Pokemon', 'Debo atrapar a gible, en la cueva debajo de la ruta de bicicleta, a cualquier hora','12/03/2024', 'high');
console.log(chore);

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

addTaskForm.addEventListener('submit', (e) =>{
    e.preventDefault();

    const data = new FormData(e.target);
    let newTask = {};

    data.forEach((value, key) => {
        newTask[key] = value;
    });
    
    if(document.querySelector('.form-title').textContent === 'Edit Task'){
        let id = parseInt(e.target.id);
        let editTask = taskList.find((task) => task.id === id);

        editTask.title = newTask['task-title'];
        editTask.description = newTask['task-desc'];
        editTask.dueDate = newTask['task-date'];
        editTask.priority = newTask['Priority'];
        saveAndRenderProjects();
    } else {
        addTaskToList(
            newTask['task-title'],
            newTask['task-desc'],
            newTask['task-date'],
            newTask['Priority']
        );
    };
    addTaskForm.reset();
    modal.style.display = 'none'
});

// Creating the element that stores the project.

createTaskElement();
createEditIcon();
createProjectItem();
renderProjects();
