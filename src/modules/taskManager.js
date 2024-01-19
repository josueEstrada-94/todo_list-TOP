import { saveAndRenderProjects } from "./saveAndRenderTasks";
import { Task } from './task';
import { formatDueDate } from "./dateFunctions";

export let taskList = [];

export function addTaskToList(title, description, dueDate, priority, checklist){
    dueDate = formatDueDate(dueDate);
    taskList.push(new Task(title, description, dueDate, priority, checklist));

    saveAndRenderProjects();
}

export function addLocalStorage(){
    console.log('Loading tasks from localStorage...');
    taskList = JSON.parse(localStorage.getItem('tasks')) || [];
    console.log('taskList after adding task:', taskList);
    saveAndRenderProjects();
}