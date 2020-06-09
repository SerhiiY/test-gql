import {
  TOGGLE_REVIEWS_POPUP,
  TOGGLE_REVIEWS_LOADER,
} from "./types";

const initialState = {
  reviewsLoader: false,
  reviewsPopup: false,
}

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_REVIEWS_POPUP:
      const isPopup = 
        action.payload === undefined
          ? !state.reviewsPopup
          : action.payload
      return { ...state, reviewsPopup: isPopup };

    case TOGGLE_REVIEWS_LOADER:
      const isLoader = 
        action.payload === undefined
          ? !state.reviewsLoader
          : action.payload
      return { ...state, reviewsLoader: isLoader };

    default: return state;
  }
};

export default dataReducer;
