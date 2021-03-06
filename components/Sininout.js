import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";

function Sininout(props) {
  const { data: session } = useSession();

  if (session) {
    return (
      <>
        <h1
          className='sm:hidden'
          style={{ fontFamily: "BalooBhaijaan2", fontWeight: "500" }}
          className={props.textcolor}>
          {session.user.email.substring(0, 3)}...
          {session.user.email.substring(
            session.user.email.length - 10,
            session.user.email.length
          )}{" "}
          <br />
        </h1>
        <h1
          className='sm:hidden ml-1'
          style={{ color: "black", fontWeight: 800 }}>
          سوف نفتقدك🥺{" "}
        </h1>

        <button
          onClick={() => signOut()}
          style={{ color: "white", backgroundColor: "#ed0e3f" }}
          className='active:ring-offset-0 active:ring ring-pink-800  hover:bg-gray-800 duration-200 pb-2 pt-1 px-3 font-medium ml-2 rounded-md'>
          الخروج
        </button>
      </>
    );
  }

  return (
    <div>
      <h1 className='ml-4' style={{ color: "black", fontWeight: 800 }}>
        {" "}
        مرحبا بك👋
      </h1>

      <button
        onClick={() => signIn()}
        style={{ color: "white", backgroundColor: "#ed0e3f" }}
        className='active:ring-offset-2 active:ring ring-pink-800   duration-200 pb-2 pt-1 px-3 font-medium ml-2 rounded-md'>
        تسجيل الدخول
      </button>
    </div>
  );
}

export default Sininout;
