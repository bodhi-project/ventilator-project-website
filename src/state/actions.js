// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Actions
// ----------------------------------------------------------------------------
export const INCREASE = 'INCREASE'
export const DECREASE = 'DECREASE'
export const UPDATE_MEDIA_STATE = 'UPDATE_MEDIA_STATE'
export const UPDATE_SCREEN_SIZE_STATE = 'UPDATE_SCREEN_SIZE_STATE'
export const UPDATE_HEADER_STATE = 'UPDATE_HEADER_STATE'

// ----------------------------------------------------------------------------
// ------------------------------------------------------------ Action creators
// ----------------------------------------------------------------------------
/** Increase */
export const increase = (initObject) => ({
  type: INCREASE,
  payload: initObject,
})

/** Decrease */
export const decrease = (initObject) => ({
  type: DECREASE,
  payload: initObject,
})

/** updateMediaState */
export const updateMediaState = (initObject) => ({
  type: UPDATE_MEDIA_STATE,
  payload: initObject,
})

/** updateScreenSizeState */
export const updateScreenSizeState = (initObject) => ({
  type: UPDATE_SCREEN_SIZE_STATE,
  payload: initObject,
})

/** updateHeaderState */
export const updateHeaderState = (initObject) => ({
  type: UPDATE_HEADER_STATE,
  payload: initObject,
})
