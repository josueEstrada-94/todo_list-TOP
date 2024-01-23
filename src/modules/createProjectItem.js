import { createTaskElement } from './createTaskElement';
import { createEditIcon } from './createEditIcon';
import { projectContainer } from './app-page';
import { deleteProject } from './deleteProject';
import { saveAndRenderProjects } from './saveAndRenderTasks';
import { addItemToChecklist } from './addItemToChecklist';
import { renderChecklistItems } from './renderChecklist';
import { formatDueDate } from "./dateFunctions";

export function createProjectItem(task, index) {
    
    console.log('Project:', task);
    console.log('Description:', task?.description);
    console.log('Project date:', task?.dueDate);
    console.log('Project priority:', task?.priority);
    console.log('Project title:', task?.title);

    const projectItem = document.createElement('div');
    projectItem.setAttribute('id', index);
    projectItem.setAttribute('key', index);
    console.log('Project key:', index);
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
    renderChecklistItems(task.checklist);

    console.log('Created projectItem:', projectItem);
    console.log('Project CHECK:', task.checklist);
    projectContainer.appendChild(projectItem);
}