import Image from "next/image";
import React from "react";
import Authnav from "../components/authnav";

function NavBar(props) {
  return (
    <div className=' '>
      <header className=' text-white  bg-gray-900 text-center overflow-hidden lg:max-w-9xl sticky top-0 grid grid-cols-3   shadow-sm '>
        <div
          style={{ color: "white", fontWeight: 800 }}
          className='  relative  md:text-center text-2xl md:text-3xl py-auto md:pt-0'>
          <a
            className='
            pl-2 
          justify-center
          mt-2 mb-2 flex flex-row '
            href='/'>
            {" "}
            <div className='hidden sm:inline-block'>
              <Image
                className=' select-none cursor-pointer hover:drop-shadow-2xl drop-shadow-xl '
                src='/re.png'
                alt='CryptoMap'
                height='55px'
                width='55px'
                objectFit='fill'
              />
            </div>
            <h1
              style={{
                fontFamily: "BalooBhaijaan2",
                fontWeight: "800",
                textShadow:
                  "0 15px 30px rgba(0,0,0,0.11), 0 5px 15px rgba(0,0,0,0.08)",
              }}
              className='ml-4 sm:ml-0 select-none cursor-pointer hover:drop-shadow-2xl drop-shadow-xl p-1 py-1 sm:py-4 lg:pb-1'>
              CryptoMap
            </h1>
          </a>
        </div>

        <div className=''></div>

        <div className=' my-auto mr-2  justify-center '>
          <Authnav className='' />
        </div>
      </header>
    </div>
  );
}

export default NavBar;
