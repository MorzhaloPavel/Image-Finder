import React, {useReducer, useEffect} from 'react'
import axios from 'axios'
import {FlickrContext} from './flickrContext'
import {flickrReducer} from './flickrReducer'
import {ADD_PHOTO, GET_PHOTOS, REMOVE_PHOTO, SHOW_LOADER, BACK_PAGE, NEXT_PAGE, CHANGE_TAGS} from '../constants'

export const FlickrState = ({children}: any) => {
  const initialState = {
    photos: [],
    myPhoto: [],
    tags: '', 
    page: 1,
    loading: false
  }
  const [state, dispatch] = useReducer(flickrReducer, initialState)

  const showLoader = () => dispatch({type: SHOW_LOADER})

  const changeTags = (tags: string) => {
    const payload = tags
    dispatch({type: CHANGE_TAGS, payload})
  }

  const savePhoto = (pic: object) => {
    if(state.myPhoto.includes(pic)) {
      return
    }
    const payload = pic
    dispatch({type: ADD_PHOTO, payload})
  }

  const removePhoto = (pic: object) => {
    const payload = pic
    dispatch({type: REMOVE_PHOTO, payload})
  }

  const nextPage = () => {
    showLoader()
    dispatch({type: NEXT_PAGE})
  }

  const backPage = () => {
    if(state.page === 1) {
      return
    }
    showLoader()
    dispatch({type: BACK_PAGE})
  }

  useEffect(() => {
    if(state.tags === '') {
      return
    }
    showLoader()
    axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${process.env.REACT_APP_API_KEY}&tags=${state.tags}&per_page=9&page=${state.page}&format=json&nojsoncallback=1`)
      .then( (res) => {
        if(state.tags === '') {
          return
        }
        showLoader()
        const payload = res.data.photos.photo.map((pic: any) => {
          const srcPath = `https://farm${pic.farm}.staticflickr.com/${pic.server}/${pic.id}_${pic.secret}.jpg`;
          return {id: pic.id, src: srcPath, title: pic.title}
          } 
        )
        dispatch({type: GET_PHOTOS, payload})
      })
  }, [state.page, state.tags])

  return (
    <FlickrContext.Provider value={{
      showLoader, savePhoto, nextPage, backPage, changeTags, removePhoto,
      loading: state.loading,
      photos: state.photos,
      myPhoto: state.myPhoto,
      page: state.page,
    }}>
      {children}
    </FlickrContext.Provider>
  )
}
