import { GET_ICONS, GET_IMAGES, SET_LOADING } from "../types";

export default (state, action) => {
  switch (action.type) {
    case GET_ICONS:
      return {
        ...state,
        icons: action.payload,
        loading: false,
      };
    case GET_IMAGES:
      return {
        ...state,
        images: action.payload,
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
