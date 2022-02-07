import Head from "next/head";
import NavNavbarMobol from "../components/NavNavbarMobol";
import Blogs from "../components/blogs";

export default function Home() {
  return (
    <div className='relative h-screen  '>
      <Head>
        <title>CryptoMap</title>
        <script
          async
          src='https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3704254540700382'
          crossorigin='anonymous'></script>

        <meta
          name='description'
          content='منصة عربية لمحبين العملات الرقمية والثقافة المالية والاخبار الجديدة في سوق المال العالمي مجمعة من جميع انحاء العالم في مصدر واحد وباللغة العربية cryptomap كريبتوماب هو صديقك المالي ومهمتنا ان نجعل الثقافة المالية ممتعة وتركيزنا يكون اكثر عن العملات الرقمية و nfts والربح منها وكيف تعمل '
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <NavNavbarMobol
        className=' sticky top-0 overflow-hidden'
        home='border-b-4 border-red-500'
      />
      <div className='max-w-7xl'>
        <div className=''>
          <h1
            style={{
              fontFamily: "BalooBhaijaan2",
              fontWeight: "800",
              textShadow:
                "0 15px 30px rgba(0,0,0,0.11), 0 5px 15px rgba(0,0,0,0.08)",
            }}
            className='text-right text-4xl mt-4 px-4 pt-4'>
            افضل المقالات
          </h1>
          <hr className='' />
        </div>
        <div className='px-12 w-full mt-12 hidden sm:inline-block  h-[360px] overflow-x-scroll overflow-y-hidden    '>
          <div className=' sm:mx-8 flex grid-cols-5  justify-center item-center '>
            <Blogs className='' />
            <Blogs className='' />
            <Blogs className='' />
            <Blogs className='' />
            <Blogs className='' />
          </div>
        </div>
      </div>
    </div>
  );
}
