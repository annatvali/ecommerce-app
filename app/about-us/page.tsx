import RSSchool from './RSSchool';
import TeamMember from './TeamMember';
import { teamMembers } from './teamInfo';
import { roboto } from '../ui/fonts';

const AboutUs = () => {
  return (
    <>
      <h1
        className={`${roboto.className} uppercase tracking-wide no-underline hover:no-underline font-bold text-4xl text-center text-blue-900 my-8`}
      >
        About Us
      </h1>
      <div className="flex flex-col max-w-xl items-center mb-8 border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 md:mb-12 md:grid-cols-2 bg-white dark:bg-gray-800 mx-auto">
        {teamMembers.map((member, index) => (
          <TeamMember key={index} {...member} />
        ))}
      </div>
      <RSSchool />
    </>
  );
};

export default AboutUs;
