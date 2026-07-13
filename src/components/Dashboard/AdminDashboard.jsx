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
    <div className='w-full max-w-7xl min-h-screen border-2 border-white rounded-2xl flex flex-col gap-6 p-4 md:p-6 mx-auto'>
        <div className='flex flex-wrap gap-3'>
          <Header email={props.email}/>
          <Link className='px-4 py-2 text-center rounded-xl bg-green-300 text-black font-semibold' to='/create'>Add Employees</Link>
          <Link className='px-4 py-2 text-center rounded-xl bg-green-300 text-black font-semibold' to='/delete'>Delete Employees</Link>
          <Link className='px-4 py-2 text-center rounded-xl bg-green-300 text-black font-semibold' to='/performance'>Performance Check</Link>
        </div>
        <CreateTask/>
        <AllTask />
    </div>
  )
}

export default AdminDashboard
