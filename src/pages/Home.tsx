import React, { useContext } from 'react';
import Form from '../components/Form';
import { Loader } from '../components/Loader';
import Photo from '../components/Photo';
import { FlickrContext } from '../context/flickr/flickrContext';
import { IPicture } from '../types';

export default function Home() {

  const {page, pages, loading, photos, savePhoto, backPage, nextPage} = useContext(FlickrContext)

  return (
    <>
      <Form/>
      { 
        loading ?
          <Loader/> : 
          
          photos.length === 0 ? 
            <p>No images here. Would you try to search for anything else?</p> : 

            <>
              <div className='pagination'>
                <button onClick={backPage} type="button" className={page === 1 ? "btn btn-primary disabled" : "btn btn-primary"}>Back</button>  
                <p>Page {page} of {pages}</p>
                <button onClick={nextPage} type="button" className={page === pages ? "btn btn-primary disabled" : "btn btn-primary"}>Next</button>
              </div>
              <ul className="photos row row-cols-auto" >
                {photos.map((picture: IPicture) => <Photo key={picture.id} picture={picture} onClick={savePhoto} title='Bookmarks it!'></Photo>)}
              </ul>
            </>
      }
    </>
  )
}




