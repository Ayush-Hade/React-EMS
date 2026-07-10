import React from 'react'
import Header from '../../other/Header'
import CreateTask from '../../other/CreateTask'
import AllTask from '../../other/AllTask'
import { Link } from 'react-router-dom'
import DeleteEmployees from '../../pages/DeleteEmployees'
import "remixicon/fonts/remixicon.css";
import { useNavigate, Navigate } from 'react-router-dom'


const AdminDashboard = (props) => {

  const navigate =useNavigate()

  

  return (
    <div className='h-full w-full border-2 border-white rounded-2xl flex flex-col p-4 gap-4'>
        <div className='flex gap-4'>
          <Header email={props.email}/>
          <Link className='border-2 border-white rounded-2xl bg-green-300 text-black text-sm font-bold text-center pt-2' to='/create'>Add Employees</Link>
          <Link className='border-2 border-white rounded-2xl bg-green-300 text-black text-sm font-bold text-center pt-2' to='/delete'>Delete Employees</Link>
          <Link className='border-2 border-white rounded-2xl bg-green-300 text-black text-sm font-bold text-center pt-2' to='/performance'>Performance Check</Link>
        </div>
        <CreateTask/>
        <AllTask />
    </div>
  )
}

export default AdminDashboard
