import Header from "./Header"
import Footer from "./Footer"
import Sidebar from "./Sidebar"
import Project from "./Project"
import Todo from "./Todo"
import { projectsList } from "./Sidebar"
import { compareAsc, format } from 'date-fns'
import { show } from "./Sidebar"

// div content
const content = document.getElementById('content')

// container of all sections
const container = document.createElement("div")
container.className='container'

// append children to container
container.appendChild(Header)
container.appendChild(Footer)
container.appendChild(Sidebar)

// append children to content
content.appendChild(container)

// functionality
const projectClose = document.querySelector('.close')

function createProject(){
    if(formProject.value!==''){
        const prj = Object.create(Project)
        prj.name=formProject.value
        projectsList.push(prj)
        formProject.value=''
        localStorage.setItem("show", false)
        localStorage.setItem('projects', JSON.stringify(projectsList))
        console.log(prj);
        location.reload()
    }
}

function removeProject(e){
    const obj = projectsList[e.srcElement.id]
    console.log(obj);
    obj.removeTodo(e.srcElement.id);
    location.reload()
}

function showHiddenForm(){
    show=!show
    localStorage.setItem("show", show)
    location.reload()
}

const formProject = document.querySelector('.project-name')
const addBtn=document.querySelector('.add-btn')

addBtn.addEventListener('click', createProject)
projectClose && projectClose.addEventListener('click', removeProject)

const showForm = document.querySelector('.new-project')
showForm && showForm.addEventListener('click', showHiddenForm)