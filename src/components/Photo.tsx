import React from 'react'
import { IPhoto } from '../types'

export default function Photo({picture, title, onClick }: IPhoto) {
  
  return (
    <li className='photo' >
      <img src={picture.src} alt=''></img>
      <p>{picture.title}</p>
      <button onClick={() => onClick(picture)} className={title === 'Bookmarks it!' ? 'btn btn-primary' : 'btn btn-danger'}>{title}</button>
    </li>
  )
}
