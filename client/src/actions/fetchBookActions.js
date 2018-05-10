export const FETCH_BOOKS_BEGIN = 'FETCH_BOOKS_BEGIN'
export const FETCH_BOOKS_SUCCESS = 'FETCH_BOOKS_SUCCESS'
export const FETCH_BOOKS_FAILURE = 'FETCH_BOOKS_FAILURE'
export const FETCH_BOOKS = 'FETCH_BOOKS'
export const RATE_BOOK = 'RATE_BOOK'
export const DELETE_BOOK = 'DELETE_BOOK'
export const OPEN_POPUP_BOOK = 'OPEN_POPUP_BOOK'
export const CREATE_BOOK = 'CREATE_BOOK'

export const fetchBooksBegin = () => ({
  type: FETCH_BOOKS_BEGIN
})

export const fetchBooksSuccess = (bookList) => ({
  type: FETCH_BOOKS_SUCCESS,
  payload: { bookList }
})

export const fetchBooksFailure = (error) => ({
  type: FETCH_BOOKS_FAILURE,
  payload: { error }
})

export const fetchBooks = () => ({
  type: FETCH_BOOKS
})

export const rateBook = (id, book) => ({
  type: RATE_BOOK,
  payload: { id, book }
})

export const deleteBook = (id) => ({
  type: DELETE_BOOK,
  payload: id
})

export const openPopupBook = (isOpen) => ({
  type: OPEN_POPUP_BOOK,
  payload: isOpen
})

export const createBook = (book) => ({
  type: CREATE_BOOK,
  payload: { book }
})
