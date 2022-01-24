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
               <button style={{color:"white"}} className=" active:ring-offset-1 active:ring ring-pink-800 py-2 px-3 text-sm md:text-lg duration-200 rounded-md font-medium  hover:bg-gray-800 hover:text-gray-900">تسجيل الدخول</button>
               <button style={{color:"white",backgroundColor:"#ed0e3f"}} className="active:ring-offset-4 active:ring ring-pink-800 hidden md:inline-block hover:bg-red-800 duration-200 py-2 px-3 font-medium ml-2 rounded-md">إنشاء حساب</button>
           </div>

       </header>
        </div>
    )
}

export default NavnonavsBar
