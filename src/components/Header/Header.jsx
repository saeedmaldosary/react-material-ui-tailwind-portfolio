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
            <ul className="flex gap-10">
              <li>
                <a className="text-smallTextColor font-[600]" href="#about">
                  About
                </a>
              </li>
              <li>
                <a className="text-smallTextColor font-[600]" href="services">
                  Services
                </a>
              </li>
              <li>
                <a className="text-smallTextColor font-[600]" href="portfolio">
                  Portfolio
                </a>
              </li>
              <li>
                <a className="text-smallTextColor font-[600]" href="contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          {/* Menu end */}
          {/* Menu right start */}
          <div className="flex items-center gap-4">
            {/* Let's Talk button start */}
            <button
              className="flex items-center gap-2
              text-smallTextColor font-[600]
              border border-solid border-smallTextColor
              py-2 px-4 rounded-[8px]
              max-h-[40px]
              hover:bg-smallTextColor hover:text-white
              ease-in duration-300"
            >
              <i class="ri-send-plane-line"></i>
              Let's Talk
            </button>
            {/* Let's Talk button end */}
            {/* Small menu start */}
            <span className="text-2xl text-smallTextColor md:hidden cursor-pointer">
              <i class="ri-menu-line"></i>
            </span>
            {/* Small menu end */}
          </div>
          {/* Menu right end */}
        </div>
      </div>
      {/* Container end */}
    </header>
  );
};

export default Header;
