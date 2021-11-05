import Head from "next/head";
import {
  HomepageCarousel,
  HomepageFeatures,
  HomepageMain,
  HomepageQuotes,
  HomepageSubscribe,
  HomepageSysreq,
} from "../components";

export default function Home() {
  return (
    <>
      <Head>
        <title>Binar Game</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomepageMain />
      <HomepageCarousel />
      <HomepageFeatures />
      <HomepageSysreq />
      <HomepageQuotes />
      <HomepageSubscribe />
    </>
  );
}
