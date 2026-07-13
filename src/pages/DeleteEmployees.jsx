import React, { useState } from 'react'
import { useContext } from 'react'
import { AuthContext } from '../context/AuthProvider'
import { useNavigate, Navigate } from 'react-router-dom'



const DeleteEmployees = () => {

  const navigate = useNavigate()    

  const [email, setEmail] = useState('')
  const [id, setId] = useState('')
  const [password, setPassword] = useState('')

  const {userData, setUserData} = useContext(AuthContext)
  const adminPass = userData.admin[0].password
  console.log(adminPass)
    
  return (
    <div className='h-full w-full border-2 border-white rounded-2xl flex justify-center items-center'>
        <div className='h-3/4 w-1/2 border-2 border-white rounded-2xl flex flex-col justify-center items-center gap-4 m-4'>
            <h1 className='text-center font-bold text-2xl'>Delete Employees</h1>
            <button onClick={(e) => navigate(-1)} className='h-1/12 w-[35%] md:w-[200px] rounded-2xl border-2 border-white'>Back</button>
            <div className='h-full w-full'>
                <form onSubmit={(e) => {
                    e.preventDefault();
                    if(password == adminPass) {
                        if(userData.employees.find((p) => p.email==email && p.id ==id)) {
                            const user = userData.employees.findIndex((p) => p.email==email && p.id ==id)
                            console.log(user);
                            const obj = {...userData}
                            obj.employees.splice(user, 1)
                            console.log(obj);
                            setUserData(obj);
                            localStorage.setItem("employees", JSON.stringify(obj.employees))
                        }
                        else alert("Invalid User")
                    }
                    else alert("Invalid Admin")
                }} className='flex flex-col h-full w-full gap-4 justify-center items-center p-4'>
                    <input value={email} onChange={(e) => {
                        setEmail(e.target.value)
                    }} className='w-full p-2 rounded-2xl border-2 border-white' required type="email" placeholder='Employee Email'/>
                    <input value={id} onChange={(e) => {
                        setId(e.target.value)
                    }} className='w-full p-2 rounded-2xl border-2 border-white' required type="number" placeholder='Employee ID'/>
                    <input value={password} onChange={(e) => {
                        setPassword(e.target.value)
                    }} className='w-full p-2 rounded-2xl border-2 border-white' required type="text" placeholder='Admin Password'/>
                    <button className='rounded-2xl border-2 border-white w-full h-1/12'>Delete Employee</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default DeleteEmployees