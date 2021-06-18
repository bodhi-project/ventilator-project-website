// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Imports
// ----------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Libraries
import { createStore, applyMiddleware } from 'redux'
import { persistReducer, persistStore } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import createDebounce from 'redux-debounced'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Components

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Locals
import rootReducer from './rootReducer'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Abstractions
const createStoreWithMiddleware = applyMiddleware(createDebounce())(createStore)
const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['websiteState'],
}
const persistedReducer = persistReducer(persistConfig, rootReducer)

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Method
// ----------------------------------------------------------------------------
/** [description] */
const storeWithPreloadedState = (preloadedState = {}) => {
  const store = createStoreWithMiddleware(persistedReducer, undefined)
  const persistor = persistStore(store)
  return { store, persistor }
}

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Export
// ----------------------------------------------------------------------------
export default storeWithPreloadedState
