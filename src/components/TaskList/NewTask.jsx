import React, { useState } from 'react'
import { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const NewTask = (props) => {
  const {userData, setUserData} = useContext(AuthContext)
    
      const tempObj = userData.employees.find((elem) => {
          return (
              elem.email == props.email
          )
      })
    
      console.log(tempObj)

      const id = userData.employees.findIndex((elem) => {
        return (
          elem == tempObj
        )
      })

      console.log(id)
  
  
  
    return (
  
      <div className='h-87 w-[100%] border-2 border-white  rounded-2xl overflow-x-auto p-5 flex gap-4 scrollbar-none'>
        {tempObj.tasks.map((elem, idx) => {
          if(elem.newTask == true) 
            return (
              <div key={idx} className='border-2 border-white rounded-2xl w-[100%] flex flex-col justify-center items-center p-2 gap-4 shrink-0 bg-yellow-200'>
  
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
                <div onClick={(e) => {
                  const obj = {...userData}

                  obj.employees[id].tasks[idx].newTask = false;
                  obj.employees[id].tasks[idx].active = true;
                  
                  setUserData(obj)
                  localStorage.setItem("employees", JSON.stringify(obj.employees))
                  console.log(userData.employees[id].tasks[idx].newTask)
                }} className='h-10 w-30 border-2 border-white rounded-2xl text-center bg-green-400'><button>Click to Accept</button></div>
                        
              </div>
            )  
        })}
      </div>  
      
    )
}

export default NewTask