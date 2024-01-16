import React, { useEffect } from "react";

function GamesByGenresId({ gameListid }) {
  useEffect(() => {
    console.log("gamelist iddd", gameListid);
  }, []);
  return (
    <div>
      <h2 className="font-bold text-[30px] dark:text-white mt-5">
        Popular Games
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-5 ">
        {gameListid.map((item) => (
          <div className="bg-[#76a8f75e] rounded-lg hover:scale-110 cursor-pointer transition-all ease-in-out duration-300">
            <img
              src={item.background_image}
              className="w-full h-[80%] object-cover rounded-xl"
            />
            <h2 className="font-bold text-[20px] dark:text-white">
              {item.name}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default GamesByGenresId;
