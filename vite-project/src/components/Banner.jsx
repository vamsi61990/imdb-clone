import React from "react";

function Banner() {
  return (
    <div
      className="h-[80vh] bg-cover bg-center flex items-end"
      style={{
        backgroundImage:
          "url(https://wallpapers.com/images/featured/avengers-vm16xv4a69smdauy.jpg)"}}>
        <div className="bg-gray-900/60 w-full text-white text-center">The Avengers</div>
    </div>
  );
}

export default Banner;
