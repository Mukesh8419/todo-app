import React from 'react'
import TodoItem from './TodoItem'
import todosData from '../Data/todosData'
// function TodoApp() {
//      const todoItems=todosData.map(item=><TodoItem key={item.id} item={item}/>)
//  return(
//      <div className="todo-list">
// {todoItems}
//         </div>

//  )

    
// }



//for class based component
class TodoApp extends React.Component{
     constructor(){
          super()
          this.state={
               todos:todosData
          }
          this.handleChange=this.handleChange.bind(this);
     }
     handleChange(id){
          // console.log("Changed",id);
          this.setState(prevState=>{
               const updatedTodos=prevState.todos.map(todo=>{
                    if(todo.id===id){
                         todo.completed=!todo.completed
                    }
                    return todo
               })
               return{
                    todos: updatedTodos
               }
          })
     }
     render() {
          const todoItems=this.state.todos.map(item=><TodoItem key={item.id} item={item}
          handleChange={this.handleChange}/>)
          return (
                <div className="todo-list">
                {todoItems}
                </div>
          );
     }
}

export default TodoApp;