import { FETCH_BOOKS_BEGIN, FETCH_BOOKS_SUCCESS, FETCH_BOOKS_FAILURE, RATE_BOOK, DELETE_BOOK, OPEN_POPUP_BOOK } from '../actions/fetchBookActions'

const initialState = {
  bookList: [],
  loading: false,
  error: null,
  idCurrentBook: null,
  stars: null,
  isPopupOpen: false
}

export default function bookReducer (state = initialState, action) {
  switch (action.type) {
    case FETCH_BOOKS_BEGIN:
      return {
        ...state,
        loading: true,
        error: null
      }
    case FETCH_BOOKS_SUCCESS:
      return {
        ...state,
        loading: false,
        bookList: action.payload.bookList
      }
    case FETCH_BOOKS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error
      }
    case RATE_BOOK:
      return {
        ...state,
        idCurrentBook: action.payload.id,
        stars: action.payload.book.rating
      }
    case DELETE_BOOK:
      return {
        ...state,
        bookList: state.bookList.filter((book) => (
          book._id !== action.payload
        ))
      }
    case OPEN_POPUP_BOOK:
      return {
        ...state,
        isPopupOpen: action.payload
      }
    default:
      return state
  }
}
