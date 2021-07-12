import axios from 'axios';
import React, { useState } from 'react';
import Form from '../components/Form';
import Photo from '../components/Photo';

export default function Home() {
  
  const [items, setItems] = useState([]);
  const [arr, setArr] = useState([]);
  const [page, setPage] = useState(1)


  const [tags, setTags] = useState('')

  const submitHandler = (event: any) =>{
    event.preventDefault()
    if(!tags.trim()) {
      console.log('Введите имя');
      return
    }
    searchFlickr()
    setTags('')
  }

  const changInput = (value: string) => {
    setTags(value)
  }

  const addPhoto = (pic: any) => {
    
    setArr(pic)
  }

  const searchFlickr = () => {
    axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${process.env.REACT_APP_API_KEY}&tags=${tags}&per_page=10&page=${page}&format=json&nojsoncallback=1`)
      .then(
        (result) => {
          
          const picArray = result.data.photos.photo.map((pic: any) => {
            const srcPath = `https://farm${pic.farm}.staticflickr.com/${pic.server}/${pic.id}_${pic.secret}.jpg`;
            return {id: pic.id, src: srcPath, title: pic.title}
            } 
          )
          setItems(picArray);
        }
      )
  }

  return (
    <div>
      <Form onChange={changInput} value={tags} onSubmit={submitHandler} />
      <button onClick={() => setPage(page - 1)} type="button" className="btn btn-primary">Primary</button>
      <button onClick={() => setPage(page + 1)} type="button" className="btn btn-secondary">Secondary</button>
      <ul className="photos" >
        {items.map((pic: any) => <Photo key={pic.id} pic={pic} onClick={addPhoto}></Photo>)}
      </ul>
    </div>
  )
}
