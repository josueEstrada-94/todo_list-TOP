import pencil from '../assests/pencil.svg';
import { fillOutEditForm } from './taskEdition'

export function createEditIcon(task) {
    const editIcon = document.createElement('img');
    editIcon.src = pencil;
    editIcon.setAttribute('class', 'edit-icon');

    editIcon.addEventListener('click', (e) => {
        if (task) {
            fillOutEditForm(task);
        } else {
            console.error('Book is undefined or null')
        }
    });
    return editIcon;
}