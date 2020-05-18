import { GET_ASSETS, SET_LOADING } from "../types";

export default (state, action) => {
  switch (action.type) {
    case GET_ASSETS:
      return {
        ...state,
        assets: action.payload,
        loading: false,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};
