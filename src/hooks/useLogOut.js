import { useNavigate } from "react-router-dom"

const useLogOut = ()=>{
    const navigate = useNavigate()
     const logOut = ()=>{
    localStorage.clear('token')
    navigate('/')
    }

    return logOut
}

export default useLogOut