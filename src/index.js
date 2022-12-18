import { endOfWeek, format, startOfWeek } from "date-fns";
// eslint-disable-next-line import/no-cycle
import { removeCompleted } from "./removeCompleted";

// Selection of DOM elements
const inboxLink = document.querySelector("[inbox-list]");
const todayLink = document.querySelector("[today-list]");
const weeklyLink = document.querySelector("[weekly-list]");
const createNewProjectBtn = document.querySelector("[create-new-project-btn]");
const clearFormProject = document.querySelector("[clear-project-btn]");
const createProjectForm = document.querySelector("[create-project-form]");
const addProjectBtn = document.querySelector("[add-project-btn]");
const addProjectInput = document.querySelector("[add-project-input]");
const projectList = document.querySelector("[projects-list]");
const dataNewListForm = document.querySelector("[data-new-list-form]");
const dataNewListInput = document.querySelector("[data-new-list-input]");
const projectTitleList = document.querySelector(".task-list-title");
const projectTasksList = document.querySelector("[data-lists]");
const bodyProjectLists = document.querySelector("[tasks-list-container]");
const taskTemplate = document.getElementById("task-template");
const removeTasksBtn = document.querySelector("[remove-completed]");

// Creation of variables needed
// eslint-disable-next-line import/no-mutable-exports
export let projectsLists = JSON.parse(localStorage.getItem("projects")) || [];
export const show = (localStorage.getItem("show") === "true") || false;
// eslint-disable-next-line import/no-mutable-exports
export let selectedList = JSON.parse(localStorage.getItem("selectedList")) || {};

// Show create new project form
// eslint-disable-next-line no-use-before-define
createNewProjectBtn.addEventListener("click", showForm);

// Close Project form
// eslint-disable-next-line no-use-before-define
clearFormProject.addEventListener("click", hideForm);

// Create new project
// eslint-disable-next-line no-use-before-define
addProjectBtn.addEventListener("click", createNewProject);

// Show/delete Project
// eslint-disable-next-line no-use-before-define
projectList.addEventListener("click", handleProjects);

// Add new task
// eslint-disable-next-line no-use-before-define
dataNewListForm.addEventListener("submit", submitNewTask);

// toggle checked
// eslint-disable-next-line no-use-before-define
bodyProjectLists.addEventListener("click", toggleChecked);

// Remove completed tasks
removeTasksBtn.addEventListener("click", removeCompleted);

inboxLink.addEventListener("click", (e) => {
  console.log(e);
});

todayLink.addEventListener("click", () => {
  projectTasksList.innerText = "";
  if (projectsLists) {
    // eslint-disable-next-line array-callback-return
    projectsLists.map((project) => {
      if (project.tasks) {
        // eslint-disable-next-line array-callback-return
        project.tasks.map((task) => {
          if (task.date === format(new Date(), "yyyy-dd-MM")) {
            const taskElement = document.importNode(taskTemplate.content, true);
            const checkbox = taskElement.querySelector("input");
            checkbox.id = task.id;
            checkbox.checked = task.completed;
            const label = taskElement.querySelector("label");
            label.htmlFor = task.id;
            label.append(task.title);
            projectTasksList.appendChild(taskElement);
          }
        });
      }
    });
  }
});

weeklyLink.addEventListener("click", () => {
  const startOfTheWeek = startOfWeek(new Date(), { weekStartsOn: 1 }).toLocaleDateString().split("/").reverse();
  const endOfTheWeek = endOfWeek(new Date(), { weekStartsOn: 1 }).toLocaleDateString().split("/").reverse();
  projectTasksList.innerText = "";
  if (projectsLists) {
    // eslint-disable-next-line array-callback-return
    projectsLists.map((project) => {
      if (project.tasks) {
        // eslint-disable-next-line array-callback-return
        project.tasks.map((task) => {
          const temp = task.date.split("-");
          // eslint-disable-next-line max-len
          if (temp[0] === endOfTheWeek[0] && temp[2] === endOfTheWeek[2] && +temp[1] <= +endOfTheWeek[1] && +temp[1] >= +startOfTheWeek[1]) {
            const taskElement = document.importNode(taskTemplate.content, true);
            const checkbox = taskElement.querySelector("input");
            checkbox.id = task.id;
            checkbox.checked = task.completed;
            const label = taskElement.querySelector("label");
            label.htmlFor = task.id;
            label.append(task.title);
            projectTasksList.appendChild(taskElement);
          }
        });
      }
    });
  }
});

