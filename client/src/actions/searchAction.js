export const SEARCH_BOOK = 'SEARCH_BOOK'

export const searchBook = (bookName) => ({
  type: SEARCH_BOOK,
  payload: { bookName }
})
