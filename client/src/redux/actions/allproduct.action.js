import axios from "axios";
export const getSearchAction = (params) => {
  return {
    type: 'SEARCH_ACTION',
    payload: params,
  }
}
export const RemoveDiscountBypriceAction = (params) => {
  return {
    type: 'REMOVE_DISCOUNTBYPRICE_ACTION',
    payload: params,
  }
}
export const RemovegetPriceIncreaseAction = (params) => {
  return {
    type: 'REMOVE_PRICEINCREASE_ACTION',
    payload: params,
  }
}
export const RemoveTypeofPhoneAction = (params) => {
  return {
    type: 'REMOVE_TYPEOFPHONE_ACTION',
    payload: params,
  }
}
export const getPriceIncreaseAction = () => async (dispatch) => {
  try {
    dispatch({ type: "GET_PRICEINCREASE_REQUEST" });

    const { data } = await axios.get("http://localhost:3001/priceincrease");

    dispatch({
      type: "GET_PRICEINCREASE_SUCCESS",
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: "GET_PRICEINCREASE_FAIL",
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
export const getDiscountByPriceAction = () => async (dispatch) => {
  try {
    dispatch({ type: "GET_DISCOUNTBYPRIICE_REQUEST" });

    const { data } = await axios.get("http://localhost:3001/discountbyprice");

    dispatch({
      type: "GET_DISCOUNTBYPRIICE_SUCCESS",
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: "GET_DISCOUNTBYPRIICE_FAIL",
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
export const getTypeOfPhoneAction = (id) => async (dispatch) => {
  try {
    dispatch({ type: "GET_TYPEOFPHONE_REQUEST" });

    const { data } = await axios.get(`http://localhost:3001/typeofphone/${id}`);

    dispatch({
      type: "GET_GET_TYPEOFPHONE_SUCCESS",
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: "GET_GET_TYPEOFPHONE_FAIL",
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};