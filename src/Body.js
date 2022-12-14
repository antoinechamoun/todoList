import Project from "./Project"
import Todo from "./Todo"
let project = Object.assign({}, Project)
project.name='today'
let wash = Object.create(Todo)
wash.title='wash'
let clean = Object.create(Todo)
clean.title='clean'
let workout = Object.create(Todo)
workout.title='workout'
project.todoList=[wash, clean, workout]

const Body = () =>{

const container = document.createElement('div')

container.innerHTML=`
    <div>
        <h1>${project.name}</h1>
        <div>
            <div class='todo-details'>
                ${project.todoList[0].title}
            </div>
        </div>
    </div>
`

return container
}

export default Body