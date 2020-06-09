import { SET_REVIEWS } from "./types";

const initialState = {
  reviews: [],
}

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_REVIEWS: return { ...state, reviews: action.payload }; 
    default: return state;
  }
};

export default dataReducer;
