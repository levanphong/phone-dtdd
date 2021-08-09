import axios from "axios";
export const AccessoryDetailsAction = (id) => async (dispatch) => {
  try {
    dispatch({ type: "GET_ACCESSORYDETAIL_REQUEST" });

    const { data } = await axios.get(`http://localhost:3001/accessorydetails/${id}`);

    dispatch({
      type: "GET_ACCESSORYDETAIL_SUCCESS",
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: "GET_ACCESSORYDETAIL_FAIL",
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
export const AddCardAccessoryAction= (params) => async (dispatch) => {
  try {
    dispatch({ type: "ADDCARTACCESSORY_REQUEST" });
 
    await axios.post("http://localhost:3001/addcartaccessory", {
      Id_user :params.Id_user , 
      Accessorusname : params.Accessorusname,
      Image : params.Image, 
      Price : params.Price,
      Amount : params.Amount,
      Content : params.Content,
      Ram : params.Ram,
      Color : params.Color,
      Promotionalprice : params.Promotionalprice,
      Phonetypename : params.Phonetypename
    });
    dispatch({
      type: "ADDCARTACCESSORY_SUCCESS",
      payload: params,
    });
  } catch (error) {
    dispatch({
      type: "ADDCARTACCESSORY_FAIL",
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
export const AddEvaluateAccessoryAction= (params) => async (dispatch) => {
  try {
    dispatch({ type: "ADDEVALUATEACCESORY_REQUEST" });
 
    await axios.post("http://localhost:3001/addvaluateaccessory", {
      formEvaluate :params

    });
    dispatch({
      type: "ADDEVALUATEACCESORY_SUCCESS",
      payload: params,
    });
  } catch (error) {
    dispatch({
      type: "ADDEVALUATEACCESORY_FAIL",
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
}; 
export const getAccessoryEvaluateAction = () => async (dispatch) => {
  try {
    dispatch({ type: "GET_ACCESSORYEVALUATE_REQUEST" });

    const { data } = await axios.get(`http://localhost:3001/accessoryevaluate`);

    dispatch({
      type: "GET_ACCESSORYEVALUATE_SUCCESS",
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: "GET_ACCESSORYEVALUATE_FAIL",
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
export const totalstarAccessoryAction= (params) => async (dispatch) => {
  try {
    dispatch({ type: "TOTALVALUATEACCESORY_REQUEST" });
 
    await axios.post("http://localhost:3001/totalevaluateaccessory", {
      id_Accessory : params.id_Accessory , 
      total : params.total,
      totalmax: params.totalmax
    });
    dispatch({
      type: "TOTALEVALUATEACCESORY_SUCCESS",
      payload: params,
    });
  } catch (error) {
    dispatch({
      type: "TOTALEVALUATEACCESORY_FAIL",
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
}; 
export const GetAccessoriesTypeAction = (id) => async (dispatch) => {
  try {
    dispatch({ type: "GET_ACCESSORIESTYPE_REQUEST" });

    const { data } = await axios.get(`http://localhost:3001/accessorytype/${id}`);

    dispatch({
      type: "GET_ACCESSORIESTYPE_SUCCESS",
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: "GET_ACCESSORIESTYPE_FAIL",
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};