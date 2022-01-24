import Sininout from "../components/Sininout";

function NavnonavsBar(props) {

    return (
        <div className="mt-[-72px] pb-1  block sm:hidden">
                   <header className=" bg-gray-900 pt-7 text-center overflow-hidden lg:max-w-9xl sticky top-0 z-50 grid grid-cols-2   shadow-sm ">
           
           <div style={{color: 'white', fontWeight: 800}}  className=" text-left md:text-center ml-3 sm:ml-7 text-2xl md:text-3xl py-auto  md:pt-0 pt-1">
               <div style={{fontFamily:"BalooBhaijaan2",fontWeight:"800" }} className=" pb-3">
                   Crypto Map
               </div>
           </div>        
         
         
           <div className=" pb-1 text-right mr-6 ">
           <Sininout
           textcolor="text-white"
           />

          








           </div>

       </header>
        </div>
    )
}

export default NavnonavsBar
