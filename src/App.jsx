import React, { useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { useContext } from 'react'
import { AuthContext } from './context/AuthProvider'
import { Routes, Route } from 'react-router-dom'
import CreateEmployees from './pages/CreateEmployees'
import { useNavigate, Navigate } from 'react-router-dom'
import PerformanceCheck from './pages/PerformanceCheck'
import DeleteEmployees from './pages/DeleteEmployees'

const App = () => {

 const navigate = useNavigate();
 const {userData} = useContext(AuthContext);
 console.log(userData)   

 const [user, setUser] = useState(null)
 const [emailPerson, setEmailPerson] = useState(null)


 

 function loginHandler (email, password) {
  if(userData.employees.find((e) => e.email == email)) {
    setEmailPerson(email);
    navigate('/employee')
  }
  else if(userData.admin.find((e) => e.email == email)) {
    setEmailPerson(email);
    navigate('/admin')
  }
  else {
    alert('Invalid Credentials')
  }
 }

 console.log(emailPerson)




  return (
    
        <div className='h-screen w-full bg-black text-white flex justify-center items-center p-4'>
          <Routes>
              <Route path='/' element={<Login loginHandler={loginHandler}/>} />
              <Route path='/admin' element={<AdminDashboard email={emailPerson}/>} />
              <Route path='/employee' element={<EmployeeDashboard email={emailPerson}/>} />
              <Route path='/create' element={<CreateEmployees />} />
              <Route path='/delete' element={<DeleteEmployees />}></Route>
              <Route path='/performance' element={<PerformanceCheck />} />
          </Routes>
        </div>

  )
}

export default App