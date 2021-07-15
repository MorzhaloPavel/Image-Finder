import { ADD_PHOTO, GET_PHOTOS, REMOVE_PHOTO, SHOW_LOADER, BACK_PAGE, NEXT_PAGE, CHANGE_TAGS} from '../constants'

export const flickrReducer = (state: any , action: any) => {
  switch (action.type) {
    case SHOW_LOADER:
      return {...state, loading: true}

    case CHANGE_TAGS:
      return {...state, tags: action.payload}
      
    case GET_PHOTOS:
      return  {...state, photos: action.payload, pages: action.pages, loading: false}

    case ADD_PHOTO:
      return {...state, myPhoto: [...state.myPhoto, action.payload]}

    case REMOVE_PHOTO:
      return {...state, myPhoto: state.myPhoto.filter((photo: any) => photo.id !== action.payload.id)}     

    case NEXT_PAGE:
      return {...state, page: state.page + 1}

    case BACK_PAGE:
      return {...state, page: state.page - 1}
  
    default:
      return state
  }
}
