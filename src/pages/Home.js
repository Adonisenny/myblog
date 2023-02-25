import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
// const posts =[
// {
//   "id":1,
//   "title":"lyrics 1",
//   "desc":"They say I am careless but no I care less, the lions blood in me makes me fearless",
//   "img":"https://images.unsplash.com/photo-1672572305595-c0a319dc09f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
  
//   },
//   {
//     "id":2,
//     "title":"Lyrics 2",
//     "desc":"I ahave not come here to talk, I have come here to battle. I am on the horse and the horse on its saddle",
//     "img":"https://images.unsplash.com/photo-1672745769443-bd174ad38547?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
    
//     },
//     {
//       "id":3,
//       "title":"Lyrics 3",
//       "desc":"You are so beautiful but you are a pretty distraction. Me on top of you improper fraction. ",
//       "img":"https://images.unsplash.com/photo-1672139146052-784d8af21ae8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
      
//       },
//       {
//         "id":4,
//         "title":"Lyrics 4",
//         "desc":"I drop punchlines everyday like a newspaper. I take up the world, I am a world shaker. I am on my mantle, breaking up the shadows. Who wants to stop e just cant. I tried to stop me, I just couldnt. Can not outrap myself even if I try",
//         "img":"https://images.unsplash.com/photo-1671343703196-005064ab7940?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80"
        
//         },
// ]

export const Home = () => {
  const[posts,setPosts] = useState([])
  const cat = useLocation().search

  useEffect(() => {
const fetchData = async () => {
  try{
const res = await axios.get(`/posts${cat}`)
console.log(res)
setPosts(res.data)
  }catch(err) {
    console.log(err)
  }
  
}

fetchData()
  },[cat])

  const getText = (html) =>{
    const doc = new DOMParser().parseFromString(html, "text/html")
    return doc.body.textContent
  }
  return (
    <div className='Home'>
      <div className='posts'>
      {posts?.map((post, id)=> (
      <div className='post' key={post.id}>
        <div className='img'>
          <img src={`../upload/${post.img}`} alt='not showing' />
          </div>
          <div className='content'>
            <Link className='link' to={`/post/${post.id}`}>
        <h2>{post.title}</h2>
        </Link>
        <p>{getText(post.desc)}</p>
      <button>Read more...</button>
        
        
        </div>
        </div>
        
    ))}
    </div>
    </div>
  )
}
