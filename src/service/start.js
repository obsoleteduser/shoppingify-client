import getToken from "../helpers/getToken"
import { auth } from "./auth"


const start = async (navigate) => {
    try{
      await auth.wakeup()
      if(getToken()) navigate('/dashboard')
    }catch(e){
        console.log(e)
      location.reload()
    }    
  }

  export default start