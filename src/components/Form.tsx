import React, { useContext, useState } from 'react'
import { FlickrContext } from '../context/flickr/flickrContext'

export default function Form() {

  const {changeTags} = useContext(FlickrContext)

  const [tags, setTags] = useState('')

  const getFlickr = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if(!tags.trim()) {
      console.log('Введите имя');
      return
    }
    changeTags(tags)
    setTags('')
  }

  return (
    <form onSubmit={(e) => getFlickr(e)} className='form' >
      <img src="https://img.icons8.com/metro/26/000000/search.png" alt='' />
      <input 
        type='text'
        className='from-control input'
        placeholder='Заполните меня...'
        value={tags}
        onChange={e => setTags(e.target.value)}
      />
    </form>
  )
}
