import instance from "./customized-axios";

const loginApi = (email, password) => {
  return instance.post("/api/login", { email, password });
};
export { loginApi };
