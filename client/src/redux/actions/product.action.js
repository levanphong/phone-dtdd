import axios from "axios";
export const getPhoneProductDetailAction = (id) => async (dispatch) => {
  try {
    dispatch({ type: "GET_PHONEPRODUCTDETAIL_REQUEST" });

    const { data } = await axios.get(`http://localhost:3001/productdetail/${id}`);
    dispatch({
      type: "GET_PHONEPRODUCTDETAIL_SUCCESS",
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: "GET_PHONEPRODUCTDETAIL_FAIL",
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
export const getPhoneProductDetailRamAction = (id) => async (dispatch) => {
  try {
    dispatch({ type: "GET_PHONEPRODUCTDETAILRAM_REQUEST" });

    const { data } = await axios.get(`http://localhost:3001/productdetail-ram/${id}`);
    dispatch({
      type: "GET_PHONEPRODUCTDETAILRAM_SUCCESS",
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: "GET_PHONEPRODUCTDETAILRAM_FAIL",
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
export const getPhoneProductDetailColorAction = (id) => async (dispatch) => {
  try {
    dispatch({ type: "GET_PHONEPRODUCTDETAILCOLOR_REQUEST" });

    const { data } = await axios.get(`http://localhost:3001/productdetail-color/${id}`);
    dispatch({
      type: "GET_PHONEPRODUCTDETAILCOLOR_SUCCESS",
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: "GET_PHONEPRODUCTDETAILCOLOR_FAIL",
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
export const getRelateProductAction = (id) => async (dispatch) => {
  try {
    dispatch({ type: "GET_RELATEPRODUCTS_REQUEST" });

    const { data } = await axios.get(`http://localhost:3001/relatedproducts/${id}`);
    dispatch({
      type: "GET_RELATEPRODUCTS_SUCCESS",
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: "GET_RELATEPRODUCTS_FAIL",
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
export const AddEvaluateAction= (params) => async (dispatch) => {
  try {
    dispatch({ type: "ADDEVALUATE_REQUEST" });
 
    await axios.post("http://localhost:3001/addevaluate", {
      Id_user : params.Id_user,
      id_phone : params.id_phone,
      contentrated :params.contentrated,
      date :params.date,
      lastName :params.lastName,
      star :params.star

    });
    dispatch({
      type: "ADDEVALUATE_SUCCESS",
      payload: params,
    });
  } catch (error) {
    dispatch({
      type: "ADDEVALUATE_FAIL",
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
export const getEvaluateAction = () => async (dispatch) => {
  try {
    dispatch({ type: "GET_EVALUATE_REQUEST" });

    const { data } = await axios.get(`http://localhost:3001/evaluate`);
    dispatch({
      type: "GET_EVALUATE_SUCCESS",
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: "GET_EVALUATE_FAIL",
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
export const totalstarAction= (params) => async (dispatch) => {
  try {
    dispatch({ type: "TOTALSTAR_REQUEST" });
 
    await axios.post("http://localhost:3001/totalstar", {
      id_phone : params.id_phone , 
      total : params.total ,
      totalmax : params.totalmax
    });
    dispatch({
      type: "TOTALSTAR_SUCCESS",
      payload: params,
    });
  } catch (error) {
    dispatch({
      type: "TOTALSTAR_FAIL",
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};