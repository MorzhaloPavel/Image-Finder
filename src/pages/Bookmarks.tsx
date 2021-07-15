import React, { useContext } from 'react'
import Photo from '../components/Photo'
import { FlickrContext } from '../context/flickr/flickrContext'
import { IPicture } from '../types'

export default function Bookmarks() {

  const {myPhoto, removePhoto} = useContext(FlickrContext)

  return (
    <ul className="photos row row-cols-auto" >
        {myPhoto.map((picture: IPicture) => <Photo key={picture.id} picture={picture} onClick={removePhoto} title='Remove it!'></Photo>)}
    </ul>
  )
}
