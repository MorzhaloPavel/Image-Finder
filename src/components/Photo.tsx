import React, { useState } from 'react'
import { IPhoto } from '../types'

export default function Photo({picture, title, onClick }: IPhoto) {
  
  const [tags, setTags] = useState('')

  const buttonClick = (event: React.SyntheticEvent<HTMLButtonElement>) => {
    event.preventDefault()
    onClick({...picture, tags})
  }
  return (
    <li className='photo' >
      <img src={picture.src} alt=''></img>
      <p>{picture.title}</p>
      {title === 'Bookmarks it!' ? 
        <input 
        type='text'
        className='from-control '
        placeholder='Some tags?'
        value={tags}
        onChange={e => setTags(e.target.value)}
        /> :
        <span>{picture.tags}</span>
      }
      
      
      <button onClick={(e) => buttonClick(e)} className={title === 'Bookmarks it!' ? 'btn btn-primary' : 'btn btn-danger'}>{title}</button>
    </li>
  )
}
