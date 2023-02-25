import React, { useContext, useState } from 'react'
import { Link,useNavigate } from 'react-router-dom'
import axios from 'axios'
import { Authprovider } from '../Context/AuthContext'


export const Login = () => {
  const [inputs,setInputs] = useState({
    username:'',
    password:''
  })
  const[error,setError] = useState(null)
  const navigate = useNavigate()
  const {login} =useContext(Authprovider)
  const handleChange = (e) => {
      setInputs(prev =>({ ...prev,[e.target.name]:e.target.value}))
  }
  const handleSubmit = async(e) => {
    e.preventDefault()
    try{
await login(inputs)
navigate('/')
    }catch(err){
setError(err?.response?.data)
    }
  }
  return (
    <div className='auth'>
<h1>Login</h1>
<form>
    <input type='text' placeholder='username' name='username' onChange={handleChange} />
    <input type='password' placeholder='password' name='password' onChange={handleChange} />
    <button onClick={handleSubmit}>Login</button>
   
    <span>If you do not have an account,<Link to='/register'>Register here</Link></span>
    {error && <p>error</p>}
</form>

    </div>
  )
}
