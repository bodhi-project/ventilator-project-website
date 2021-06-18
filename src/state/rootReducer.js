// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Imports
// ----------------------------------------------------------------------------
import * as actions from './actions'

// ----------------------------------------------------------------------------
// ------------------------------------------------------------------- Reducers
// ----------------------------------------------------------------------------
/**
    * rootReducer - Root reducer for this package.
    * Root reducer is not called directly, but is comubined and used by Redux to initialise and manage state.
    *
    * @example
      dispatch(someAction({...somePayload...}));
    *
    * @param {object} previousState - A simple object that contains previous state. Default value is an empty object.
    * @param {object} action - An action object of the nature { type: ACTION_KEYWORD, payload: payloadObject }
    * @version 0.0.1
    * @todo none
    */
const rootReducer = (
  previousState = {
    counter: 0,
    headerState: {
      first: true,
      active: false,
    },
    mediaState: {
      currentHeight: 'isTwoThirdsAsHighAsMyImac',
      currentWidth: 'isDesktop',
      isAsHighAsMyImac: false,
      isDesktop: true,
      isExtraLargeDesktop: false,
      isHalfAsHighAsMyImac: false,
      isLargeDesktop: false,
      isMobile: false,
      isOneFourthAsHighAsMyImac: false,
      isPortrait: false,
      isRetina: true,
      isTablet: false,
      isVeryShortWhenComparedToMyImac: false,
      screenHeight: 900,
      screenWidth: 1440,
    },
    screenSizeState: {
      screenWidth: 1440,
      screenHeight: 900,
    },
  },
  action
) => {
  switch (action.type) {
    case actions.INCREASE:
      return Object.assign({}, previousState, {
        counter: action.payload,
      })
    case actions.DECREASE:
      return Object.assign({}, previousState, {
        counter: action.payload,
      })
    case actions.UPDATE_MEDIA_STATE:
      return Object.assign({}, previousState, {
        mediaState: action.payload,
      })
    case actions.UPDATE_SCREEN_SIZE_STATE:
      return Object.assign({}, previousState, {
        screenSizeState: action.payload,
      })
    case actions.UPDATE_HEADER_STATE:
      return Object.assign({}, previousState, {
        headerState: action.payload,
      })
    default:
      return previousState
  }
}

// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Exports
// ----------------------------------------------------------------------------
export default rootReducer
