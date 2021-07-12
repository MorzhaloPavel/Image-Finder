import React from 'react'

export default function Photo({pic, onClick}: any) {
  // console.log(pic);
  
  return (
    <li className='photo' >
      <img src={pic.src} alt='' ></img>
      <button onClick={() => onClick(pic)} className='btn btn-primary'>Save</button>
      <p>{pic.title}</p>
    </li>
  )
}
