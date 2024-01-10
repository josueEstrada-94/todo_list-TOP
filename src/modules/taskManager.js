import { saveAndRenderProjects } from "./saveAndRenderTasks";
import { Task } from './task';

export let taskList = [];

export function addTaskToList(title, description, dueDate, priority, checklist){
    taskList.push(new Task(title, description, dueDate, priority, checklist));
    saveAndRenderProjects();
}

export function addLocalStorage(){
    console.log('Loading tasks from localStorage...');
    taskList = JSON.parse(localStorage.getItem('tasks')) || [];
    console.log('Tasks loaded:', taskList);
    saveAndRenderProjects();
}