import Head from "next/head";
import Image from "next/image";

export default function Henry() {
  return (
    <>
      <Head>
        <title>Henry Page</title>
      </Head>
      <h1>Henry the dawg</h1>
      <Image
        src="https://images.unsplash.com/photo-1583511655857-d19b40a7a54e"
        alt="Cute dog"
        width="400"
        height="232"
      />
    </>
  );
}
