  
import Link from "next/link";
import React from "react";
import Sininout from "../components/Sininout";

function NavBar(props) {


    
    return (
<div className="invisible sm:visible">
<header className=" text-center overflow-hidden lg:max-w-9xl sticky top-0 z-50 grid grid-cols-3  bg-white shadow-sm pt-2">
           
           <div style={{color: 'red', fontWeight: 800}}  className=" text-left md:text-center ml-3 sm:ml-7 text-2xl md:text-3xl py-auto md:pt-0 pt-1">
               <h1  style={{
                   fontFamily:"BalooBhaijaan2",fontWeight:"800"
                   ,textShadow:"0 15px 30px rgba(0,0,0,0.11), 0 5px 15px rgba(0,0,0,0.08)"

            }}  className=" hover:drop-shadow-2xl drop-shadow-xl lg:pb-1">
               CryptoMap
               </h1>
               
           </div>




         <div></div>
           
           <div className="  pb-1 ">
              <Sininout/>
           </div>
       </header>
</div>

    )
    
} 


export default NavBar
