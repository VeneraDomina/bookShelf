import { watchFetchCollection, selectCollection, editCollection, addBook, removeBook, createCollection, deleteCollection } from './collectionSaga'
import { watchFetchBook, rateBook, deleteBook, createBook } from './bookSaga'

export default function* rootSaga () {
  yield [
    watchFetchCollection(),
    watchFetchBook(),
    selectCollection(),
    editCollection(),
    addBook(),
    removeBook(),
    rateBook(),
    createCollection(),
    deleteCollection(),
    deleteBook(),
    createBook()
  ]
}
