import React, { useEffect, useState } from "react";
import GenreList from "../Componenets/GenreList";
import GlobalApi from "../Services/GlobalApi";
import Banner from "../Componenets/Banner";
import TrendingGames from "../Componenets/TrendingGames";
import GamesByGenresId from "../Componenets/GamesByGenresId";

function Home() {
  const [allGamesList, setallGameList] = useState();
  const [gameListbyGenre, setgameListbyGenre] = useState([]);
  useEffect(() => {
    getAllGamesList();
    getGameListbyGenresId(4);
  });
  const getAllGamesList = () => {
    GlobalApi.getAllGames.then((resp) => {
      //console.log(resp.data.results)
      setallGameList(resp.data.results);
    });
  };
  const getGameListbyGenresId = (id) => {
    console.log("idd", id);
    GlobalApi.getGameListbyGenreId(id).then((resp) => {
      console.log("by id==>", resp.data.results);
      setgameListbyGenre(resp.data.results);
    });
  };
  return (
    <div className="grid grid-cols-4 px-8 ">
      <div className=" hidden md:block">
        <GenreList genreid={(genreid) => getGameListbyGenresId(genreid)} />
      </div>
      <div className="col-span-4 md:col-span-3 p-2">
        {allGamesList?.length > 0 && gameListbyGenre.length > 0 ? (
          <div>
            <Banner gameBanner={allGamesList[16]} />
            <TrendingGames gameList={allGamesList} />
            <GamesByGenresId gameListid={gameListbyGenre} />
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default Home;
