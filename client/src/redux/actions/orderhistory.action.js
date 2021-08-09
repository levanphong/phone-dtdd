import axios from "axios";
export const OderhistoryAction= (params) => async (dispatch) => {
  try {
    dispatch({ type: "ORDERHISTORY_REQUEST" });
 
    await axios.post("http://localhost:3001/orderhistory", {
      cartlength : params.cartlength , 
      value : params.value , 
      date : params.date , 
      id_user : params.id_user

     
    });
    dispatch({
      type: "ORDERHISTORY_SUCCESS",
      payload: params,
    });
  } catch (error) {
    dispatch({
      type: "ORDERHISTORY_FAIL",
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
export const getHistoryProductAction = () => async (dispatch) => {
  try {
    dispatch({ type: "GET_HISTORYPRODUCT_REQUEST" });

    const { data } = await axios.get(`http://localhost:3001/historyproduct`);

    dispatch({
      type: "GET_HISTORYPRODUCT_SUCCESS",
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: "GET_HISTORYPRODUCT_FAIL",
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
export const orderproductsAction= (params) => async (dispatch) => {
  try {
    dispatch({ type: "ADDORDERPRODUCT_REQUEST" });
 
    await axios.post("http://localhost:3001/addoderproduct", {
      id_donhang : params.id_donhang , 
      id_user :params.id_user,
      Note : params.Note , 
      date : params.date ,  
      orderstatus : params.orderstatus,
      cartlength : params.cartlength

     
    });
    dispatch({
      type: "ADDORDERPRODUCT_SUCCESS",
      payload: params,
    });
  } catch (error) {
    dispatch({
      type: "ADDORDERPRODUCT_FAIL",
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};