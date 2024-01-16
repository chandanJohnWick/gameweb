import React, { useEffect } from "react";

function TrendingGames({ gameList }) {
  useEffect(() => {
    //console.log(gameList);
  }, []);
  return (
    <div className="mt-5 hidden md:block">
      <h2 className=" font-bold text-[30px] dark:text-white">Tranding Games</h2>
      <div className=" md:grid md:grid-cols-3  gap-4 lg:grid-cols-4">
        {gameList.map(
          (item, index) =>
            index < 4 && (
              <div
                className="bg-[#76a8f75e] rounded-lg  p-2 group hover:scale-110 transion-all
              duration-300 ease-in-out  cursor-pointer"
              >
                <img
                  src={item.background_image}
                  className="h-[270px] rounded-lg object-cover"
                />
                <h2 className="dark:text-white font-bold text-[20px]">
                  {item.name}
                </h2>
              </div>
            )
        )}
      </div>
    </div>
  );
}

export default TrendingGames;
