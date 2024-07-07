import React, { useState } from "react";
import Watchlist from "./Watchlist";

function MovieCard({
  poster_path,
  title,
  watchList,
  handleAddToWatchList,
  handleRemoveFromWatchList,
  mvi,
}) {
    const addOrRemove = (mvi) => {
        for(let i=0; i<watchList.length;i++){
            if(watchList[i].id === mvi.id){
                return false;
            }
        }
        return true;
    }
  
  return (
    <div className="py-4">
      <div
        className="h-[51vh] w-[190px] flex flex-col justify-between  bg-center bg-cover bg-no-repeat duration-300 hover:scale-110 rounded-2xl"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original/${poster_path})`,
        }}
      >
        {addOrRemove(mvi) ? (
          <div className="flex justify-end">
            <div
              onClick={() => handleAddToWatchList(mvi)}
              className="flex items-center justify-center h-7 w-7 m-3 bg-gray-900/60 cursor-pointer hover:scale-110"
            >
              &#128525;
            </div>
          </div>
        ) : (
          <div className="flex justify-end">
            <div
              onClick={() => handleRemoveFromWatchList(mvi)}
              className="flex items-center justify-center h-7 w-7 m-3 bg-gray-900/60 cursor-pointer hover:scale-110"
            >
              &#10060;
            </div>
          </div>
        )}

        <div className=" w-full h-[48px] text-center text-sm flex items-center justify-center text-white bg-gray-900/60 rounded-b-2xl">
          {title}
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
