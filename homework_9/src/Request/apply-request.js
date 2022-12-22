import axios from "axios";

const applyRequest = (userData) => {
  return axios.post("http://localhost:5000/form/apply", userData);
};

export default applyRequest;
