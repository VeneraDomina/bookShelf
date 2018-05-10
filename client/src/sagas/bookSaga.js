import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import axios from 'axios'

import { apiBooks } from '../constants'
import { fetchBooksBegin, fetchBooksSuccess, fetchBooksFailure, FETCH_BOOKS, RATE_BOOK, DELETE_BOOK, CREATE_BOOK } from '../actions/fetchBookActions'

// watcher saga
export function* watchFetchBook () {
  yield takeEvery(FETCH_BOOKS, fetchBookAsync)
}
// worker saga
function* fetchBookAsync () {
  try {
    yield put(fetchBooksBegin())
    const success = yield call(axios.get, apiBooks)
    yield put(fetchBooksSuccess(success.data))
  } catch (error) {
    yield put(fetchBooksFailure())
  }
}

export function* rateBook () {
  yield takeLatest(RATE_BOOK, rateBookAsync)
}

function* rateBookAsync (book) {
  yield call(axios.put, `${apiBooks}/${book.payload.id}`, book.payload.book)
  const responce = yield call(axios.get, apiBooks)
  yield put(fetchBooksSuccess(responce.data))
}

export function* deleteBook () {
  yield takeLatest(DELETE_BOOK, deleteBookAsync)
}

function* deleteBookAsync (book) {
  yield call(axios.delete, `${apiBooks}/${book.payload}`)
}

export function* createBook () {
  yield takeLatest(CREATE_BOOK, createBookAsync)
}

function* createBookAsync (book) {
  yield call(axios.post, apiBooks, book.payload.book)
  const responce = yield call(axios.get, apiBooks)
  yield put(fetchBooksSuccess(responce.data))
}
