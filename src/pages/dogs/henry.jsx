import Head from "next/head";
import Image from "next/image";

export default function Henry({ data }) {
  const { content } = data;
  return (
    <>
      <Head>
        <title>{data.title}</title>
      </Head>
      <h1>{content.heading}</h1>
      <p>{content.text}</p>
      <Image
        src={content.image.src}
        alt={content.image.alt}
        width={content.image.width}
        height={content.image.height}
      />
    </>
  );
}

export async function getStaticProps() {
  const API = "https://bucolic-bombolone-857476.netlify.app/api/dogs/henry";
  const res = await fetch(API);
  const data = await res.json();
  console.log(data);

  return {
    props: {
      data, // This is shorthand for "data: data"
    },
  };
}