function toggleChecked(e) {
  if (e.target.id || e.target.htmlFor) {
    selectedList.tasks.forEach((task) => {
      if (task.id === e.target.id) {
        // eslint-disable-next-line no-param-reassign
        task.completed = !task.completed;
        // eslint-disable-next-line no-use-before-define
        save();
      }
    });
  }
}

function createNewProject(e) {
  e.preventDefault();
  if (addProjectInput.value !== undefined && addProjectInput.value !== "") {
    projectsLists.push({ title: addProjectInput.value, id: new Date().getTime().toString() });
    // eslint-disable-next-line no-use-before-define
    renderAndSave();
  }
}

function handleProjects(e) {
  if (e.target.innerText === "close") {
    projectsLists = projectsLists.filter((project) => project.id !== e.target.id);
    console.log(projectsLists);
    // eslint-disable-next-line no-use-before-define
    renderAndSave();
  } else {
    // eslint-disable-next-line no-use-before-define
    checkSelectedList(e.target.id);
    // eslint-disable-next-line no-use-before-define
    handleSelectedList();
  }
}

function submitNewTask(e) {
  e.preventDefault();
  if (selectedList.tasks !== undefined) {
    selectedList.tasks.push({
      title: dataNewListInput.value, date: format(new Date(), "yyyy-dd-MM"), completed: false, id: new Date().getTime().toString(),
    });
  } else {
    selectedList.tasks = [];
    selectedList.tasks[0] = {
      title: dataNewListInput.value, date: format(new Date(), "yyyy-dd-MM"), completed: false, id: new Date().getTime().toString(),
    };
  }
  // eslint-disable-next-line no-use-before-define
  renderTasks();
  // eslint-disable-next-line no-use-before-define
  renderAndSave();
}

function handleSelectedList() {
  // eslint-disable-next-line no-use-before-define
  renderProjects();
  const selectedProjectDiv = document.getElementById(`${selectedList.id}`);
  if (selectedProjectDiv) {
    bodyProjectLists.classList = "body active";
    selectedProjectDiv.style.backgroundColor = "rgb(2, 115, 115)";
    projectTitleList.innerText = selectedList.title;
    // eslint-disable-next-line no-use-before-define
    renderTasks();
    // eslint-disable-next-line no-use-before-define
    save();
  }
}

function checkSelectedList(id) {
  projectsLists.forEach((project) => {
    if (id === project.id) {
      selectedList = project;
    }
  });
}

function showForm() {
  createProjectForm.classList = "form show";
}

function hideForm() {
  addProjectInput.value = "";
  createProjectForm.className = "form";
}

export function renderTasks() {
  projectTasksList.innerText = "";
  if (selectedList.tasks !== undefined) {
    selectedList.tasks.forEach((task) => {
      const taskElement = document.importNode(taskTemplate.content, true);
      const checkbox = taskElement.querySelector("input");
      checkbox.id = task.id;
      checkbox.checked = task.completed;
      const label = taskElement.querySelector("label");
      label.htmlFor = task.id;
      label.append(task.title);
      projectTasksList.appendChild(taskElement);
    });
  }
}

function renderProjects() {
  projectList.innerText = "";
  // eslint-disable-next-line array-callback-return
  projectsLists.map((project) => {
    const singleProjectList = document.createElement("div");
    singleProjectList.id = project.id;
    singleProjectList.className = "single-project";
    const leftSide = document.createElement("div");
    leftSide.className = "left-side";
    leftSide.id = project.id;
    const spanIcon = document.createElement("span");
    spanIcon.id = project.id;
    spanIcon.innerText = "list";
    spanIcon.classList = "material-symbols-outlined edit";
    const projectTitle = document.createElement("p");
    projectTitle.innerText = project.title;
    projectTitle.id = project.id;
    const rightSide = document.createElement("div");
    rightSide.className = "right-side";
    rightSide.id = project.id;
    const spanIconClose = document.createElement("span");
    spanIconClose.id = project.id;
    spanIconClose.innerText = "close";
    spanIconClose.classList = "material-symbols-outlined edit close";
    leftSide.appendChild(spanIcon);
    leftSide.appendChild(projectTitle);
    rightSide.appendChild(spanIconClose);
    singleProjectList.appendChild(leftSide);
    singleProjectList.appendChild(rightSide);
    projectList.appendChild(singleProjectList);
  });
}

function render() {
  renderProjects();
  handleSelectedList();
  hideForm();
  dataNewListInput.value = "";
}

export function save() {
  localStorage.setItem("projects", JSON.stringify(projectsLists));
  localStorage.setItem("selectedList", JSON.stringify(selectedList));
}

function renderAndSave() {
  render();
  save();
}

render();
