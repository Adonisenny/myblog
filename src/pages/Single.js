import React, { useContext } from 'react'
import dogs from '../Images/dogs.jpg';
import man from '../Images/man.jpg';
import {FaEdit,FaDelete} from 'react-icons/fa'
import { useState,useEffect } from 'react';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';
import moment from "moment"
import DOMPurify from 'dompurify'

import { RiDeleteBin6Line } from "react-icons/ri";
import { Link } from 'react-router-dom';
import Menu from '../Components/Menu';
import { Authprovider } from '../Context/AuthContext';

export const Single = () => {
  const[post,setPost] = useState({})
  const navigate = useNavigate()
  const location = useLocation();
  const postId = location.pathname.split("/")[2]
  const {currentUsers} = useContext(Authprovider)
  
  useEffect(() => {
const fetchData = async () => {
  try{
const res = await axios.get(`/posts/${postId}`)
console.log(res.data)
setPost(res.data)
  }catch(err) {
    console.log(err)
  }
  
}

fetchData()
  },[postId])
  const handleDelete = async() => {
    try{
await axios.delete(`/posts/${postId}`)
navigate('/')

    }catch(err){
      console.log(err)
    }
  }

  return (
    <div className='single'>
    <div className='content'>
      <img  src={`../upload/${post?.img}`} alt='pics'/>
    
    <div className='user'>
    {post.userImg && <img  src={post?.userImg} alt='pics'/>}
    <div className='info'>
      <span>{post?.username}</span>
      <p>Posted {moment(post.date).fromNow()}</p>
      </div>
    {console.log(post.username)}
      {currentUsers.username === post.username && (
      <div  className='edit-delete'>
        <Link to ={`/write?edit=2`} state={post}>
      <FaEdit />
      </Link>
      <RiDeleteBin6Line onClick={handleDelete} />
      </div>)}
      

    
    </div>
    <h1> {post?.title}</h1>
    <p 
    dangerouslySetInnerHTML={{
      __html:DOMPurify.sanitize (post.desc), }}></p>
    </div>
    <div className='menu'><Menu cat={post.cat} /></div>
    </div>
  )
}
