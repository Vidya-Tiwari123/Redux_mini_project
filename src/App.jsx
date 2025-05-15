import React from 'react'
import AddTodo from './components/AddTodo.jsx'
import Todos from './components/Todo.jsx'

function App() {
  return (
    <>
      <h1 className='flex justify-center text-4xl font-bold p-4'>Todo App</h1>
      <AddTodo />
      <Todos />
    </>
  )
}

export default App
