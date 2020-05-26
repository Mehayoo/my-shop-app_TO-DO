import {
  GET_CART,
  ADD_PRODUCT,
  DELETE_CART_PRODUCT,
  SET_LOADING,
} from "../types";

export default (state, action) => {
  switch (action.type) {
    case GET_CART:
    case ADD_PRODUCT:
    case DELETE_CART_PRODUCT:
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
