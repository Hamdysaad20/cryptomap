import React from 'react';
import { useSession, signIn, signOut } from "next-auth/react"

function Sininout(props) {
  const { data: session } = useSession()

  if (session) {
    return (
      <>
<h1  style={{fontFamily:"BalooBhaijaan2",fontWeight:"500" }} className={props.textcolor}>
{session.user.email.substring(0,3)}...{session.user.email.substring(session.user.email.length-10,session.user.email.length)} <br />

</h1>
       <button onClick={() => signOut()}
        style={{color:"white",backgroundColor:"#ed0e3f"}}
        className="active:ring-offset-0 active:ring ring-pink-800 hidden md:inline-block hover:bg-red-800 duration-200 pb-2 pt-1 px-3 font-medium ml-2 rounded-md">الخروج</button>

      </>
    )
  }


  return (<div>

   <button onClick={() => signIn()}
   style={{color:"white",backgroundColor:"#ed0e3f"}}
    className="active:ring-offset-2 active:ring ring-pink-800 hidden md:inline-block hover:bg-red-800 duration-200 pb-2 pt-1 px-3 font-medium ml-2 rounded-md">تسجيل الدخول</button>

  </div>);
}

export default Sininout;
