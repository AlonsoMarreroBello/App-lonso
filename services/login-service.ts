import axios from "axios";
import asyncStorageService from "./asyncStorage-service";

const logIn = async (form: { email: string; pswd: string }) => {
  try {
    const response = await axios.post(
      "http://192.168.1.102:5000/auth/login/",
      form
    );
    if (response.status === 200 || response.status === 201) {
      await asyncStorageService.storeData("token", response.data.object.token);
      console.log(response.data.object.token);
      console.log(form);
      return true;
    }
  } catch (error) {
    return false;
  }
};

const register = async (form: {
  fullname: string;
  email: string;
  pswd: string;
}) => {
  axios
    .post("http://192.168.1.102:5000/auth/register/", form)
    .then((response) => {
      console.log(response);
      console.log(response.data);
    })
    .catch((error) => {
      console.error("Error sending data: ", error);
    });
};

const loginService = { logIn, register };

export default loginService;
