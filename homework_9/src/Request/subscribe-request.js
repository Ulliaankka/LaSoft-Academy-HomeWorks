import axios from "axios";

const sendEmail = (inputValue) => {
  return axios
    .post("http://localhost:5000/form/subscribe", inputValue)
    .then(function (response) {});
};

export default sendEmail;