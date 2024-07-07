import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import axios from "axios";
import Pagination from "./Pagination";

function Movies({watchList,handleAddToWatchList,handleRemoveFromWatchList}) {
    const [movies, setMovies] = useState([]);
    const [pageNum, setPageNum] = useState(1);

    const segregateCards = () => {
        const pages = Math.ceil(movies.length/21);
        console.log(pages,"df");
    };

    const onForward = () => {
        if(pageNum!=20){
            setPageNum(pageNum+1);
        }
    }

    const onBackward = () => {
        if(pageNum!=1){
            setPageNum(pageNum-1);
        }
    };

    useEffect(() => {
        const fetchMovies = async () => {
            try{
                const response = await axios.get(`https://api.themoviedb.org/3/movie/popular?language=en-US&page=${pageNum}`,{
                    headers:{
                        'accept': 'application/json',
                        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiYTAwZjg3MDUyMmExZTBkNDY4MjZjZGQyNTU3MDMxOCIsInN1YiI6IjY2NWU4MzBiN2IyMTUyMDZlODU0ODRiNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nk7UVL7pfgw9nDMkNby13zE_OicXJNlTSVQ3qzBwIEk'
                    },
                });
                setMovies(response.data.results);
            }catch(error){
                console.log(error);
            }
        }; 
        fetchMovies();
        segregateCards();
    },[pageNum])
    console.log("1234",movies);
  return (
    <>
      <div className="text-center font-bold p-2 m-2">Trending Movies</div>

      <div className="flex flex-row flex-wrap justify-between m-2 py-2 gap-3">
        {movies.map((mvi) => {
            return <MovieCard poster_path={mvi.poster_path} title={mvi.title} watchList={watchList} handleAddToWatchList={handleAddToWatchList} handleRemoveFromWatchList={handleRemoveFromWatchList} mvi={mvi}/>
        })}
      </div>

        <Pagination pageNum={pageNum} plus={onForward} minus={onBackward}/>
    </>
  );
}

export default Movies;
