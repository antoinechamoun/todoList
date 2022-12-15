let toDoArray = []

export const createToDo = (title, desc, dueDate, priority, checklist) => {
    toDoArray.push({title, desc, dueDate, priority, checklist})
    return{title, desc, dueDate, priority, checklist}
}