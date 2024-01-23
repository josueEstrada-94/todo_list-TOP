import { format, parseISO, compareAsc, isToday, differenceInDays } from "date-fns";

export function getCurrentDate() {
    return format(new Date(), 'MMMM do, yyyy');
}

export function formatDueDate(dueDate) {
    return format(parseISO(dueDate), 'MMMM do, yyyy');
    
}

export function sortTasksByDueDate(taskList) {
    return taskList.sort((a,b) => compareAsc(parseISO(a.dueDate), parseISO(b.dueDate)));
}

export function filterTasksByToday(taskList) {
    return taskList.filter(task => isToday(parseISO(task.dueDate)));
}

export function checkTaskReminders(taskList) {
    console.log('The Reminder');
    taskList.forEach(task => {
        const daysUntilDue = differenceInDays(parseISO(task.dueDate), new Date());
        if (daysUntilDue <= 1) {
            alert(`Reminder: The task "${task.title}" expired tomorrow!.`);
        }
    });
}

export function displayCurrentDate() {
    console.log('Displaying current date...');
    const currentDate = getCurrentDate();
    document.getElementById('current-date').textContent = currentDate;
}