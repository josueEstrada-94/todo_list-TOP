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
    console.log('Project CHECK:', task?.checklist);

    const projectItem = document.createElement('div');
    projectItem.setAttribute('id', index);
    projectItem.setAttribute('key', index);
    console.log('Project key:', index);
    projectItem.setAttribute('class', 'card task');

    projectItem.appendChild(createTaskElement('h1', `Title: ${task.title}`, 'task-title'));
    projectItem.appendChild(createTaskElement('h1', `Description: ${task.description}`, 'task-desc'));
    const formattedDate = formatDueDate(task.dueDate);
    projectItem.appendChild(createTaskElement('h1', `Due Date: ${formattedDate}`, 'task-date'));
    projectItem.appendChild(createTaskElement('h1', `Priority: ${task.priority}`, 'Priority'));
    
    renderChecklistItems(task);
    projectItem.appendChild(createTaskElement('button', 'X', 'delete'));
    projectItem.appendChild(createEditIcon(task));

    projectItem.querySelector('.delete').addEventListener('click', () => {
        deleteProject(index);
    });

    console.log('Created projectItem:', projectItem);
    projectContainer.appendChild(projectItem);
}