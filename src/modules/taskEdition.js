import { modal } from './taskModal';

export function fillOutEditForm(task){
    if (task) {
        modal.style.display = 'block';
        document.querySelector('.form-title').textContent = 'Edit Project';
        document.querySelector('.btn').textContent = 'Edit';

        if (task.id) {
            document.querySelector('.add-task-form').setAttribute('id', task.id);
        } else {
            console.error('Project id es undefined or null');
        }
        
        document.querySelector('#task-title').value = task.title || '';
        document.querySelector('#task-desc').value = task.desc || '';
        document.querySelector('#task-date').value = task.date || '';
        document.querySelector('#Priority').value = task.priority || '';
    
    } else {
        console.error('Task/Project es undefined or null');
    }

}