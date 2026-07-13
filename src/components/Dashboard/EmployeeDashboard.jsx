import React from 'react'
import Header from '../../other/Header'
import TaskListNumbers from '../../other/TaskListNumbers'
import TaskList from '../TaskList/TaskList'
import { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const EmployeeDashboard = (props) => {

  return (
    <div className='min-h-screen w-full border-2 border-white rounded-2xl flex flex-col p-4 gap-4'>
        <Header email={props.email}/>
        <TaskListNumbers email={props.email}/>
        <TaskList email={props.email}/>
    </div>
  )
}

export default EmployeeDashboard