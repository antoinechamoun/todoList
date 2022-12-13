// import Project from "./Project"
// import Todo from "./Todo"
// import { compareAsc, format } from 'date-fns'

export const projectsList = JSON.parse(localStorage.getItem('projects')) || []
console.log(projectsList);
export let show = localStorage.getItem("show") || false
// const washDog = Todo("Wash my dog", "clean", format(new Date(2022, 3, 2), 'dd.MM.yyyy'), "high")
// console.log(washDog);
// const todayList = Object.create(Project)
// todayList.name='today'

// todayList.addTodo(washDog)
// console.log(todayList);

// todayList.removeTodo(washDog)
// console.log(todayList);

// projectsList.push(todayList)
const Sidebar = document.createElement("div")
Sidebar.className = 'sidebar'

const notifications = document.createElement("ul")
notifications.className ="notifications"
const options = ['Inbox', 'Today', 'This week']


options.forEach((item, id)=>{
    const option = document.createElement("div")
    const liOption = document.createElement("li")
    option.className = 'line-option'
    const inboxLogo = document.createElement("span")
    inboxLogo.className="material-symbols-outlined edit"
    
    if( id === 0){
        inboxLogo.innerText='upcoming'
    }else if(id === 1){
        inboxLogo.innerText='inbox'
    }else if(id === 2){
        inboxLogo.innerText='calendar_view_week'
    }

    liOption.className = 'menu'
    liOption.appendChild(inboxLogo)
    const optionText = document.createElement('p')
    optionText.className='option-text'
    optionText.innerText=item
    liOption.appendChild(optionText)
    notifications.appendChild(liOption)

})

const projectsDiv = document.createElement("div")
projectsDiv.className='projects-list'

const projectList = document.createElement('div')
projectList.className = 'project-item-list'

const projects = document.createElement("h1")
projects.innerText = "Projects"
projects.className = "project-title"
projectsDiv.appendChild(projects)


projectsList.forEach((item, id)=>{
    const singleProject = document.createElement('div')
    singleProject.className='single-project'

    const left = document.createElement("div")
    left.className = 'left-side'
    
    const right = document.createElement('div')
    right.className = 'right-side'
    const projectItem = document.createElement("span")
    projectItem.className ='material-symbols-outlined edit'
    projectItem.innerText = 'list'

    const projectName = document.createElement("p")
    projectName.innerText=item.name

    const projectClose = document.createElement("span")
    projectClose.id = id
    projectClose.className ='material-symbols-outlined edit close'
    projectClose.innerText = 'close'


    left.appendChild(projectItem)
    left.appendChild(projectName)
    right.appendChild(projectClose)
    singleProject.appendChild(left)
    singleProject.appendChild(right)
    projectList.appendChild(singleProject)
})
projectsDiv.appendChild(projectList)

const formProject = document.createElement("div")
console.log(show + '1');
formProject.className= show ? 'form show':'form'
console.log(show + '2');
formProject.innerHTML=`
<input type='text' class='project-name'/>
<button type='button' class='add-btn'>Create</button>
`

const addProject = document.createElement("div")
addProject.className='new-project'
addProject.innerHTML=`
<span class='material-symbols-outlined edit'>add</span>
<p>Add Project</p>
`

Sidebar.appendChild(notifications)
Sidebar.appendChild(projectsDiv)
Sidebar.appendChild(formProject)
Sidebar.appendChild(addProject)


export default Sidebar