import axios from "axios";
import { createContext, useEffect, useState } from "react";
export const Authprovider = createContext()

export const LewContext = ({children}) => {
const [currentUsers,setCurrentUsers] =useState(JSON.parse(localStorage.getItem("user"))|| null)
const login = async (inputs) => {
    const res = await axios.post('http://localhost:9000/backend/auth/login',inputs)
    setCurrentUsers(res.data)

}
const logout = async (inputs) => {
    await axios.post("http://localhost:9000/backend/auth/logout")
    setCurrentUsers(null)
    
}
useEffect(() => {
localStorage.setItem("user",JSON.stringify(currentUsers))
},[currentUsers])
return (

<Authprovider.Provider value={{currentUsers,login,logout}}>{children}</Authprovider.Provider>
)
}