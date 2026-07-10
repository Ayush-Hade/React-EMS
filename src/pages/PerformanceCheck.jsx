import React, { useState } from 'react'
import { useContext } from 'react'
import { AuthContext } from '../context/AuthProvider'
import { useNavigate, Navigate } from 'react-router-dom'

const PerformanceCheck = () => {

  const {userData, setUserData} = useContext(AuthContext)

  const navigate = useNavigate();


  return (
    <div className='h-full w-full border-2 border-white rounded-2xl p-10 flex flex-col justify-center items-center gap-4'>
        <h1 className='text-center font-bold text-2xl border-2 border-white rounded-2xl px-2 h-12'>Total Employees : {userData.employees.length}</h1>
        <button onClick={(e) => {
            navigate(-1)
        }} className='border-2 border-white h-10 w-20 px-2 rounded-2xl'>Back</button>
        <div className='h-full w-full border-2 border-white rounded-2xl p-4 flex gap-4 flex-wrap overflow-y-auto scrollbar-none justify-center items-center'>
            {userData.employees.map((elem, idx) => {
                const tasks = elem.tasks.length
                const accepted = elem.tasks.filter((e) => e.active==true).length
                const notAccepted = elem.tasks.filter(e => e.newTask==true).length
                const failed = elem.tasks.filter(e => e.failed==true).length
                const completed = elem.tasks.filter(e => e.completed==true).length
                    return (
                        <div key={idx} className='h-100 lg:h-70 w-85 border-2 border-white rounded-2xl flex flex-col gap-4 p-4'>
                            <div className='flex gap-4 p-4 border-2 border-white rounded-2xl overflow-x-auto scrollbar-none flex-nowrap'>
                                <h4 className='shrink-0'>id : {elem.id}</h4>
                                <h4 className='shrink-0'>email : {elem.email}</h4>
                            </div>
                            <div className='flex gap-4 p-4 border-2 border-white rounded-2xl h-full flex-wrap'>
                                    <h4>Total Tasks : {tasks} </h4>
                                    <h4>Tasks Accepted : {accepted} </h4>
                                    <h4>Tasks Not Accepted : {notAccepted} </h4>
                                    <h4>Tasks Failed : {failed} </h4>
                                    <h4>Tasks Completed : {completed} </h4>
                            </div>
                            <div className='text-center border-2 border-white rounded-2xl'>Score : {(completed*10) + (accepted*5) + (notAccepted*2) - (failed*5)}</div>
                        </div>
                    )
            })}
        </div>
    </div>
  )
}

export default PerformanceCheck