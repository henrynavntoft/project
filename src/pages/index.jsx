import Anchor from "@/components/Anchor";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home page</title>
      </Head>
      <h1>hello home</h1>
      <Anchor href="/dogs/henry">henry page</Anchor>
    </>
  );
}
