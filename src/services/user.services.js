import axios from "axios";

  export const loginByAuth = async (email, password) => {
    const response = await axios.post("Home/login/", {
      email,
      password
  })
    .then((response) => {
      console.log(response);
    });
     /*.then((response) => {
        if (response.data.accessToken) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }
  
        return response.data;
      });*/
  };
 


const authService = {
    //register,
    loginByAuth
    //logout,
  };
  
  export default authService;

 