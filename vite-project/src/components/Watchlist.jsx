import React, { useEffect, useState } from "react";
import genreids from "../utility/genre";

function Watchlist({ watchList, setWatchList,handleRemoveFromWatchList }) {
  const [searchElem, setSearchElem] = useState("");
  const [genreList, setGenreList] = useState(["All Genres"]);
  const [currGenre, setCurrGenre] = useState("All Genres");
  console.log("wat",watchList)

  const handleSearchElem = (e) => {
    setSearchElem(e.target.value);
  };

  const upAscending = () => {
    const ascWatchList = watchList.sort((movieA, movieB) => {
      return movieA.vote_average - movieB.vote_average;
    });
    setWatchList([...ascWatchList]);
    console.log("asc", ascWatchList);
  };

  const downDescending = () => {
    const descWatchList = [...watchList].sort((movieA, movieB) => {
      return movieB.vote_average - movieA.vote_average;
    });
    setWatchList(descWatchList);
    console.log("descWatchList", descWatchList);
  };

  const handleCurrGenre = (genre) => {
    setCurrGenre(genre);
    console.log("currG", currGenre);
  };

  useEffect(() => {
    const displayGenres = watchList.map((mvi) => {
      return genreids[mvi.genre_ids[0]];
    });
    const genreSet = new Set(displayGenres);
    setGenreList(["All Genres", ...genreSet]);
    console.log(displayGenres, "dspg");
    console.log(genreList, "glist");
  }, [watchList]);

  console.log("handle search", searchElem);

  return (
    <>
      <div className="flex justify-center flex-wrap py-2 gap-2">
        {genreList.map((genre) => {
          return (
            <div
              onClick={() => handleCurrGenre(genre)}
              className={
                genre === currGenre
                  ? "bg-blue-400 h-[2rem] w-[5rem] rounded-xl text-white font-bold flex justify-center items-center"
                  : "bg-gray-400 h-[2rem] w-[5rem] rounded-xl text-white font-bold flex justify-center items-center"
              }
            >
              {genre}
            </div>
          );
        })}

        {/* <div className=>
          Action
        </div> */}
      </div>

      <div className="flex justify-center py-3">
        <input
          onChange={handleSearchElem}
          type="text"
          placeholder="Search Movies"
          className="h-[2rem] w-[14rem] bg-gray-200 px-2"
        />
      </div>

      {watchList.length != 0 && (
        <div className="border border-gray-200 m-8">
          <table className="rounded-xl text-gray-500 text-center w-full">
            <thead className="border-b-2">
              <tr>
                <th>Name</th>
                <th className="flex justify-center">
                  <div className="p-2" onClick={upAscending}>
                    <i class="fa-solid fa-arrow-up"></i>
                  </div>
                  <div className="p-2">Ratings</div>
                  <div className="p-2" onClick={downDescending}>
                    <i class="fa-solid fa-arrow-down"></i>
                  </div>
                </th>
                <th>Popularity</th>
                <th>Genre</th>
              </tr>
            </thead>
            {watchList
            .filter((mvi) => {
                if(currGenre === genreids[mvi.genre_ids[0]]){
                    return mvi;
                }else if(currGenre === 'All Genres'){
                    return mvi;
                }
            })
              .filter((mvi) => {
                return mvi.title
                  .toLowerCase()
                  .includes(searchElem.toLowerCase());
              })
              .map((mvi) => {
                return (
                  <tbody>
                    <tr className="border-b-2">
                      <td className="flex items-center">
                        <img
                          className="h-[6rem] w-[5rem] p-2"
                          src={`https://image.tmdb.org/t/p/original/${mvi.poster_path}`}
                        />
                        <div>{mvi.title}</div>
                      </td>
                      <td>{mvi.vote_average}</td>
                      <td>{mvi.popularity}</td>
                      <td>{genreids[mvi.genre_ids[0]]}</td>
                      <td onClick={() => handleRemoveFromWatchList(mvi)} className="text-red-700">Delete</td>
                    </tr>
                  </tbody>
                );
              })}
          </table>
        </div>
      )}

      {/* {watchList.length != 0 &&
        watchList.map((mvi) => {
          return (
            <div className="border border-gray-200 m-8">
              <table className="rounded-xl text-gray-500 text-center w-full">
                <thead className="border-b-2">
                  <tr>
                    <th>Name</th>
                    <th>Ratings</th>
                    <th>Popularity</th>
                    <th>Genre</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b-2">
                    <td className="flex items-center">
                      <img
                        className="h-[6rem] w-[5rem] p-2"
                        src={`https://image.tmdb.org/t/p/original/${mvi.poster_path}`}
                      />
                      <div>{mvi.original_title}</div>
                    </td>
                    <td>{mvi.vote_average}</td>
                    <td>{mvi.popularity}</td>
                    <td>Action</td>
                    <td className="text-red-700">Delete</td>
                  </tr>
                </tbody>
              </table>
            </div>
          );
        })} */}
    </>
  );
}

export default Watchlist;
