import axios from "axios";
export const AddCartAction= (params) => async (dispatch) => {
  try {
    dispatch({ type: "ADDCART_REQUEST" });
 
    await axios.post("http://localhost:3001/addcart", {
      Id_user : params.Id_user,
      Phonename : params.Phonename,
      Phonetypename : params.Phonetypename,  
      Ram: params.Ram,
      Color : params.Color,
      Image : params.Image,
      Price :params.Price,
      Promotionalprice : params.Promotionalprice,
      Amount :params.Amount,
      Content : params.Content

     
    });
    dispatch({
      type: "ADDCART_SUCCESS",
      payload: params,
    });
  } catch (error) {
    dispatch({
      type: "ADDCART_FAIL",
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
export const getCartAction = () => async (dispatch) => {
  try {
    dispatch({ type: "GET_CART_REQUEST" });

    const { data } = await axios.get("http://localhost:3001/cart");

    dispatch({
      type: "GET_CART_SUCCESS",
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: "GET_CART_FAIL",
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
export const DeleteCartAction = () => async (dispatch) => {
  try {
    dispatch({ type: "DELETE_CART_REQUEST" });

    const { data } = await axios.get("http://localhost:3001/deletecart");

    dispatch({
      type: "DELETE_CART_SUCCESS",
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: "DELETE_CART_FAIL",
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
export const DeleteCartItemACtion= (index) => async (dispatch) => {
  try {
    dispatch({ type: "DELETE_FROM_CART_REQUEST" });
 
    await axios.get(`http://localhost:3001/deletecart/${index}`, {
    });
    dispatch({
      type: "DELETE_FROM_CART_SUCCESS",
      payload: index,
    });
  } catch (error) {
    dispatch({
      type: "DELETE_FROM_CART_FAIL",
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
export const RemovegetCartAction = () => (dispatch) => {
  dispatch({ type: "GET_CART_RESET" });
};
export const AddAmountMaxActionm= (params) => async (dispatch) => {
  console.log(params)
  try {
    dispatch({ type: "ADDAMOUNT_REQUEST" });
 
    await axios.post(`http://localhost:3001/addamountmax`, {
      addamount : params.addamount,
      maxAmount : params.maxAmount


     
    });
    dispatch({
      type: "ADDAMOUNT_SUCCESS",
      payload: params,
    });
  } catch (error) {
    dispatch({
      type: "ADDAMOUNT_FAIL",
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
export const AddAmountMinAction= (params) => async (dispatch) => {
  console.log(params)
  try {
    dispatch({ type: "ADDAMOUNT_REQUEST" });
 
    await axios.post(`http://localhost:3001/addamountmin`, {
      addamount : params.addamount,
      minAmount : params.minAmount


     
    });
    dispatch({
      type: "ADDAMOUNT_SUCCESS",
      payload: params,
    });
  } catch (error) {
    dispatch({
      type: "ADDAMOUNT_FAIL",
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
