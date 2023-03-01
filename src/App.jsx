import { Route, Router, Routes } from 'react-router-dom'
import './App.css'
import { Confirmation } from './pages/Confirmation'
import { Dashboard } from './pages/Dashboard'
import { History } from './pages/History'
import { Products } from './pages/Products'
import { SignIn } from './pages/SignIn'
import { SignUp } from './pages/SignUp'
import { Statistics } from './pages/Statistics'

function App() {
 

  return (
    <div className="App">
    <Routes>
    <Route path='/' element={ <SignIn/>}/>
    <Route path='/signup' element={ <SignUp/>}/>
    <Route path='/confirm' element={ <Confirmation/>}/>
    <Route path='/dashboard' element={<Dashboard/>}>  
       <Route index element={<Products/>}></Route>
        <Route path='/dashboard/history' element={<History/>}></Route>
        <Route path='/dashboard/statistics' element={<Statistics/>}></Route>
    </Route>
    </Routes>
    </div>
  )
}

export default App
