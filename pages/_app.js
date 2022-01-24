import { SessionProvider } from "next-auth/react"
import '../styles/globals.css'

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <SessionProvider
      session={session}
      // Re-fetch session every 5 minutes
      refetchInterval={5 * 60}
    >
      <Component {...pageProps} />
    </SessionProvider>
  )
}