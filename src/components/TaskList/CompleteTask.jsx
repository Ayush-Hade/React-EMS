import React from 'react'
import { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const CompleteTask = (props) => {
  const {userData} = useContext(AuthContext)
    
      const tempObj = userData.employees.find((elem) => {
          return (
              elem.email == props.email
          )
      })
    
      console.log(tempObj)
  
  
  
  
    return (
  
      <div className='h-75 w-85 border-2 border-white  rounded-2xl overflow-x-auto p-4 flex gap-4 scrollbar-none'>
        {tempObj.tasks.map((elem, idx) => {
          if(elem.completed == true) 
            return (
              <div key={idx} className='border-2 border-white rounded-2xl h-65 w-65 flex flex-col justify-center items-center p-4 gap-4 shrink-0 bg-green-300'>
  
                <div className='h-10 w-full border-2 border-white flex justify-between items-center rounded-2xl px-4'>
                  <h3 className='border-2 border-white bg-red-500 rounded-2xl px-2 text-black'>{elem.category}</h3>
                  <h5>{elem.taskDate}</h5>
                </div>
                <div className='h-10 w-full border-2 border-white flex justify-between items-center rounded-2xl px-4'>
                  <h1>{elem.taskTitle}</h1>
                </div>
                <div className='h-40 w-full border-2 border-white flex justify-between items-center rounded-2xl px-4'>
                  <h5>{elem.taskDescription}</h5>
                </div>
                        
              </div>
            )  
        })}
      </div>  
      
    )
}

export default CompleteTask