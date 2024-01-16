import axios from "axios";

const key = "90f4053a80314058ba3012213f1e1fd7";
const axiosCreate = axios.create({
  baseURL: "https://api.rawg.io/api",
});
const getGenreList = axiosCreate.get("/genres?key=" + key);
const getAllGames = axiosCreate.get("/games?key=" + key);
const getGameListbyGenreId = (id) =>
  axiosCreate.get("/games?key=" + key + "&genres=" + id);

export default {
  getGenreList,
  getAllGames,
  getGameListbyGenreId,
};
