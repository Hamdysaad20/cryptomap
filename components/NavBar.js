import React from "react";
import Authnav from "../components/authnav";

function NavBar(props) {
  return (
    <div className=' '>
      <header className=' text-white  bg-gray-900 text-center overflow-hidden lg:max-w-9xl sticky top-0 grid grid-cols-3   shadow-sm '>
        <div
          style={{ color: "white", fontWeight: 800 }}
          className=' text-left md:text-center ml-3 sm:ml-7 text-2xl md:text-3xl py-auto md:pt-0'>
          <a href='/'>
            {" "}
            <h1
              style={{
                fontFamily: "BalooBhaijaan2",
                fontWeight: "800",
                textShadow:
                  "0 15px 30px rgba(0,0,0,0.11), 0 5px 15px rgba(0,0,0,0.08)",
              }}
              className='select-none cursor-pointer hover:drop-shadow-2xl drop-shadow-xl py-4 lg:pb-1'>
              CryptoMap
            </h1>
          </a>
        </div>

        <div className=''></div>

        <div className=' pt-3'>
          <Authnav className='pt-3 ' />
        </div>
      </header>
    </div>
  );
}

export default NavBar;
