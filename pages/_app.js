import { SessionProvider } from "next-auth/react";
import Footermain from "../components/FooterMain";
import NavBar from "../components/NavBar";
import "../styles/globals.css";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <SessionProvider
      session={session}
      // Re-fetch session every 5 minutes
      refetchInterval={5 * 60}>
      <NavBar className='sticky top-0 overflow-hidden' />
      <Component {...pageProps} />
      <Footermain className='bottom-0 absolute w-full' />
    </SessionProvider>
  );
}
