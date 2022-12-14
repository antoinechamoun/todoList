const Project = {
    name:"",
    id:0,
    todoList:[],

    addTodo(todo) {
        this.todoList.push(todo)
    },
    
    removeTodo(idx){
        this.todoList.forEach((_, id)=>{
            if(id === idx){
                this.todoList.splice(id, 1)
            }
        })
    }
}

export default Project