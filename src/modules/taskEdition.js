import { modal } from './taskModal';
import { taskList } from './taskManager';


export function fillOutEditForm(task){
    if (task) {
        modal.style.display = 'block';
        document.querySelector('.form-title').textContent = 'Edit Project';
        document.querySelector('.btn').textContent = 'Edit';

        if (task.id) {
            console.log('ID Found:', task.id);
            
            const editTaskIndex = taskList.findIndex(t => t.id === task.id);

            console.log('Task Index found:', editTaskIndex);

            document.querySelector('.add-task-form').setAttribute('id', task.id);
        } else {
            console.error('Project id es undefined or null');
        }

        document.querySelector('#task-title').value = task.title || '';
        document.querySelector('#task-desc').value = task.description || '';
        document.querySelector('#task-date').value = task.dueDate || '';
        document.querySelector('#Priority').value = task.priority || '';
        document.querySelector('#add-to-checklist').value = task.checklist || '';

    } else {
        console.error('Task/Project es undefined or null, Task value:', task);
    }

}