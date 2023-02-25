import React from 'react' 

import footpics from '../Images/profile.png'
export const Footer = () => {
  return (
    <div className='footer'>
      <div className='imageDiv'>
<img src={footpics} alt='logo' style={{'height':"50px","border":"none"}} />
</div>
<h6>Never force a vibe, <i>be sleek</i></h6>
    </div>
  )
}
