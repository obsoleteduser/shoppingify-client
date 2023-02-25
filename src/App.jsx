import { Route, Router, Routes } from 'react-router-dom'
import './App.css'
import { SignIn } from './pages/SignIn'
import { SignUp } from './pages/SignUp'

function App() {
 

  return (
    <div className="App">
    <Routes>
    <Route path='/' element={ <SignIn/>}/>
    <Route path='/signup' element={ <SignUp/>}/>
    </Routes>
    </div>
  )
}

export default App
