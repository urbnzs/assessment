import axios from "axios";

const baseURL = "http://js-assessment-backend.herokuapp.com/users.json";

export const getAllUsers = () => {
  return axios.get(baseURL).then((res) => res.data);
};