import { createTaskElement } from './createTaskElement';
import { createEditIcon } from './createEditIcon';
import { projectContainer } from './app-page';
import { deleteProject } from './deleteProject';

export function createProjectItem(task, index) {
    if (!task) {
        console.error('Task is undefined or null');
        return;
    }
    console.log('Project:', task);
    console.log('Descrip:', task.description);
    console.log('Project title:', task.title);

    // Agregar más declaraciones console.log aquí para depurar
    console.log('Task object:', task);
    const projectItem = document.createElement('div');
    projectItem.setAttribute('id', index);
    projectItem.setAttribute('key', index);
    projectItem.setAttribute('class', 'card task');

    projectItem.appendChild(createTaskElement('h1', `Title: ${task.title}`, 'task-title'));
    projectItem.appendChild(createTaskElement('h1', `Description: ${task.description}`, 'task-desc'));
    projectItem.appendChild(createTaskElement('h1', `Due Date: ${task.dueDate}`, 'task-date'));
    projectItem.appendChild(createTaskElement('h1', `Priority: ${task.priority}`, 'Priority'));

    projectItem.appendChild(createTaskElement('button', 'X', 'delete'));
    projectItem.appendChild(createEditIcon(task));

    projectItem.querySelector('.delete').addEventListener('click', () => {
        deleteProject(index);
    });
    console.log('Created projectItem:', projectItem);
    projectContainer.appendChild(projectItem);
}