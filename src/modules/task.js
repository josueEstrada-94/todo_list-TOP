
export function Task(title, description, dueDate, priority, checklist) {
    return {
        title,
        description,
        dueDate,
        priority,
        checklist: checklist || [],
        id:  Math.floor(Math.random() * 100000000)
    };
}