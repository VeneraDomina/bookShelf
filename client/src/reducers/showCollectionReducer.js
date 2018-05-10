import { SELECT_COLLECTION_TO_SHOW_SUCCESS, EDIT_COLLECTION_DATA, ADD_BOOK, REMOVE_BOOK, HIDE_COLLECTION, OPEN_POPUP } from '../actions/showCollectionAction'
import { RATE_BOOK, DELETE_BOOK } from '../actions/fetchBookActions'
import { DELETE_COLLECTION } from '../actions/fetchCollectionActions'

const initialState = {
  title: '',
  description: '',
  currentBookList: [],
  currentId: '',
  isCollectionOpen: false,
  isPopupOpen: false
}

export default function currentCollectionReducer (state = initialState, action) {
  switch (action.type) {
    case SELECT_COLLECTION_TO_SHOW_SUCCESS:
      return {
        ...state,
        currentId: action.payload.collection._id,
        title: action.payload.collection.name,
        description: action.payload.collection.description,
        currentBookList: action.payload.collection.books,
        isCollectionOpen: true
      }
    case HIDE_COLLECTION:
      return {
        ...state,
        currentId: '',
        isCollectionOpen: false
      }
    case EDIT_COLLECTION_DATA:
      return {
        ...state,
        title: action.payload.data.name,
        description: action.payload.data.description
      }
    case REMOVE_BOOK:
      return {
        ...state,
        currentBookList: state.currentBookList.filter((book) => (
          book._id !== action.payload.idbook
        ))
      }
    case ADD_BOOK:
      return {
        ...state,
        currentBookList: [...state.currentBookList, action.payload.book.bookData]
      }
    case RATE_BOOK:
      state.currentBookList.forEach((book) => {
        if (book._id === action.payload.id) {
          book.rating = action.payload.book.rating
        }
      })
      return {
        ...state
      }
    case OPEN_POPUP:
      return {
        ...state,
        isPopupOpen: action.payload
      }
    case DELETE_COLLECTION:
      return {
        ...state,
        isCollectionOpen: false
      }
    case DELETE_BOOK:
      return {
        ...state,
        currentBookList: state.currentBookList.filter((book) => (
          book._id !== action.payload
        ))
      }
    default:
      return state
  }
}
