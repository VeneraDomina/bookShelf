import { SEARCH_BOOK } from '../actions/searchAction'

const intialState = {
  bookName: ''
}

export default function searchReducer (state = intialState, action) {
  switch (action.type) {
    case SEARCH_BOOK:
      return {
        bookName: action.payload.bookName
      }
    default:
      return state
  }
}
