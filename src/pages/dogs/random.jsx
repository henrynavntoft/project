export default function RandomDog({ imgURL }) {
  return (
    <>
      <h1>Random Dog</h1>
      <img src={imgURL} alt="Random Dog" />
    </>
  );
}

export async function getServerSideProps() {
  const API = "https://dog.ceo/api/breeds/image/random";
  const res = await fetch(API);
  const data = await res.json();
  console.log(data);

  return {
    props: {
      imgURL: data.message,
    },
  };
}
