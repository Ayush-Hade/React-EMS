import React, { useState } from 'react'
import { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const Login = ({loginHandler}) => {
  
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  

  return (
    <div className='h-120 w-100 border-2 border-white rounded-2xl'>
        <h1 className='text-center font-bold text-2xl mt-10'>Log In</h1>
        <form onSubmit={(e) => {
          e.preventDefault();
          console.log(email, password)
          loginHandler(email, password);
          setEmail('')
          setPassword('')
        }} className='flex flex-col justify-center items-center h-full w-full gap-4 px-4'>
            <input required value={email} onChange={(e) => {
              setEmail(e.target.value)
            }}
            className='border-2 border-white rounded-2xl w-full p-2 outline-none' type="email"  placeholder='Email'/>
            <input required value={password} onChange={(e) => {
              setPassword(e.target.value)
            }} className='border-2 border-white rounded-2xl w-full p-2 outline-none' type="text" placeholder='Password'/>
            <button className='border-2 border-white rounded-2xl w-full p-2 outline-none'>Log In</button>
        </form>
    </div>
  )
}

export default Login