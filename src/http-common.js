import axios from "axios";

export default axios.create({
  // baseURL: "crud.sajamnamjestaja.com/api",
  headers: {
    "Content-type": "application/json"
  }
});