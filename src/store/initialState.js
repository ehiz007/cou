const initialState = {
  user: {
    messages: [],
    token: null,
    loading: false,
    isAuthenticated: false,
    userInfo: {
      first_name: "",
      last_name: "",
      email: "",
      phone: "",
      business_name: "",
      package_name: "",
    },
  },
  business: {},
};

export default initialState;
