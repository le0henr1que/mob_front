import axios from "axios";

const econodata = axios.create({
  baseURL: "https://www.econodata.com.br",
});

export default econodata;
