import { useNavigate } from "react-router-dom"

const useLogOut = ()=>{
     const logOut = ()=>{
    localStorage.clear('token')
    location.reload()
    }

    return logOut
}

export default useLogOut