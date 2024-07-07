import { useEffect, useState } from "react";
import "./App.css";
import { Navbar } from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Watchlist from "./components/Watchlist";
import Movies from "./components/Movies";
import Banner from "./components/Banner";

function App() {
  const [watchList, setWatchList] = useState([]);

  const handleAddToWatchList = (mviObj) => {
    const newWatchList = [...watchList,mviObj];
    localStorage.setItem('moviesApp',JSON.stringify(newWatchList));
    setWatchList(newWatchList);
  }

  const handleRemoveFromWatchList = (mviObj) => {
    const filteredWatchList = watchList.filter((mvi) => {
      return mvi.id !== mviObj.id;
    });
    localStorage.setItem('moviesApp',JSON.stringify(filteredWatchList));
    setWatchList(filteredWatchList);
  }

  useEffect(() => {
    const mvisFromLocalStorage = localStorage.getItem('moviesApp');
    if(!mvisFromLocalStorage){
      return;
    }
    setWatchList(JSON.parse(mvisFromLocalStorage));
  },[])
  console.log(watchList,"wct");

  return (
    <>
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<><Banner/><Movies watchList={watchList} handleAddToWatchList={handleAddToWatchList} handleRemoveFromWatchList={handleRemoveFromWatchList}/></>}/>
        <Route path="/watchlist" element={<Watchlist watchList={watchList} setWatchList={setWatchList} handleRemoveFromWatchList={handleRemoveFromWatchList}/>}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
