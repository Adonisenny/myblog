import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

export const Register = () => {
  const [inputs,setInputs] = useState({
    username:'',
    password:'',
    email:''
  })
  const [error,setError] =useState(null)
  const navigate =useNavigate()

  const handleChange = (e) => {
setInputs(prev=>({...prev,[e.target.name]:e.target.value}))
  }
  const handleSubmit =async(e)=> {
    console.log('i am clicking')
    e.preventDefault()
    try{
await axios.post("http://localhost:9000/backend/auth/Register",inputs)
navigate('/Login')

}catch(err){
  console.log(err)
  setError(err?.response?.data)
}
  }
  return (
    <div className='auth'>
<h1>Register</h1>
<form>
    <input type='text' placeholder='username' name='username' onChange={handleChange}/>
    <input type='password' placeholder='password'  name='password' onChange={handleChange}/>
    <input type='email' placeholder='email'  name='email' onChange={handleChange}/>

    <button onClick={handleSubmit}>Register  </button>
    {error && <p>{error}</p>}
    <span>If you have an account, Login here<Link to='/Login'> here</Link></span>
</form>

    </div>
  )
}
