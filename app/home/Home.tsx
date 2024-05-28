import Image from 'next/image';

const Home = (): JSX.Element => {
  return (
    <div className="p-8">
      <h1 className="flex justify-center items-center text-4xl mt-8">
        Home Page content
      </h1>
      <Image
        src="./next.svg"
        width={1920}
        height={1080}
        alt="Dummy Page Image"
      />
      <Image
        src="./vercel.svg"
        width={1920}
        height={1080}
        alt="Dummy Page Image"
      />
    </div>
  );
};

export default Home;
