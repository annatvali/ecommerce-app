import Image from 'next/image';
import Link from 'next/link';
import { roboto } from '@/app/ui/fonts';
import RSSchool from './RSSchool';

const AboutUs = () => {
  return (
    <>
      <h1
        className={`${roboto.className} uppercase tracking-wide no-underline hover:no-underline font-bold text-4xl text-center text-blue-900 my-8`}
      >
        About Us
      </h1>
      <div className="flex flex-col max-w-xl items-center mb-8 border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 md:mb-12 md:grid-cols-2 bg-white dark:bg-gray-800 mx-auto">
        <figure className="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 rounded-t-lg md:rounded-t-none md:rounded-ss-lg dark:bg-gray-800 dark:border-gray-700">
          <figcaption className="flex items-center justify-center ">
            <Image
              width={120}
              height={120}
              className="rounded-full w-16 h-16"
              src="/rs-school-CZS_yQWd.webp"
              alt="profile picture"
            ></Image>
            <div className="space-y-0.5 font-medium dark:text-white text-left rtl:text-right ms-3">
              <div>Ana Tvaliashvili</div>
              <div className="text-sm text-gray-500 dark:text-gray-400 ">
                <p>Team Lead /</p>
                <p>Front-end Developer</p>
              </div>
            </div>
          </figcaption>
          <div className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
            <section className="py-2 p-6 rounded-lg shadow-xl mt-4">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white mt-2 border-b pb-2">
                Bio
              </h2>
              <p className="italic text-sm italic text-left text-gray-400 pt-2">
                Greetings! I am a motivated tech enthusiast transitioning into a
                career in technology, currently enrolled in courses at RSSchool
                in front-end development and AWS Cloud Developer training. With
                a strong commitment to self-development, I am eager to leverage
                my skills and knowledge in tech to drive innovative solutions
                and contribute to impactful projects.
              </p>
            </section>
            <section className="py-2">
              <h2 className="text-lg text-left font-semibold text-gray-900 dark:text-white mt-2">
                Contribution
              </h2>
              <ul className="my-4 text-left flex flex-col gap-2">
                <li>
                  - Implemented the Home, Profile, Catalog, Registration, and
                  About Us pages.
                </li>
                <li>
                  - Created the Jira Scrum board with detailed tasks and
                  timelines for each sprint.
                </li>
              </ul>
            </section>
            <section>
              <h2 className="text-lg text-left font-semibold text-gray-900 dark:text-white mt-2">
                Collaboration
              </h2>
              <ul className="my-4 text-left flex flex-col gap-2">
                <li>
                  - Managed the project, including task distribution among team
                  members.
                </li>
                <li>
                  - Actively participated in code reviews and solving merge
                  conflicts.
                </li>
              </ul>
            </section>
            <div className="flex justify-end pt-4">
              <Link
                href="https://github.com/annatvali"
                className="flex items-center space-x-2 text-yellow-500 font-bold dark:text-blue-400 hover:underline"
              >
                <Image
                  width={32}
                  height={32}
                  src="/github-logo.png"
                  alt="github logo"
                ></Image>
                <p>annatvali</p>
              </Link>
            </div>
          </div>
        </figure>
        <figure className="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 md:rounded-se-lg dark:bg-gray-800 dark:border-gray-700">
          <figcaption className="flex items-center justify-center ">
            <Image
              width={120}
              height={120}
              className="rounded-full w-16 h-16"
              src="/rs-school-CZS_yQWd.webp"
              alt="profile picture"
            />
            <div className="space-y-0.5 font-medium dark:text-white text-left rtl:text-right ms-3">
              <div>Nikolai Ivanov</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">
                Front-end Developer
              </div>
            </div>
          </figcaption>
          <div className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
            <section className="py-2">
              <h2 className="text-lg text-left font-semibold text-gray-900 dark:text-white mt-2">
                Contribution
              </h2>
              <ul className="my-4 text-left flex flex-col gap-2">
                <li>- Developed the login and authentication features.</li>
                <li>- Implemented the login page.</li>
              </ul>
            </section>
            <section>
              <h2 className="text-lg text-left font-semibold text-gray-900 dark:text-white mt-2">
                Collaboration
              </h2>
              <ul className="my-4 text-left flex flex-col gap-2">
                <li>
                  - Actively participated in code reviews and solving merge
                  conflicts.
                </li>
              </ul>
            </section>
            <div className="flex justify-end pt-4">
              <Link
                href="https://github.com/NickIvn"
                className="flex items-center space-x-2 text-yellow-500 font-bold dark:text-blue-400 hover:underline"
              >
                <Image
                  width={32}
                  height={32}
                  src="/github-logo.png"
                  alt="github logo"
                ></Image>
                <p>NickIvn</p>
              </Link>
            </div>
          </div>
        </figure>
        <figure className="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 md:rounded-se-lg dark:bg-gray-800 dark:border-gray-700">
          <figcaption className="flex items-center justify-center ">
            <Image
              width={120}
              height={120}
              className="rounded-full w-16 h-16"
              src="/rs-school-CZS_yQWd.webp"
              alt="profile picture"
            />
            <div className="space-y-0.5 font-medium dark:text-white text-left rtl:text-right ms-3">
              <div>Alina Astapchyk</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">
                Front-end Developer
              </div>
            </div>
          </figcaption>
          <div className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
            <section className="py-2">
              <h2 className="text-lg text-left font-semibold text-gray-900 dark:text-white mt-2">
                Contribution
              </h2>
              <ul className="my-4 text-left flex flex-col gap-2">
                <li>- Organized the project structure.</li>
                <li>- Integrated and set up commercetools.</li>
              </ul>
            </section>
            <section>
              <h2 className="text-lg text-left font-semibold text-gray-900 dark:text-white mt-2">
                Collaboration
              </h2>
              <ul className="my-4 text-left flex flex-col gap-2">
                <li>
                  - Participated in the team meeting for sprint-1 and
                  collaborated with team members.
                </li>
              </ul>
            </section>
            <div className="flex justify-end pt-4">
              <Link
                href="https://github.com/astap4"
                className="flex items-center space-x-2 text-yellow-500 font-bold dark:text-blue-400 hover:underline"
              >
                <Image
                  width={32}
                  height={32}
                  src="/github-logo.png"
                  alt="github logo"
                ></Image>
                <p>astap4</p>
              </Link>
            </div>
          </div>
        </figure>
      </div>
      <RSSchool />
    </>
  );
};

export default AboutUs;
