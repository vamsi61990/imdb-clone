import React from 'react'

function Pagination({pageNum,plus,minus}) {
  return (
    <div className="bg-gray-400 p-3 m-4 flex justify-center gap-4">
        <div onClick={minus}><i className="fa-solid fa-arrow-left cursor-pointer"></i></div>
        <div>{pageNum}</div>
        <div onClick={plus}><i className="fa-solid fa-arrow-right cursor-pointer"></i></div>
    </div>
    
  )
}

export default Pagination