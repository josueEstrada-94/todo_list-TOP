export function renderChecklistItems(task) {
    console.log('Rendering checklist items for task:', task);
    const checklistContainer = document.querySelector('.todo-ul');

    while (checklistContainer.firstChild) {
        checklistContainer.removeChild(checklistContainer.firstChild);
    }

    if (task.checklist && task.checklist.length > 0) {
        task.checklist.forEach(item => {
            console.log('li content:', item);
            const li = document.createElement('li');
            li.innerHTML = item;
            
            checklistContainer.appendChild(li);
            console.log('checklist container:', checklistContainer);
            console.log('checklist content:', task.checklist);
        });
    }
}
