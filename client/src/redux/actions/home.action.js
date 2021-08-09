import axios from "axios";
export const getPhoneHomeAction =() => async (dispatch) => {  
  try {
    dispatch({ type: "GET_PHONEHOME_REQUEST" });

    const { data } = await axios.get(`http://localhost:3001/phone-home`);

    dispatch({
      type: "GET_PHONEHOME_SUCCESS",
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: "GET_PHONEHOME_FAIL",
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
export const getPhoneHome1Action =(id) => async (dispatch) => {  
  try {
    dispatch({ type: "GET_PHONEHOME1_REQUEST" });

    const { data } = await axios.get(`http://localhost:3001/phone-home1/${id}`);

    dispatch({
      type: "GET_PHONEHOME1_SUCCESS",
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: "GET_PHONEHOME1_FAIL",
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
export const historySearchAction = (params) => {
  return {
    type: 'HISTORY_SEARCH_ACTION',
    payload: params,
  }
}
export const DeleteHistorySearchAction = (params) => {
  return {
    type: 'DELETE_SEARCH_ACTION',
    payload: params,
  }
}
export const RemoveGetPhoneHome = (params) => {
  return {
    type: 'DELETE_HOME_ACTION',
    payload: params,
  }
}

export const getPhoneAccessoriesAction = () => async (dispatch) => {
  try {
    dispatch({ type: "GET_PHONEACCESSORIES_REQUEST" });

    const { data } = await axios.get("http://localhost:3001/phoneaccessories");

    dispatch({
      type: "GET_PHONEACCESSORIES_SUCCESS",
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: "GET_PHONEACCESSORIES_FAIL",
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
export const getPhoneAccessories1Action = (id) => async (dispatch) => {
  try {
    dispatch({ type: "GET_PHONEACCESSORIES1_REQUEST" });

    const { data } = await axios.get(`http://localhost:3001/phoneaccessories1/${id}`);

    dispatch({
      type: "GET_PHONEACCESSORIES1_SUCCESS",
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: "GET_PHONEACCESSORIES1_FAIL",
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
export const getOutsTandingbrandAction =() => async (dispatch) => {  
  try {
    dispatch({ type: "GET_OUTSTANDINGBRAND_REQUEST" });

    const { data } = await axios.get(`http://localhost:3001/outstandingbrand`);

    dispatch({
      type: "GET_OUTSTANDINGBRAND_SUCCESS",
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: "GET_OUTSTANDINGBRAND_FAIL",
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};