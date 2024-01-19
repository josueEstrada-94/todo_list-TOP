export function addItemToChecklist () {
    console.log('THE ADDING FUNCTION IS EXECUTING')
    
    const addItem = document.getElementById('add-to-checklist').value;

    if (addItem !== "") {
        const ul = document.querySelector('.todo-ul');
        
        const li = document.createElement('li');
        li.textContent = addItem;
        const span = document.createElement('span');
        span.className = 'remove-checklist-item';
        const removeIcon = document. createTextNode("\u00D7");

        li.appendChild(span);
        span.appendChild(removeIcon);
        ul.appendChild(li);
        document.getElementById('add-to-checklist').value = "";
        console.log('addItm CONTENT:', addItem);
        console.log('content of the array:', li);
        console.log('array:', ul);
        
    } else {return};
}