import React, { useState } from 'react'
import Header from '../other/Header'
import { useContext } from 'react'
import { AuthContext } from '../context/AuthProvider'
import { useNavigate, Navigate } from 'react-router-dom'

const CreateEmployees = (props) => {

  const navigate = useNavigate();    

  const {userData, setUserData} = useContext(AuthContext)
  console.log(userData)  

  const [id, setId] = useState('')  
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <div className='border-2 border-white rounded-2xl h-full w-full flex flex-col justify-center items-center gap-10'>
        <h1 className='text-center font-bold text-2xl mt-4'>Employee Creation</h1>
        <button className='border-2 border-white rounded-2xl h-10 w-40' onClick={() => {
            navigate(-1)
        }}>Back</button>
        <div className='border-2 border-white rounded-2xl h-100 w-[95%] sm:w-[500px] mb-4'>
            <form onSubmit={(e) => {
                e.preventDefault()
                const obj = {...userData}
                obj.employees.push({id, email, password, messages:[], tasks:[]})
                setUserData(obj)
                const okay = userData.employees
                localStorage.setItem("employees", JSON.stringify(okay))
                setId('')
                setEmail('')
                setPassword('')

            }} className='flex flex-col justify-center items-start h-full w-full px-2'>

                <h1 className='font-bold text-xl'>Employee ID</h1>
                <input required value={id} onChange={(p) => {
                    setId(p.target.value)
                }} className='border-2 border-white outline-none rounded-2xl w-full p-2 mt-2' type="number" placeholder='Create the ID'/> <br />
                <h1 className='font-bold text-xl'>Employee Email</h1>
                <input required value={email} onChange={(p) => {
                    setEmail(p.target.value)
                }} className='border-2 border-white outline-none rounded-2xl w-full p-2 mt-2' type="email" placeholder='Create the Email'/> <br />
                <h1 className='font-bold text-xl'>Employee Password</h1>
                <input required value={password} onChange={(p) => {
                    setPassword(p.target.value)
                }} className='border-2 border-white outline-none rounded-2xl w-full p-2 mt-2' type="text" placeholder='Create the Password'/> <br />

                <button className='border-2 border-white rounded-2xl h-10 w-40'>Create Employee</button>
            </form>
        </div>
    </div>
  )
}

export default CreateEmployees