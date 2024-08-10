import axios from "axios";

const apiFunc = (req: any) => {
  const api = axios.create({
    baseURL: "http://3.65.32.166/api",
  });

  return api;
};

export default apiFunc;
