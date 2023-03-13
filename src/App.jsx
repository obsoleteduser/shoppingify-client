import { useEffect, useLayoutEffect } from 'react'
import { Route, Router, Routes, useNavigate } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import './App.css'
import getToken from './helpers/getToken'
import { RequireAuth } from './hoc/RequireAuth'
import { Confirmation } from './pages/Confirmation'
import { Dashboard } from './pages/Dashboard'
import { History } from './pages/History'
import { Products } from './pages/Products'
import { SignIn } from './pages/SignIn'
import { SignUp } from './pages/SignUp'
import { Statistics } from './pages/Statistics'
import { auth } from './service/auth'
import start from './service/start'
import 'react-toastify/dist/ReactToastify.css';

function App() {

  const navigate = useNavigate()


  useLayoutEffect(()=>{
    
    start(navigate)

  },[])


  


  return (
    <div className="App">
      <ToastContainer/>
      <Routes>
        <Route path='/' element={<SignIn />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/confirm' element={<Confirmation />} />
        <Route element={<RequireAuth />}>
          <Route path='/dashboard' element={<Dashboard />}>
            <Route index element={<Products />}></Route>
            <Route path='/dashboard/history' element={<History />}></Route>
            <Route path='/dashboard/statistics' element={<Statistics />}></Route>
          </Route>
        </Route>
      </Routes>
    </div>
  )
}

export default App
