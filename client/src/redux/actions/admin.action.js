import axios from "axios";
export const getLoginAdminAction = () => async (dispatch) => {
  try {
    dispatch({ type: "GET_LOGINADMIN_REQUEST" });

    const { data } = await axios.get("http://localhost:3001/loginadmin");

    dispatch({
      type: "GET_LOGINADMIN_SUCCESS",
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: "GET_LOGINADMIN_FAIL",
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
export const GetPhoneAdminAction = () => async (dispatch) => {
  try {
    dispatch({ type: "GET_PHONE_ADMIN_REQUEST" });

    const { data } = await axios.get("http://localhost:3001/phone-admin");

    dispatch({
      type: "GET_PHONE_ADMIN_SUCCESS",
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: "GET_PHONE_ADMIN_FAIL",
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
export const GetPhoneColorAction = () => async (dispatch) => {
  try {
    dispatch({ type: "GET_COLORPHONE_REQUEST" });

    const { data } = await axios.get("http://localhost:3001/colorphone-admin");

    dispatch({
      type: "GET_COLORPHONE_SUCCESS",
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: "GET_COLORPHONE_FAIL",
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
export const GetTypeRamAction = () => async (dispatch) => {
  try {
    dispatch({ type: "GET_TYPERAM_REQUEST" });

    const { data } = await axios.get("http://localhost:3001/typeramphone-admin");

    dispatch({
      type: "GET_TYPERAM_SUCCESS",
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: "GET_TYPERAM_FAIL",
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
export const GetDetailsRamAction = () => async (dispatch) => {
  try {
    dispatch({ type: "GET_DETAILSRAM_REQUEST" });

    const { data } = await axios.get("http://localhost:3001/detailsamphone-admin");

    dispatch({
      type: "GET_DETAILSRAM_SUCCESS",
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: "GET_DETAILSRAM_FAIL",
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
export const GetTypePhoneAction = () => async (dispatch) => {
  try {
    dispatch({ type: "GET_TYPEPHONE_REQUEST" });

    const { data } = await axios.get("http://localhost:3001/typephone-admin");

    dispatch({
      type: "GET_TYPEPHONE_SUCCESS",
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: "GET_TYPEPHONE_FAIL",
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
export const GetEvaluatePhoneAdminAction = () => async (dispatch) => {
  try {
    dispatch({ type: "GET_EVALUATEPHONE_ADMIN_REQUEST" });

    const { data } = await axios.get("http://localhost:3001/evaluatephone-admin");

    dispatch({
      type: "GET_EVALUATEPHONE_ADMIN_SUCCESS",
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: "GET_EVALUATEPHONE_ADMIN_FAIL",
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
export const GetDetailsPhoneAdminAction = () => async (dispatch) => {
  try {
    dispatch({ type: "GET_DETAIPHONE_ADMIN_REQUEST" });

    const { data } = await axios.get("http://localhost:3001/detailsphone-admin");

    dispatch({
      type: "GET_DETAIPHONE_ADMIN_SUCCESS",
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: "GET_DETAIPHONE_ADMIN_FAIL",
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
export const GetAccessoryPhoneAdminAction = () => async (dispatch) => {
  try {
    dispatch({ type: "GET_ACCESSORYPHONE_ADMIN_REQUEST" });

    const { data } = await axios.get("http://localhost:3001/accessoryphone-admin");

    dispatch({
      type: "GET_ACCESSORYPHONE_ADMIN_SUCCESS",
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: "GET_ACCESSORYPHONE_ADMIN_FAIL",
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
export const GetTypeOfAccessoryAdminAction = () => async (dispatch) => {
  try {
    dispatch({ type: "GET_TYPEOFACCESSORY_ADMIN_REQUEST" });

    const { data } = await axios.get("http://localhost:3001/typeofaccessories-admin");

    dispatch({
      type: "GET_TYPEOFACCESSORY_ADMIN_SUCCESS",
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: "GET_TYPEOFACCESSORY_ADMIN_FAIL",
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
export const UserAdminAction = () => async (dispatch) => {
  try {
    dispatch({ type: "GET_USER_ADMIN_REQUEST" });

    const { data } = await axios.get("http://localhost:3001/user-admin");

    dispatch({
      type: "GET_USER_ADMIN_SUCCESS",
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: "GET_USER_ADMIN_FAIL",
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
export const GetAccessoryReviewAdminAction = () => async (dispatch) => {
  try {
    dispatch({ type: "GET_ACCESSORYREVIEWS_ADMIN_REQUEST" });

    const { data } = await axios.get("http://localhost:3001/accessoryreviews-admin");

    dispatch({
      type: "GET_ACCESSORYREVIEWS_ADMIN_SUCCESS",
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: "GET_ACCESSORYREVIEWS_ADMIN_FAIL",
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
export const GetOderManagementAdminAction = () => async (dispatch) => {
  try {
    dispatch({ type: "GET_ODERMANAGEMENT_ADMIN_REQUEST" });

    const { data } = await axios.get("http://localhost:3001/ordermanagement-admin");

    dispatch({
      type: "GET_ODERMANAGEMENT_ADMIN_SUCCESS",
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: "GET_ODERMANAGEMENT_ADMIN_FAIL",
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
//Theem du lieu
export const AddPhoneAdminAction= (params) => async (dispatch) => {
  try {
    dispatch({ type: "ADDPHONE-ADMIN_REQUEST" });
 
    await axios.post("http://localhost:3001/addphone-admin", {
      addphoneadmin :params

     
    });
    dispatch({
      type: "ADDPHONE-ADMIN_SUCCESS",
      payload: params,
    });
  } catch (error) {
    dispatch({
      type: "ADDPHONE-ADMIN_FAIL",
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
export const DeletePhoneAdminAction= (id) => async (dispatch) => {
  try {
    dispatch({ type: "DELETEPHONE-ADMIN_REQUEST" });
 
    await axios.post(`http://localhost:3001/deletephone-admin/${id}`, {
     
    });
    dispatch({
      type: "DELETEPHONE-ADMIN_SUCCESS",
      payload: id,
    });
  } catch (error) {
    dispatch({
      type: "DELETEPHONE-ADMIN_FAIL",
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
export const ConfirmAdminAction= (id) => async (dispatch) => {
  try {
    dispatch({ type: "CONFIRM-ADMIN_REQUEST" });
 
    await axios.post(`http://localhost:3001/confirm-admin/${id}`, {
     
    });
    dispatch({
      type: "CONFIRM-ADMIN_SUCCESS",
      payload: id,
    });
  } catch (error) {
    dispatch({
      type: "CONFIRM-ADMIN_FAIL",
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const WaitingAdminAction = (id) => async (dispatch) => {
  try {
    dispatch({ type: "WAITING-ADMIN_REQUEST" });
 
    await axios.post(`http://localhost:3001/waiting-admin/${id}`, {
     
    });
    dispatch({
      type: "WAITING-ADMIN_SUCCESS",
      payload: id,
    });
  } catch (error) {
    dispatch({
      type: "WAITING-ADMIN_FAIL",
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
export const CompleteAdminAction = (id) => async (dispatch) => {
  try {
    dispatch({ type: "COMPLETE-ADMIN_REQUEST" });
 
    await axios.post(`http://localhost:3001/complete-admin/${id}`, {
     
    });
    dispatch({
      type: "COMPLETE-ADMIN_SUCCESS",
      payload: id,
    });
  } catch (error) {
    dispatch({
      type: "COMPLETE-ADMIN_FAIL",
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
export const LocalLoginAdminAction = (params) => {
  return {
    type: 'LOCALLOGIN_ACTION',
    payload: params,
  }
}


//
    
    
    
    