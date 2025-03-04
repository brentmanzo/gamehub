import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "7568f1e62f9e49508a413c4257685145",
  },
});
