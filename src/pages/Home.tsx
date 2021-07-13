import React, { useContext, useState } from 'react';
import Form from '../components/Form';
import { Loader } from '../components/Loader';
import Photo from '../components/Photo';
import { FlickrContext } from '../context/firebase/flickrContext';

export default function Home() {

  const {loading, photos, changeTags, savePhoto, backPage, nextPage}: any = useContext(FlickrContext)

  const [tags, setTags] = useState('')

  const changInput = (tags: string) => {
    setTags(tags)
  }

  const getFlickr = (event: any) => {
    event.preventDefault()
    if(!tags.trim()) {
      console.log('Введите имя');
      return
    }
    changeTags(tags)
    setTags('')
  }
  
  return (
    <div>
      <Form onChange={changInput} value={tags} onSubmit={getFlickr} />
      {
        loading ? 
        <Loader/> : 
        <>
          <button onClick={backPage} type="button" className="btn btn-primary">Back</button>
          <button onClick={nextPage} type="button" className="btn btn-secondary">Next</button>
          <ul className="photos home" >
            {photos.map((pic: any) => <Photo key={pic.id} pic={pic} onClick={savePhoto} title='Bookmarks it!' ></Photo>)}
          </ul>
        </>
      }
      
    </div>
  )
}
