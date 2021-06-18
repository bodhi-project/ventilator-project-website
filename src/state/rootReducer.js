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
    mediaState: {
      currentHeight: 'isHalfAsHighAsMyImac',
      currentWidth: 'isDesktop',
      isAsHighAsMyImac: false,
      isDesktop: false,
      isExtraLargeDesktop: false,
      isHalfAsHighAsMyImac: false,
      isLargeDesktop: false,
      isMobile: false,
      isOneFourthAsHighAsMyImac: false,
      isPortrait: true,
      isRetina: true,
      isTablet: true,
      isVeryShortWhenComparedToMyImac: false,
      screenHeight: 1440,
      screenWidth: 900,
    },
    headerState: {
      active: false,
    },
    websiteState: {
      mode: 'light',
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
    case actions.UPDATE_WEBSITE_STATE:
      return Object.assign({}, previousState, {
        websiteState: action.payload,
      })
    default:
      return previousState
  }
}

// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Exports
// ----------------------------------------------------------------------------
export default rootReducer
