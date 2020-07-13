import React, { useReducer } from "react";
import axios from "axios";
import assetsContext from "./assetsContext";
import AssetsReducer from "./assetsReducer";
import regeneratorRuntime from "regenerator-runtime";
import { GET_ASSETS, SET_LOADING } from "../types";

const AssetsState = (props) => {
  const initialState = {
    assets: {},
    loading: false,
  };

  const [state, dispatch] = useReducer(AssetsReducer, initialState);

  const getAssets = async () => {
    setLoading();

    const res = await axios.get(`${process.env.REACT_APP_BASE_URL}/assets`);

    dispatch({ type: GET_ASSETS, payload: res.data });
  };

  const setLoading = () => dispatch({ type: SET_LOADING });

  return (
    <assetsContext.Provider
      value={{
        loading: state.loading,
        assets: state.assets,
        getAssets,
      }}
    >
      {props.children}
    </assetsContext.Provider>
  );
};

export default AssetsState;
