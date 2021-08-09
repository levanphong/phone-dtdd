import axios from "axios";
export const getPurchaseOderAction = () => async (dispatch) => {
  try {
    dispatch({ type: "GET_PURCHASEORDER_REQUEST" });

    const { data } = await axios.get('http://localhost:3001/purchaseorder');

    dispatch({
      type: "GET_PURCHASEORDER_SUCCESS",
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: "GET_PURCHASEORDER_FAIL",
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
