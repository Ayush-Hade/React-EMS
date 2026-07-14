import React from 'react'
import AcceptTask from './AcceptTask';
import CompleteTask from './CompleteTask';
import FailedTask from './FailedTask';
import NewTask from './NewTask';

const TaskList = (props) => {

  


  return (
    <div className='h-97 w-full border-2 border-white rounded-2xl flex justify-start items-center px-4 overflow-y-auto scrollbar-none flex-wrap gap-4 py-5.5'>
        
        <AcceptTask email={props.email}/>
        <CompleteTask email={props.email}/>
        <FailedTask email={props.email}/>
        <NewTask email={props.email}/>
        
    </div>
  )
}

export default TaskList