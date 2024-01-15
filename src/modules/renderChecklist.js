export function renderChecklistItems(task) {
    const checklistContainer = document.querySelector('.todo-ul');

    // Clear existing checklist items
    checklistContainer.innerHTML = '';

    if (task.checklist && task.checklist.length > 0) {
        task.checklist.forEach(item => {
            const li = document.createElement('li');
            li.textContent = item;
            checklistContainer.appendChild(li);
        });
    }
}
