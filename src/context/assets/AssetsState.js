import React, { useReducer } from "react";
import axios from "axios";
import assetsContext from "./assetsContext";
import AssetsReducer from "./assetsReducer";
import regeneratorRuntime from "regenerator-runtime";
import { GET_ICONS, GET_IMAGES, SET_LOADING } from "../types";

const AssetsState = (props) => {
  const initialState = {
    icons: [],
    images: [],
    loading: false,
  };

  const [state, dispatch] = useReducer(AssetsReducer, initialState);

  const getIcons = async () => {
    setLoading();

    const res = await axios.get("http://localhost:3000/assets-icons");

    //console.log("res icons: ", res);

    dispatch({ type: GET_ICONS, payload: res.data });
  };

  const getImages = async () => {
    setLoading();

    const res = await axios.get("http://localhost:3000/assets-images");

    console.log("res images: ", res);

    dispatch({ type: GET_IMAGES, payload: res.data });
  };

  const setLoading = () => dispatch({ type: SET_LOADING });

  return (
    <assetsContext.Provider
      value={{
        loading: state.loading,
        icons: state.icons,
        getIcons,
        images: state.images,
        getImages,
      }}
    >
      {props.children}
    </assetsContext.Provider>
  );
};

export default AssetsState;
