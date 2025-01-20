const logIn = () => {
  console.log("login...");
};

const register = async (form: {
  fullname: string;
  email: string;
  pswd: string;
}) => {
  setTimeout(() => {
    console.log("register...");
  }, 3000);
};

const loginService = { logIn, register };

export default loginService;
