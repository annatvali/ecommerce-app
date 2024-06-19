import Link from 'next/link';
import Image from 'next/image';

const RSSchool = () => {
  return (
    <div className="flex justify-center mb-8">
      <Link href={'https://rs.school/'}>
        <Image
          src="/RSSchool-logo.svg"
          alt="RSSchool logo"
          width={200}
          height={200}
        />
      </Link>
    </div>
  );
};

export default RSSchool;
