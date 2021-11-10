import axios from "axios";

const API_URL = "http://desarrollo.nacion-digital.com/panel/serverFamilyFoud/";

const headers = {

  "Cache-Control" : "no-cache",
  "Accept-Language" : "en",
  "Content-Type" : "application/json",
  "Access-Control-Allow-Origin" : "*",
};

  const loginByAuth = (email, password) => {
    return axios
      .post(API_URL + "Home/login/", headers, {
        email,
        password,
      })
      .then((response) => {
        if (response.data.accessToken) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }
  
        return response.data;
      });
  };

const authService = {
    //register,
    loginByAuth
    //logout,
  };
  
  export default authService;