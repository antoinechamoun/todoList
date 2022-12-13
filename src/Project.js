const Project = {
    name:"",
    list:[],
    todayList:[],
    weeklyList:[],
    inboxList:[],

    addTodo(todo) {
        this.list.push(todo)
    },
    
    removeTodo(idx){
        this.list.forEach((_, id)=>{
            if(id === idx){
                this.list.splice(id, 1)
            }
        })
    }
}

const today = Object.create(Project)
console.log(today);



export default Project