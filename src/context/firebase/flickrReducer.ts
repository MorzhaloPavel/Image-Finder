import { ADD_PHOTO, GET_PHOTOS, REMOVE_PHOTO, SHOW_LOADER} from '../constants'

// const handlers = {
//   [SHOW_LOADER]: state => ({...state, loading: true}),
//   [ADD_NOTE]: (state, {payload}) => ({
//     ...state,
//     notes: [...state.notes, payload]
//   }),
//   [FETCH_NOTES]: (state, {payload}) => ({...state, notes: payload, loading: false}),
//   [REMOVE_NOTE]: (state, {payload}) => ({
//     ...state,
//     notes: state.notes.filter(note => note.id !== payload)
//   }),
//   DEFAULT: state => state
// }

// export const firebaseReducer = (state, action) => {
//   const handle = handlers[action.type] || handlers.DEFAULT
//   return handle(state, action)
// }

export const flickrReducer = (state: any , action: any) => {
  switch (action.type) {
    case SHOW_LOADER:
      return {...state, loading: true}

    case GET_PHOTOS:
      return  

    case ADD_PHOTO:
      return 

    case REMOVE_PHOTO:
      return     
  
    default:
      return state
  }
}