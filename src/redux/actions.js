import {
  GET_REVIEWS,
  SET_REVIEWS,
  TOGGLE_REVIEWS_POPUP,
} from "./types";

export const getReviews = () => ({
  type: GET_REVIEWS,
});

export const setReviews = reviews => ({
  type: SET_REVIEWS,
  payload: reviews,
});

export const toggleReviewsPopup = isOpen => ({
  type: TOGGLE_REVIEWS_POPUP,
  payload: isOpen,
});

export const toggleReviewsLoader = isLoading => ({
  type: TOGGLE_REVIEWS_POPUP,
  payload: isLoading,
});
