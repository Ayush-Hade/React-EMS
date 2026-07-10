import React from 'react'
import { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'
import { useState } from 'react'

const AcceptTask = (props) => {

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

      const [work, setWork] = useState('');

  return (

    <div className='h-75 w-85 border-2 border-white  rounded-2xl overflow-x-auto p-4 flex gap-4 scrollbar-none'>
      {tempObj.tasks.map((elem, idx) => {
        if(elem.active == true) 
          return (
            <div key={idx} className='border-2 border-white rounded-2xl h-65 w-65 flex flex-col justify-center items-center p-4 gap-4 shrink-0 bg-orange-300'>

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

              <div className='h-18 w-full border-2 border-white rounded-2xl text-center p-1'>
                <form onSubmit={(e) => {
                    e.preventDefault();
                    if(work == '') {
                      const obj = {...userData}
                      obj.employees[id].tasks[idx].active = false;
                      obj.employees[id].tasks[idx].failed = true;
                      setUserData(obj)
                      localStorage.setItem("employees", JSON.stringify(obj.employees))
                    }
                    else {
                      const obj = {...userData}
                      obj.employees[id].tasks[idx].active = false;
                      obj.employees[id].tasks[idx].completed = true;
                      setUserData(obj)
                      localStorage.setItem("employees", JSON.stringify(obj.employees))
                    }
                }} className='flex flex-col gap-1 justify-center items-center'>
                  <input value = {work} onChange={(p) => {
                    setWork(p.target.value);
                  }} className='border-2 border-white rounded-2xl text-sm p-1 outline-none' type="text" placeholder='Submit Your Work Here !!!'/>
                  <button className=' w-20 border-2 border-white rounded-2xl px-2'>Submit</button>
                </form>
              </div>
              
                      
            </div>
          )  
      })}
    </div>  
    
  )
}

export default AcceptTask