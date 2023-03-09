import axios from "axios";

const AUTH_API_URL = 'http://localhost:3000/auth/';


 const instance = axios.create({
  baseURL: AUTH_API_URL,
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
});


export const auth = {
  signUp: async (data) =>{
   const response =  await instance.post('signup', data)
   return response.data
  },
  signIn: async (data) =>{
    const response = await instance.post('signin', data)
    return response.data
  },

  confirm: async (data) =>{
    const response = await instance.post('confirm', data)
    return response.data
  }

}