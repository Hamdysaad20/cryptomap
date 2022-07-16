import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";

function Sininout() {
  const { data: session } = useSession();

  if (session) {
    return (
      <div>
        <button
       
          onClick={() => signOut()}
          style={{ color: "white", backgroundColor: "#ed0e3f" }}
          className='active:ring-offset-0 active:ring ring-pink-800  hover:bg-gray-800 duration-200 pb-2 pt-1 px-5 font-medium ml-2 rounded-md'>
          الخروج
        </button>
      </div>
    );
  }

  return (
    <div>
      <button
        onClick={() => signIn()}
        style={{ color: "white", backgroundColor: "#ed0e3f" }}
        className='active:ring-offset-2 active:ring ring-pink-800   duration-200 pb-2 pt-1 px-[2px] sm:px-4 font-normal  rounded-md'>
        تسجيل الدخول
      </button>
    </div>
  );
}

export default Sininout;
