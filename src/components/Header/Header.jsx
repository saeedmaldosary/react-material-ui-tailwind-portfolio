import React from "react";

const Header = () => {
  return (
    <header className="w-full h-[80px] flex items-center leading-[80px]">
      {/* Container start */}
      <div className="container">
        <div className="flex items-center justify-between">
          {/* Logo start */}
          <div className="flex items-center gap-[10px]">
            {/* Circle start  */}
            <span
              className="w-[35px] h-[35px] bg-primaryCoIor
              text-white text-[18px] font-[500] rounded-full 
              flex items-center justify-center
            "
            >
              S
            </span>
            {/* Circle end  */}
            {/* Name based the circle start */}
            <div className="leading-[20px]">
              <h2 className="text-xl text-smallTextColor font-[700]">Saeed</h2>
              <p className="text-smallTextColor text-[16px] font-[500]">
                Personal
              </p>
            </div>
            {/* Name based the circle end */}
          </div>
          {/* Logo end */}
          {/* Menu start */}
          <div className="menu">
            <ul className="flex gap-5">
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="services">services</a>
              </li>
              <li>
                <a href="portfolio">Portfolio</a>
              </li>
              <li>
                <a href="contact">Contact</a>
              </li>
            </ul>
          </div>
          {/* Menu end */}
        </div>
      </div>
      {/* Container end */}
    </header>
  );
};

export default Header;
