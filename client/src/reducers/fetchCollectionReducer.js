import { FETCH_COLLECTIONS_BEGIN, FETCH_COLLECTIONS_SUCCESS, FETCH_COLLECTIONS_FAILURE, DELETE_COLLECTION } from '../actions/fetchCollectionActions'

const initialState = {
  collectionList: [],
  currentCollection: null,
  loading: false,
  error: null
}

export default function collectionReducer (state = initialState, action) {
  switch (action.type) {
    case FETCH_COLLECTIONS_BEGIN:
      return {
        ...state,
        loading: true,
        error: null
      }
    case FETCH_COLLECTIONS_SUCCESS:
      return {
        ...state,
        loading: false,
        collectionList: action.payload.collectionList,
        currentCollectionID: action.payload.collectionList[0]._id
      }
    case FETCH_COLLECTIONS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error
      }
    case DELETE_COLLECTION:
      return {
        ...state,
        collectionList: state.collectionList.filter((collection) => (
          collection._id !== action.payload
        ))
      }
    default:
      return state
  }
}
