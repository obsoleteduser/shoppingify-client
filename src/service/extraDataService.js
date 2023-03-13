import axios from "axios"
import getToken from "../helpers/getToken"

class ExtraDataService {


     LIST_URL = 'https://shoppingify-server-by-tahir.onrender.com/user/'

    getWaitingList = async ()=>{
       const data = axios.get(`${this.LIST_URL}shoplistwaiting`, { headers: {"Authorization" : `Bearer ${getToken()}`}})
       return (await data).data
    }


}

export default new ExtraDataService()