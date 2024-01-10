import { taskList } from './taskManager';
import { saveAndRenderProjects } from './saveAndRenderTasks'

export function deleteProject(index) {
    taskList.splice(index, 1);
    saveAndRenderProjects();
}