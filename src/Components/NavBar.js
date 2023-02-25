import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../Images/default.png'
import { useContext } from 'react'
import { Authprovider } from '../Context/AuthContext'

export const NavBar = () => {
  const {currentUsers,logout} =useContext(Authprovider)
  console.log(currentUsers?.username)
  return (
    <div className='navbar'>
<div className='container'>
<div className='logo'>
<img src= {Logo} alt='logo' />
</div>
<div className='links'>
    <Link className='link' to="/?cat=art">
        <h6>Art</h6>
        </Link>
        <Link className='link' to="/?cat=science">
        <h6>Science</h6>
        </Link>
        <Link className='link' to="/?cat=technology">
        <h6>Technology</h6>
        </Link> 
        <Link className='link' to="/?cat=cinema">
        <h6>Cinema</h6>
        </Link>
        <Link className='link' to="/?cat=design">
        <h6>Design</h6>
        </Link>
        <Link className='link' to="/?cat=food">
        <h6>Food</h6>
        </Link>
        <span>{currentUsers?.username}</span>

        {currentUsers? (
        <span onClick={logout}>logout</span>
        ):(
        <Link to="/login" className='links'>login</Link>)}

        <span className='write'>
            <Link to='/write' style={{"textDecoration":"none"}}>write</Link>
        </span>

</div>

</div>

    </div>
  )
}
