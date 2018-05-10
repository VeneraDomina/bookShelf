export const FETCH_COLLECTIONS_BEGIN = 'FETCH_COLLECTIONS_BEGIN'
export const FETCH_COLLECTIONS_SUCCESS = 'FETCH_COLLECTIONS_SUCCESS'
export const FETCH_COLLECTIONS_FAILURE = 'FETCH_COLLECTIONS_FAILURE'
export const FETCH_COLLECTIONS = 'FETCH_COLLECTIONS'
export const DELETE_COLLECTION = 'DELETE_COLLECTION'

export const fetchCollectionsBegin = () => ({
  type: FETCH_COLLECTIONS_BEGIN
})

export const fetchCollectionsSuccess = (collectionList) => ({
  type: FETCH_COLLECTIONS_SUCCESS,
  payload: { collectionList }
})

export const fetchCollectionsFailure = (error) => ({
  type: FETCH_COLLECTIONS_FAILURE,
  payload: { error }
})

export const fetchCollections = () => ({
  type: FETCH_COLLECTIONS
})

export const deleteCollection = (id) => ({
  type: DELETE_COLLECTION,
  payload: id
})
