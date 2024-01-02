import axios from "axios";

const request = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_BASE_URL}`,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_BACK_END_KEY}`,
  },
  responseType: "json",
  withCredentials: false,
});
// after send request
request.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    return Promise.reject(error);
  },
);

export default request;