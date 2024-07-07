import React from 'react'
import movielogo from '../movielogo.png';
import { Link } from 'react-router-dom';


export const Navbar = () => {
  return (
    <div className='flex items-center border space-x-4 pl-3 py-4'>
        <img src={movielogo} alt='movie logo' className='size-12'/>
        <Link to='/' className='text-2xl text-blue-500'>Movies</Link>
        <Link to='/watchlist' className='text-2xl text-blue-500'>WatchList</Link>
    </div>
  )
}
