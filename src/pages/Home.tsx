import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Form from '../components/Form';

export default function Home() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${process.env.REACT_APP_API_KEY}&tags=cat&per_page=10&page=1&format=json&nojsoncallback=1`)
      .then(
        (result) => {
          const picArray = result.data.photos.photo.map((pic: any) => {
            const srcPath = `https://farm${pic.farm}.staticflickr.com/${pic.server}/${pic.id}_${pic.secret}.jpg`;
            return <img key={pic.id} src={srcPath} alt=''></img>
            } 
          )
          setItems(picArray);
        },
        (error) => {
          // setIsLoaded(true);
          // setError(error);
        }
      )
  }, [])


  return (
    <div>
      <Form/>
      {items}
    </div>
  )
}
