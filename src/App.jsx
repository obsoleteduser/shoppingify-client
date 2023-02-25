import { Route, Router, Routes } from 'react-router-dom'
import './App.css'
import { Confirmation } from './pages/Confirmation'
import { SignIn } from './pages/SignIn'
import { SignUp } from './pages/SignUp'

function App() {
 

  return (
    <div className="App">
    <Routes>
    <Route path='/' element={ <SignIn/>}/>
    <Route path='/signup' element={ <SignUp/>}/>
    <Route path='/confirm' element={ <Confirmation/>}/>
    </Routes>
    <h4>© 2023, Designed by Tahir Dibirov II</h4>
    </div>
  )
}

export default App
