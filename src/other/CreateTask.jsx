import React, { useState } from 'react'
import { getLocalStorage, setLocalStorage } from '../utils/localStorage'
import { useContext } from 'react'
import { AuthContext } from '../context/AuthProvider'

const CreateTask = () => {

  const [taskTitle, setTaskTitle] = useState('')  
  const [taskDate, setTaskDate] = useState('')
  const [email, setEmail] = useState('')
  const [category, setCategory] = useState('')
  const [taskDescription, setTaskDescription] = useState('')

  let {userData, setUserData} = useContext(AuthContext)


  return (
    <div className='h-90 w-full border-2 border-white rounded-2xl flex justify-between items-center px-4'>
        <div className='flex justify-center items-center '>
        <form onSubmit={async (e) => {

            e.preventDefault();

            if(userData.employees.find((elem) => elem.email == email)) {
                const {employees, admin} = getLocalStorage()
                const milgaya = employees.find((elem) => elem.email == email)
                let idx = employees.findIndex((elem) => elem.email == email)
                milgaya.tasks.push({taskTitle, taskDate, category, taskDescription, active:false, completed:false, failed:false, newTask:true})
                employees[idx] = milgaya
                localStorage.setItem("employees", JSON.stringify(employees))
                const obj = {...userData}
                obj.employees = employees
                setUserData(obj)
            }
            else alert("Invalid AssignTo")

            setTaskDate('')
            setTaskDate('')
            setTaskDescription('')
            setEmail('')
            setCategory('')
            setTaskTitle('')

        }} className='flex gap-10'>

            <div className='border-2 border-white h-80 w-140 rounded-2xl flex flex-col justify-center items-start p-4 ml-12'>
                <h5>Task Title</h5>
                <input required value={taskTitle} onChange={(e) => {
                    setTaskTitle(e.target.value)
                }} className='border-2 border-white h-10 w-full rounded-2xl p-1 px-2' type="text" placeholder='Make a UI design'/> <br />

                <h5>Date</h5>
                <input required value={taskDate} onChange={(e) => {
                    setTaskDate(e.target.value)
                }} className='border-2 border-white h-10 w-full rounded-2xl p-1 px-2' type="date" /> <br />

                <h5>Assign to</h5>
                <input required value={email} onChange={(e) => {
                    setEmail(e.target.value)
                }} className='border-2 border-white h-10 w-full rounded-2xl p-1 px-2' type="text" placeholder='Employee Name'/> <br />

                <h5>Category</h5>
                <input required value={category} onChange={(e) => {
                    setCategory(e.target.value)
                }} className='border-2 border-white h-10 w-full rounded-2xl p-1 px-2' type="text" placeholder='Design, Dev, etc'/>
            </div>

            <div className='border-2 border-white h-80 w-140 rounded-2xl flex flex-col justify-start items-start p-4'>
                <h5>Description</h5>
                <textarea required value={taskDescription} onChange={(e) => {
                    setTaskDescription(e.target.value)
                }}  className='border-2 border-white h-10 w-full rounded-2xl' name="" id=""></textarea> <br />

                <button className='border-2 border-white h-10 w-full rounded-2xl'>Create Task</button>
            </div>

        </form>
        </div>
    </div>
  )
}

export default CreateTask