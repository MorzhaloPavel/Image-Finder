import React, {useReducer, useEffect} from 'react'
import axios from 'axios'
import {FlickrContext} from './flickrContext'
import {flickrReducer} from './flickrReducer'
import {ADD_PHOTO, GET_PHOTOS, REMOVE_PHOTO, SHOW_LOADER, BACK_PAGE, NEXT_PAGE, CHANGE_TAGS} from '../constants'
import {IState, IPic, IPicture} from '../../types'


export const FlickrState = ({children}: any) => {

  const localStorage = () => {
    const json = JSON.parse(`${window.localStorage.getItem("myPhoto")}`)
    const arr = []
    for(let i = 0; ; i++) {
      const item = json[i]
      if(!item) break
      arr.push(item)
    }
    if(json['pic'] !== undefined) {
      arr.push(json['pic'])
    }
    return arr
  }

  const changeStoreg = (pic: IPicture) => {
    const aaa = state.myPhoto.filter((photo: IPicture) => photo.id !== pic.id)
    window.localStorage.clear()
    window.localStorage.setItem("myPhoto", JSON.stringify({...aaa}))
  }

  const initialState: IState = {
    photos: [],
    myPhoto: window.localStorage.getItem("myPhoto") == null
      ? [] : localStorage(),
    tags: '', 
    page: 1,
    pages: 1,
    loading: false
  }
  
  const [state, dispatch] = useReducer(flickrReducer, initialState)

  const showLoader = (): void => dispatch({type: SHOW_LOADER})

  const changeTags = (tags: string): void => {
    const payload = tags
    dispatch({type: CHANGE_TAGS, payload})
  }

  const savePhoto = (pic: IPicture): void => {
    if(state.myPhoto.includes(pic)) {
      return
    }
    window.localStorage.setItem("myPhoto", JSON.stringify({...state.myPhoto, pic}))
    const payload = pic
    dispatch({type: ADD_PHOTO, payload})
  }

  const removePhoto = (pic: IPicture): void => {
    changeStoreg(pic)
    const payload = pic
    dispatch({type: REMOVE_PHOTO, payload})
  }

  const nextPage = (): void => {
    showLoader()
    dispatch({type: NEXT_PAGE})
  }

  const backPage = (): void => {
    showLoader()
    dispatch({type: BACK_PAGE})
  }

  useEffect(() => {
    if(state.tags === '') {
      return
    }
    showLoader()
    axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${process.env.REACT_APP_API_KEY}&tags=${state.tags}&per_page=12&page=${state.page}&format=json&nojsoncallback=1`)
      .then( (res) => {
        if(state.tags === '') {
          return
        }
        showLoader()
        const payload = res.data.photos.photo.map((pic: IPic) => {
          const srcPath = `https://farm${pic.farm}.staticflickr.com/${pic.server}/${pic.id}_${pic.secret}.jpg`;
          return {id: pic.id, src: srcPath, title: pic.title}
          } 
        )
        const pages = res.data.photos.pages
        dispatch({type: GET_PHOTOS, payload, pages})
      })
  }, [state.page, state.tags])

  return (
    <FlickrContext.Provider value={{
      savePhoto,
      nextPage,
      backPage,
      changeTags,
      removePhoto,
      loading: state.loading,
      photos: state.photos,
      myPhoto: state.myPhoto,
      page: state.page,
      pages: state.pages,
    }}>
      {children}
    </FlickrContext.Provider>
  )
}
