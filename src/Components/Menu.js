// const posts =[
//     {
//       "id":1,
//       "title":"lyrics 1",
//       "desc":"They say I am careless but no I care less, the lions blood in me makes me fearless",
//       "img":"https://images.unsplash.com/photo-1672572305595-c0a319dc09f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
      
//       },
//       {
//         "id":2,
//         "title":"Lyrics 2",
//         "desc":"I ahave not come here to talk, I have come here to battle. I am on the horse and the horse on its saddle",
//         "img":"https://images.unsplash.com/photo-1672745769443-bd174ad38547?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
        
//         },
//         {
//           "id":3,
//           "title":"Lyrics 3",
//           "desc":"You are so beautiful but you are a pretty distraction. Me on top of you improper fraction. ",
//           "img":"https://images.unsplash.com/photo-1672139146052-784d8af21ae8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
      

//           },
//           {
//             "id":4,
//             "title":"Lyrics 4",
//             "desc":"I drop punchlines everyday like a newspaper. I take up the world, I am a world shaker. I am on my mantle, breaking up the shadows. Who wants to stop e just cant. I tried to stop me, I just couldnt. Can not outrap myself even if I try",
//             "img":"https://images.unsplash.com/photo-1671343703196-005064ab7940?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80"
            
//             },
//     ]

import axios from "axios";
import { useEffect, useState } from "react";

const Menu = ({cat}) => {
  const [posts,setPosts] =useState([])
  useEffect(()=> {
const fetchData = async () => {
  try{
const res = await axios.get(`/posts/?cat=${cat}`)
setPosts(res.data)
  }catch(err){
    console.log(err)
  }
}
fetchData()
  },[cat])
    return ( 
<div className="menu">
    
<h1>Other post you may like</h1>
{posts.map((post,id)=> (
    <div key={post.id} className="post">
        <img src={`../upload/${post.img}`} alt='' />
        <h3>{post.title}</h3>
        
        <button>Read more</button>
    </div>
))}
        
        </div>
     );
}
 
export default Menu
