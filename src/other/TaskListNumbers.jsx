import React from 'react'
import { useContext } from 'react'
import { AuthContext } from '../context/AuthProvider'

const TaskListNumbers = (props) => {

  const {userData} = useContext(AuthContext)

  const tempObj = userData.employees.find((elem) => {
      return (
          elem.email == props.email
      )
  })

  console.log(tempObj)

  let active = 0;
  let completed = 0
  let failed = 0;
  let newtask = 0;

  tempObj.tasks.forEach((elem) => {
    if(elem.active) active ++;
    if(elem.completed) completed ++;
    if(elem.failed) failed ++;
    if(elem.newTask) newtask ++;
  });

  console.log(active, completed, failed, newtask)

  

  return (
    <div className='h-35 w-full border-2 border-white rounded-2xl flex gap-4 justify-center flex-nowrap overflow-x-auto items-center px-4 scrollbar-none'>

        <div className='border-2 border-white rounded-2xl w-50 py-7 text-center shrink-0 bg-orange-300'>
            <h1>{active}</h1>
            <h2>Accept Task</h2>
        </div>
        <div className='border-2 border-white rounded-2xl w-50 py-7 text-center shrink-0 bg-green-300'>
            <h1>{completed}</h1>
            <h2>Completed Task</h2>
        </div>
        <div className='border-2 border-white rounded-2xl w-50 py-7 text-center shrink-0 bg-red-400'>
            <h1>{failed}</h1>
            <h2>Failed Task</h2>
        </div>
        <div className='border-2 border-white rounded-2xl w-50 py-7 text-center shrink-0 bg-yellow-200'>
            <h1>{newtask}</h1>
            <h2>New Task</h2>
        </div>
        
    </div>
  )
}

export default TaskListNumbers