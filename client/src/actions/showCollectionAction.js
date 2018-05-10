export const SELECT_COLLECTION_TO_SHOW_SUCCESS = 'SELECT_COLLECTION_TO_SHOW_SUCCESS'
export const SELECT_COLLECTION_TO_SHOW = 'SELECT_COLLECTION_TO_SHOW'
export const EDIT_COLLECTION_DATA = 'EDIT_COLLECTION_DATA'
export const ADD_BOOK = 'ADD_BOOK'
export const REMOVE_BOOK = 'REMOVE_BOOK'
export const HIDE_COLLECTION = 'HIDE_COLLECTION'
export const CREATE_COLLECTION = 'CREATE_COLLECTION'
export const OPEN_POPUP = 'OPEN_POPUP'

export const selectCollectionSuccess = (collection) => ({
  type: SELECT_COLLECTION_TO_SHOW_SUCCESS,
  payload: { collection }
})

export const openCollection = (id) => ({
  type: SELECT_COLLECTION_TO_SHOW,
  payload: id
})

export const hideCollection = () => ({
  type: HIDE_COLLECTION
})

export const editCollection = (id, data) => ({
  type: EDIT_COLLECTION_DATA,
  payload: { id, data }
})

export const addBook = (id, book) => ({
  type: ADD_BOOK,
  payload: { id, book }
})

export const removeBook = (idCollection, idbook) => ({
  type: REMOVE_BOOK,
  payload: { idCollection, idbook }
})

export const openPopup = (isOpen) => ({
  type: OPEN_POPUP,
  payload: isOpen
})

export const createCollection = (collection) => ({
  type: CREATE_COLLECTION,
  payload: { collection }
})
