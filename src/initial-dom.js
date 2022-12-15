import { blankProjectLoad } from "./blank-project-load";

export function initialDom(){

    const contentDiv = document.getElementById('content')
    const heading = document.createElement("h1")
    heading.textContent='ToDo WebApp'
    contentDiv.appendChild(heading)

    const projectsInfoDiv = document.createElement("div")
    projectsInfoDiv.textContent = blankProjectLoad().projectTitle
    contentDiv.appendChild(projectsInfoDiv)
}