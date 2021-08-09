import axios from "axios";
export const getUser = () => async (dispatch) => {
  try {
    dispatch({ type: "GET_USER_REQUEST" });

    const { data } = await axios.get("http://localhost:3001/user");

    dispatch({
      type: "GET_USER_SUCCESS",
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: "GET_USER_FAIL",
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const RegisterAction = (params) => async (dispatch) => {
  try {
    dispatch({ type: "REGISTER_ACTION_REQUEST" });
    await axios.post("http://localhost:3001/register", {
      username : params.username,
      lastname :params.lastname,
      checkpassword : params.checkpassword,
      email : params.email,
      sex : params.sex,
      phone : params.phone
    });
    
    dispatch({
      type: "REGISTER_ACTION_SUCCESS",
      payload: params,
    });
  } catch (error) {
    dispatch({
      type: "REGISTER_ACTION_FAIL",
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
export const LoginAction = (params) => {
  return {
    type: 'LOGIN_ACTION',
    payload: params,
  }
}
export const DeleteUserAction = (params) => {
  return {
    type: 'DELETE_ACTION',
    payload: params,
  }
}
export const RemoveUserLocalAction = (params) => {
  return {
    type: 'REMOVEUSER_LOCAL_ACTION',
    payload: params,
  }
}

export const UpdateaccountAction = (params) => async (dispatch) => {
  try {
    dispatch({ type: "UPDATEACCOUNT_ACTION_REQUEST" });
    await axios.post("http://localhost:3001/updateaccount", {
      id_user : params.id_user,
      email : params.email,
      password : params.password,
      phone : params.phone , 
      sex : params.sex , 
      lastname : params.lastname
    });
    
    dispatch({
      type: "UPDATEACCOUNT_ACTION_SUCCESS",
      payload: params,
    });
  } catch (error) {
    dispatch({
      type: "UPDATEACCOUNT_ACTION_FAIL",
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
export const CancelOrderAction = (id) => async (dispatch) => {
  try {
    dispatch({ type: "CANCELORDER_ACTION_REQUEST" });
    await axios.post(`http://localhost:3001/cancelorder/${id}`, {
    });
    
    dispatch({
      type: "CANCELORDER_ACTION_SUCCESS",
      payload: id,
    });
  } catch (error) {
    dispatch({
      type: "CANCELORDER_ACTION_FAIL",
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};






