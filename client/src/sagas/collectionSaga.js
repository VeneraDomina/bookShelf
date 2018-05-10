import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import axios from 'axios'

import { apiCollectons } from '../constants'
import { fetchCollectionsBegin, fetchCollectionsSuccess, fetchCollectionsFailure, FETCH_COLLECTIONS, DELETE_COLLECTION } from '../actions/fetchCollectionActions'
import { selectCollectionSuccess, SELECT_COLLECTION_TO_SHOW, EDIT_COLLECTION_DATA, ADD_BOOK, REMOVE_BOOK, CREATE_COLLECTION } from '../actions/showCollectionAction'

// watcher saga
export function* watchFetchCollection () {
  yield takeEvery(FETCH_COLLECTIONS, fetchCollectionAsync)
}
// worker saga
function* fetchCollectionAsync () {
  try {
    yield put(fetchCollectionsBegin())
    const success = yield call(axios.get, apiCollectons)
    yield put(fetchCollectionsSuccess(success.data))
  } catch (error) {
    yield put(fetchCollectionsFailure(error))
  }
}

export function* selectCollection () {
  yield takeLatest(SELECT_COLLECTION_TO_SHOW, selectCollectionAsync)
}

function* selectCollectionAsync (id) {
  const success = yield call(axios.get, `${apiCollectons}/${id.payload}`)
  yield put(selectCollectionSuccess(success.data))
}

export function* editCollection () {
  yield takeLatest(EDIT_COLLECTION_DATA, editCollectionAsync)
}

function* editCollectionAsync (collection) {
  yield call(axios.put, `${apiCollectons}/${collection.payload.id}`, collection.payload.data)
  const success = yield call(axios.get, apiCollectons)
  yield put(fetchCollectionsSuccess(success.data))
}

export function* addBook () {
  yield takeLatest(ADD_BOOK, addBookAsync)
}

function* addBookAsync (book) {
  yield call(axios.post, `${apiCollectons}/${book.payload.id}/books`, book.payload.book)
}

export function* removeBook () {
  yield takeLatest(REMOVE_BOOK, removeBookAsync)
}

function* removeBookAsync (book) {
  yield call(axios.delete, `${apiCollectons}/${book.payload.idCollection}/books/${book.payload.idbook}`)
}

export function* createCollection () {
  yield takeLatest(CREATE_COLLECTION, createCollectionAsync)
}

function* createCollectionAsync (collection) {
  yield call(axios.post, apiCollectons, collection.payload.collection)
  const success = yield call(axios.get, apiCollectons)
  yield put(fetchCollectionsSuccess(success.data))
}

export function* deleteCollection () {
  yield takeLatest(DELETE_COLLECTION, deleteCollectionAsync)
}

function* deleteCollectionAsync (id) {
  yield call(axios.delete, `${apiCollectons}/${id.payload}`)
}