import { modal } from './taskModal';
import { taskList } from './taskManager';


export function fillOutEditForm(task){
    if (task) {
        modal.style.display = 'block';
        document.querySelector('.form-title').textContent = 'Edit Project';
        document.querySelector('.btn').textContent = 'Edit';

        if (task.id) {
            console.log('ID de la tarea encontrada:', task.id);
            
            // Encuentra el índice de la tarea en tu lista (supongo que tienes una lista llamada taskList)
            const editTaskIndex = taskList.findIndex(t => t.id === task.id);

            console.log('Index de la tarea encontrada:', editTaskIndex);

            document.querySelector('.add-task-form').setAttribute('id', task.id);
        } else {
            console.error('Project id es undefined or null');
        }

        document.querySelector('#task-title').value = task.title || '';
        document.querySelector('#task-desc').value = task.description || '';
        document.querySelector('#task-date').value = task.dueDate || '';
        document.querySelector('#Priority').value = task.priority || '';

    } else {
        console.error('Task/Project es undefined or null, Task value:', task);
    }

}