import { renderProjects } from './renderProjects';
import { taskList } from './taskManager';

export function saveAndRenderProjects(){
    console.log('Saving tasks to localStorage:', taskList);
    localStorage.setItem('tasks', JSON.stringify(taskList));
    console.log('Rendering projects...');
    renderProjects();
}