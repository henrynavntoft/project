import Head from "next/head";
import Image from "next/image";

export default function Dogs({ data }) {
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

export async function getStaticProps(context) {
  const slug = context.params.slug;
  const API = "https://bucolic-bombolone-857476.netlify.app/api/dogs/" + slug;
  const res = await fetch(API);

  if (res.status != 200) {
    return {
      notFound: true,
    };
  }

  const data = await res.json();

  return {
    props: {
      data,
    },
  };
}

export async function getStaticPaths() {
  const API = "https://bucolic-bombolone-857476.netlify.app/api/dogs";
  const res = await fetch(API);
  const data = await res.json();
  const paths = data.map((object) => {
    return { params: { slug: object.slug } };
  });

  return {
    paths,
    fallback: false,
  };
}
