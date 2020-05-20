import { GET_CART, ADD_PRODUCT, SET_LOADING } from "../types";

export default (state, action) => {
  switch (action.type) {
    case GET_CART:
      return {
        ...state,
        cart: action.payload,
        loading: false,
      };
    case ADD_PRODUCT:
      return {
        ...state,
        cart: action.payload,
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
