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
    taskList.forEach(task => {
        const daysUntilDue = differenceInDays(parseISO(task.dueDate), new Date());
        if (daysUntilDue === 1) {
            console.log(`Reminder: The task "${task.title}" expired tomorrow!.`);
        }
    });
}

export function displayCurrentDate() {
    const currentDate = getCurrentDate();
    document.getElementById('current-date').textContent = currentDate;
}