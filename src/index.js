// Selection of DOM elements
const inboxLink = document.querySelector('[inbox-list]')
const todayLink = document.querySelector('[today-list]')
const weeklyLink = document.querySelector('[weekly-list]')
const createNewProjectBtn = document.querySelector('[create-new-project-btn]')
const clearFormProject = document.querySelector('[clear-project-btn]')
const createProjectForm = document.querySelector('[create-project-form]')
const addProjectBtn = document.querySelector('[add-project-btn]')
const addProjectInput = document.querySelector('[add-project-input]')
const projectList = document.querySelector('[projects-list]')
const dataNewListForm = document.querySelector('[data-new-list-form]')
const dataNewListInput = document.querySelector('[data-new-list-input]')
const projectTitleList = document.querySelector('.task-list-title')
const projectTasksList = document.querySelector('[data-lists]')
const bodyProjectLists = document.querySelector('[tasks-list-container]')
const taskTemplate = document.getElementById('task-template')
const checkboxInput = document.querySelector('.task')

 
// Creation of variables needed
export let projectsLists = JSON.parse(localStorage.getItem('projects')) || []
export let show = (localStorage.getItem("show")==='true') || false
export let selectedList = JSON.parse(localStorage.getItem('selectedList')) || {}

// Show create new project form
createNewProjectBtn.addEventListener('click', showForm)

// Close Project form
clearFormProject.addEventListener('click', hideForm)

// Create new project
addProjectBtn.addEventListener('click', createNewProject)

// Show/delete Project
projectList.addEventListener('click', handleProjects)

// Add new task
dataNewListForm.addEventListener('submit', submitNewTask)

// toggle checked
bodyProjectLists.addEventListener('click', toggleChecked)


inboxLink.addEventListener('click', e=>{
    console.log(e);
})

todayLink.addEventListener('click', e=>{
    console.log(e);
})

weeklyLink.addEventListener('click', e=>{
    console.log(e);
})

function toggleChecked(e){
    if(e.target.id || e.target.htmlFor){
        console.log(e);
    }
}

function createNewProject(e){
    e.preventDefault()
    if(addProjectInput.value !== undefined && addProjectInput.value !==''){
        projectsLists.push({title:addProjectInput.value, id:new Date().getTime().toString()})
        renderAndSave()
    }
}

function handleProjects(e) {
    if(e.target.innerText === 'close'){
        projectsLists = projectsLists.filter((project)=>project.id !== e.target.id)
        console.log(projectsLists);
        renderAndSave()
    }else{
        checkSelectedList(e.target.id)
        handleSelectedList()    
    }
}

function submitNewTask(e){
    e.preventDefault()
    if(selectedList.tasks !== undefined){
        selectedList.tasks.push({title:dataNewListInput.value, completed:false, id:new Date().getTime().toString()})
    }else{
        selectedList.tasks = []
        selectedList.tasks[0]={title:dataNewListInput.value, completed:false, id:new Date().getTime().toString()}
    }
    renderTasks()
    renderAndSave()
}

function handleSelectedList(){
    renderProjects()
    let selectedProjectDiv = document.getElementById(`${selectedList.id}`)
    if(selectedProjectDiv){
        selectedProjectDiv.style.backgroundColor = 'rgb(2, 115, 115)' 
        projectTitleList.innerText = selectedList.title
        renderTasks()
        save()
    }
}

function checkSelectedList(id){
    projectsLists.forEach((project)=>{
        if(id === project.id){
            selectedList = project;
        }
    })
}

function showForm() {
    createProjectForm.classList='form show'
}

function hideForm(){
    addProjectInput.value=''
    createProjectForm.className='form'
}

function renderTasks(){
    projectTasksList.innerText=''
    if(selectedList.tasks !== undefined){
        selectedList.tasks.forEach((task)=>{
            const taskElement = document.importNode(taskTemplate.content, true)
            const checkbox = taskElement.querySelector('input')
            checkbox.id=task.id
            checkbox.checked = task.completed
            const label = taskElement.querySelector('label')
            label.htmlFor = task.id
            label.append(task.title)
            projectTasksList.appendChild(taskElement)
        })
    }
}

function renderProjects(){
    projectList.innerText=''
    projectsLists.map((project)=>{
        const singleProjectList = document.createElement('div')
        singleProjectList.id=project.id
        singleProjectList.className = 'single-project'
        const leftSide = document.createElement('div')
        leftSide.className='left-side'
        leftSide.id = project.id
        const spanIcon = document.createElement('span')
        spanIcon.id = project.id
        spanIcon.innerText = 'list'
        spanIcon.classList='material-symbols-outlined edit'
        const projectTitle = document.createElement('p')
        projectTitle.innerText = project.title
        projectTitle.id = project.id
        const rightSide = document.createElement('div')
        rightSide.className='right-side'
        rightSide.id = project.id
        const spanIconClose = document.createElement('span')
        spanIconClose.id = project.id
        spanIconClose.innerText = 'close'
        spanIconClose.classList='material-symbols-outlined edit close'
        leftSide.appendChild(spanIcon)
        leftSide.appendChild(projectTitle)
        rightSide.appendChild(spanIconClose)
        singleProjectList.appendChild(leftSide)
        singleProjectList.appendChild(rightSide)
        projectList.appendChild(singleProjectList)
    })
}

function render(){
    renderProjects()
    handleSelectedList()
    hideForm()
    dataNewListInput.value=''
}

function save(){
    localStorage.setItem('projects', JSON.stringify(projectsLists))
    localStorage.setItem('selectedList', JSON.stringify(selectedList))
}

function renderAndSave(){
    render()
    save()
}

render()