import { renderProjects } from './renderProjects';
import { taskList } from './taskManager';

export function saveAndRenderProjects(){
    localStorage.setItem('tasks', JSON.stringify(taskList));
    renderProjects();
}