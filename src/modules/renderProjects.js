import { createProjectItem } from './createProjectItem';
import { projectContainer } from './app-page';
import { taskList } from './taskManager';

export function renderProjects() {
    projectContainer.textContent = '';
    taskList.map((task, index) => {
        createProjectItem(task, index);
    });
};