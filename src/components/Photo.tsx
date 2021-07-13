import React from 'react'

export default function Photo({pic, onClick, title}: any) {
  
  return (
    <li className='photo' >
      <img src={pic.src} alt=''></img>
      <button onClick={() => onClick(pic)} className='btn btn-primary'>{title}</button>
      <p>{pic.title}</p>
    </li>
  )
}
