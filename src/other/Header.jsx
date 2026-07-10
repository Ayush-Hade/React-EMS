import React from 'react'
import Login from '../components/Auth/Login'
import { useNavigate, Navigate } from 'react-router-dom'
import "remixicon/fonts/remixicon.css";

const Header = (props) => {

  const navigate = useNavigate();
  return (
    <div className='h-15 w-full border-2 border-white rounded-2xl flex justify-between items-center px-4'>
        <div>
            <h2>Hello</h2>
            <h1>{props.email} ✌️</h1>
        </div>

        <div className='flex gap-10'>
            <button onClick={() => {
              navigate('/')
            }} className='border-2 border-white bg-red-500 text-black w-fit p-2 rounded-2xl'>Log Out</button> 
        </div>
        
    </div>
  )
}

export default Header