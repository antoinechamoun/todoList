function Todo(title, description, dueDate, priority){
    return{
        title, 
        description, 
        dueDate, 
        priority, 
    }
}

let asd = Object.create(Todo)
asd.title='asd'
console.log(asd); 


export default Todo