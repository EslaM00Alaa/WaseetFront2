import axios from "axios";

const sata = axios.create({
  baseURL: "http://localhost:2222",
});

export default  sata;