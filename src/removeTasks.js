export function removeTasks(selectedList){
    if(selectedList.task){
        selectedList.tasks = selectedList.tasks.filter((task)=> task.completed !== true)
    }
}