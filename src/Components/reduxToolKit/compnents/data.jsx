

import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteTodo, isToggle, updateTodo } from '../redux/todoSlice'




function DataTable() {

    const data=useSelector(state=>state.todo.todo)
    const dd=useSelector(state=>state.todo.toggle)
    console.log(data)
    console.log(dd)
    const dispatch=useDispatch()

const handleDelete=(id)=>{
dispatch(deleteTodo(id))
}

const handlec=()=>{
  dispatch(isToggle())
}



const HandleUpadate=(obj)=>{
  dispatch(updateTodo(obj))
  console.log(obj)
}

  return (
    <div>
{data&&data.length>0?data.map((val)=>{
return<div key={val.id}>
    <h4>{val.user}</h4>
    <button onClick={()=>handleDelete(val.id)}>delete</button>
    <button onClick={()=>HandleUpadate(val)}>Update</button>
  </div>
}):null}
    </div>
  )
}

export default DataTable