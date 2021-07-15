import {createContext} from 'react'
import { IContext } from '../../types'

const defaultValue = {
  photos: [],
  myPhoto: [],
  tags: '', 
  page: 1,
  pages: 1,
  loading: false,
  savePhoto: () => {},
  nextPage: () => {},
  backPage: () => {},
  changeTags: () => {},
  removePhoto: () => {},
}

export const FlickrContext = createContext<IContext>(defaultValue)
