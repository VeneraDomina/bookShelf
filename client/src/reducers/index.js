import { combineReducers } from 'redux'

import collectionReducer from './fetchCollectionReducer'
import bookReducer from './fetchBookReducer'
import searchReducer from './searchReducer'
import currentCollectionReducer from './showCollectionReducer'

export default combineReducers({
  collectionReducer,
  bookReducer,
  searchReducer,
  currentCollectionReducer
})
