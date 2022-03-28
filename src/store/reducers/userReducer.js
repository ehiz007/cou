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
} from "../types/userTypes";

import initialState from "store/initialState";

export default (state = initialState.user, action) => {
  switch (action.type) {
    case USER_LOADED:
      return { ...action.payload };
    case USER_LOGIN_REQUEST:
    case USER_REGISTER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case USER_LOGIN_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        isLoading: false,
        messages: action.payload.messages,
        userInfo: action.payload.user,
      };
    case USER_REGISTER_SUCCESS:
      return { ...state, messages: action.payload.messages };
    case USER_LOGIN_FAIL:
    case USER_LOGOUT:
    case USER_REGISTER_FAIL:
      return {
        ...state,
        messages: action.payload.messages,
        token: null,
        isAuthenticated: false,
        isLoading: false,
        userInfo: initialState.user.userinfo,
      };
    default:
      return state;
  }
};

// export const userLoginReducer = (state = {}, action) => {
//   switch (action.type) {
//     case USER_LOGIN_REQUEST:
//       return { loading: true };

//     case USER_LOGIN_SUCCESS:
//       return { loading: false, userInfo: action.payload };

//     case USER_LOGIN_FAIL:
//       return { loading: false, error: action.payload };

//     case USER_LOGOUT:
//       return {};

//     default:
//       return state;
//   }
// };

// export const userRegisterReducer = (state = {}, action) => {
//   switch (action.type) {
//     case USER_REGISTER_REQUEST:
//       return { loading: true };

//     case USER_REGISTER_SUCCESS:
//       return { loading: false, userInfo: action.payload };

//     case USER_REGISTER_FAIL:
//       return { loading: false, error: action.payload };

//     case USER_LOGOUT:
//       return {};

//     default:
//       return state;
//   }
// };

// export const userOtpReducer = (state = {}, action) => {
//   switch (action.type) {
//     case USER_OTP_REQUEST:
//       return { loading: true };

//     case USER_OTP_SUCCESS:
//       return { loading: false, OtpResponse: action.payload };

//     case USER_OTP_FAIL:
//       return { loading: false, error: action.payload };

//     default:
//       return state;
//   }
// };

// export const getPackageReducer = (state = {}, action) => {
//   switch (action.type) {
//     case PACKAGE_REQUEST:
//       return { loading: true };

//     case PACKAGE_SUCCESS:
//       return { loading: false, packages: action.payload };

//     case PACKAGE_FAIL:
//       return { loading: false, error: action.payload };

//     default:
//       return state;
//   }
// };

// export const userForgetPassReducer = (state = {}, action) => {
//   switch (action.type) {
//     case FORGET_PASSWORD_REQUEST:
//       return { loading: true };

//     case FORGET_PASSWORD_SUCCESS:
//       return { loading: false, forgetPassRes: action.payload };

//     case FORGET_PASSWORD_FAIL:
//       return { loading: false, error: action.payload };

//     default:
//       return state;
//   }
// };

// export const userRestPassReducer = (state = {}, action) => {
//   switch (action.type) {
//     case RESET_PASSWORD_REQUEST:
//       return { loading: true };

//     case RESET_PASSWORD_SUCCESS:
//       return { loading: false, restPassRes: action.payload };

//     case RESET_PASSWORD_FAIL:
//       return { loading: false, error: action.payload };

//     default:
//       return state;
//   }
// };
