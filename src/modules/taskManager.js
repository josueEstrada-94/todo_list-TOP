import { saveAndRenderProjects } from "./saveAndRenderTasks";

export let taskList = [];

export function addTaskToList(title, description, dueDate, priority, checklist){
    taskList.push(new Task(title, description, dueDate, priority, checklist));
    saveAndRenderProjects();
}

export function addLocalStorage(){
    taskList = JSON.parse(localStorage.getItem('tasks')) || [];
    saveAndRenderProjects();
}