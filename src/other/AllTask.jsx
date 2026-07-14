import React from 'react'
import { useContext } from 'react'
import { AuthContext } from '../context/AuthProvider'

const AllTask = () => {

  const {userData} = useContext(AuthContext)
  console.log(userData.employees)


  return (
    <div className='h-35 w-full border-2 border-white rounded-2xl flex justify-between items-center p-2 flex-nowrap flex-col overflow-y-auto scrollbar-none gap-2'>
        
        <div className='border-2 border-white rounded-2xl h-10 w-full shrink-0 flex justify-between items-center px-4'>
            <h1>Users</h1>
            <h1>Task</h1>
            <h1>Status</h1>
        </div>

        <div className='border-2 border-white rounded-2xl h-17 w-full shrink-0 flex justify-start items-center flex-col p-2 gap-4 overflow-y-auto scrollbar-none'>

          {userData.employees.map((elem) => {
            return elem.tasks.map((e, idx) => {
              return (
                  <div key={idx} className='h-12 w-full border-2 border-white rounded-2xl shrink-0 flex justify-between items-center px-4 overflow-x-auto scrollbar-none gap-4'>
                    <h1 className='shrink-0'>{elem.email}</h1>
                    <h1 className='shrink-0'>{e.taskTitle}</h1>
                    <h1 className='shrink-0'>{e.active == true ? 'Accepted' : e.completed == true ? 'Completed' : e.failed == true ? 'Failed' : e.newTask == true ? 'New Task' : 'Error'}</h1>
                  </div>
              )
            })
          })}
              
        </div>

    </div>
  )
}

export default AllTask