import { selectedList, renderTasks, save } from "./index";

export function removeCompleted() {
    if (selectedList.tasks) {
        selectedList.tasks = selectedList.tasks.filter((task) => task.completed !== true);
        renderTasks();
        save();
    }
}
