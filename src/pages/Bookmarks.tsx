import React, { useContext } from 'react'
import Photo from '../components/Photo'
import { FlickrContext } from '../context/firebase/flickrContext'

export default function Bookmarks() {

  const {myPhoto, removePhoto}: any = useContext(FlickrContext)


  return (
    <ul className="photos" >
        {myPhoto.map((pic: any) => <Photo key={pic.id} pic={pic} onClick={removePhoto} title='Remove it!'></Photo>)}
    </ul>
  )
}
