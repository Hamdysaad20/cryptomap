import Head from "next/head";
import NavNavbarMobol from "../components/NavNavbarMobol";

export default function Home() {
  return (
    <div className='relative h-screen '>
      <Head>
        <title>CryptoMap</title>
        <meta
          name='description'
          content='منصة عربية لمحبين العملات الرقمية والثقافة المالية والاخبار الجديدة في سوق المال العالمي مجمعة من جميع انحاء العالم في مصدر واحد وباللغة العربية cryptomap كريبتوماب هو صديقك المالي ومهمتنا ان نجعل الثقافة المالية ممتعة وتركيزنا يكون اكثر عن العملات الرقمية و nfts والربح منها وكيف تعمل '
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <NavNavbarMobol
        className='sticky top-0 overflow-hidden'
        home='border-b-4 border-red-500'
      />
    </div>
  );
}
