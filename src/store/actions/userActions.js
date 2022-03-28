import {
  USER_LOADED,
  USER_LOGIN_REQUEST,
  USER_LOGIN_FAIL,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
  USER_REGISTER_REQUEST,
  USER_REGISTER_FAIL,
  USER_REGISTER_SUCCESS,
  USER_OTP_REQUEST,
  USER_OTP_FAIL,
  USER_OTP_SUCCESS,
  PACKAGE_REQUEST,
  PACKAGE_FAIL,
  PACKAGE_SUCCESS,
  FORGET_PASSWORD_REQUEST,
  FORGET_PASSWORD_FAIL,
  FORGET_PASSWORD_SUCCESS,
  RESET_PASSWORD_REQUEST,
  RESET_PASSWORD_FAIL,
  RESET_PASSWORD_SUCCESS,
} from "../actions/userActions";


export const login = (payload) => (dispatch) => {

  axios
    .post("/api/auth/login", body, config)
    .then((res) => {
      dispatch({ type: LOGIN, payload: "Login successful" });
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch(returnErrors(err.response.data, err.response.status));
      dispatch({
        type: LOGIN_FAILED,
      });
    });
};
