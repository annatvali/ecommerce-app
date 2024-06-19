import Image from 'next/image';
import Link from 'next/link';
import { TeamMemberProps } from './teamInfo';

const TeamMember: React.FC<TeamMemberProps> = ({
  name,
  role,
  bio,
  contributions,
  collaborations,
  githubUsername,
  profilePictureUrl,
}) => (
  <figure className="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 md:rounded-se-lg dark:bg-gray-800 dark:border-gray-700">
    <figcaption className="flex items-center justify-center ">
      <Image
        width={120}
        height={120}
        className="rounded-full w-16 h-16"
        src={profilePictureUrl}
        alt="profile picture"
      />
      <div className="space-y-0.5 font-medium dark:text-white text-left rtl:text-right ms-3">
        <div>{name}</div>
        <div className="text-sm text-gray-500 dark:text-gray-400">{role}</div>
      </div>
    </figcaption>
    {bio && (
      <div className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
        <section className="py-2 p-6 rounded-lg shadow-xl mt-4">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white mt-2 border-b pb-2">
            Bio
          </h2>
          <p className="italic text-sm italic text-left text-gray-400 pt-2">
            {bio}
          </p>
        </section>
      </div>
    )}
    <section className="py-2 flex-col w-full">
      <h2 className="text-lg text-left font-semibold text-gray-900 dark:text-white mt-2">
        Contribution
      </h2>
      <ul className="my-4 text-left flex flex-col gap-2">
        {contributions.map((contribution, index) => (
          <li key={index}>- {contribution}</li>
        ))}
      </ul>
    </section>
    <section>
      <h2 className="text-lg text-left font-semibold text-gray-900 dark:text-white mt-2">
        Collaboration
      </h2>
      <ul className="my-4 text-left flex flex-col gap-2">
        {collaborations.map((collaboration, index) => (
          <li key={index}>- {collaboration}</li>
        ))}
      </ul>
    </section>
    <div className="flex justify-end pt-4">
      <Link
        href={`https://github.com/${githubUsername}`}
        className="flex items-center space-x-2 text-yellow-500 font-bold dark:text-blue-400 hover:underline"
      >
        <Image
          width={32}
          height={32}
          src="/github-logo.png"
          alt="github logo"
        ></Image>
        <p>{githubUsername}</p>
      </Link>
    </div>
  </figure>
);

export default TeamMember;
