import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import createSagaMiddleWare from 'redux-saga'

import reducer from './reducers'
import rootSaga from './sagas'

const sagaMiddleware = createSagaMiddleWare()
export default createStore(reducer, composeWithDevTools(applyMiddleware(sagaMiddleware)))

sagaMiddleware.run(rootSaga)
