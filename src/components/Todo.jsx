import React from "react";
import { useDispatch, useSelector } from "react-redux";
import deleteicon from "../assets/icons8-delete-30.svg";
import { removeTodo } from "../features/todo/todoSlice";


function Todos(){
   const todos =  useSelector(state=>state.todo.todos)
   const dispatch  = useDispatch()

    return(
        <>
     <ul className="list-none p-5">
     {todos.map((todo)=>(
            <li 
            className="mt-8 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded-lg"
            key={todo.id}>
                
               <div className="text-white"> {todo.text}</div>
            <button onClick={()=>dispatch(removeTodo(todo.id))}
                className="text-white bg-red-500 border-0 py-1 px-4 focus:outline-none"
                > <img src={deleteicon} alt="Delete" className="w-5 h-5" /></button>
            
            </li>
        ))}
     </ul>
        </>
    )
}
export default Todos