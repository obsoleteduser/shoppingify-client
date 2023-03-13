import { toast } from "react-toastify"
import getToken from "../helpers/getToken"
import { auth } from "./auth"


const start = async (navigate) => {
    try{
      await auth.wakeup()
      if(getToken()) navigate('/dashboard')
    }catch(e){
        console.log(e)
        toast.error("Unable to connect to the service. Please stay with me I'm trying to reconnect!", {
          position: toast.POSITION.TOP_RIGHT
      });

      setTimeout(()=>{
        toast.error("It happens due to that I use free cloud service for backend", {
          position: toast.POSITION.TOP_RIGHT
      });
      }, 3000)

     setTimeout(()=>{ location.reload()}, 6000)
    }    
  }

  export default start