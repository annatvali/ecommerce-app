export interface TeamMemberProps {
  name: string;
  role: string;
  bio?: string;
  contributions: string[];
  collaborations: string[];
  githubUsername: string;
  profilePictureUrl: string;
}

export const teamMembers: TeamMemberProps[] = [
  {
    name: 'Ana Tvaliashvili',
    role: 'Team Lead / Front-end Developer',
    bio: 'Greetings! I am a motivated tech enthusiast transitioning into a career in technology, currently enrolled in courses at RSSchool in front-end development and AWS Cloud Developer training. With a strong commitment to self-development, I am eager to leverage my skills and knowledge in tech to drive innovative solutions and contribute to impactful projects.',
    contributions: [
      'Implemented the Home, Profile, Catalog, Registration, and About Us pages.',
      'Created the Jira Scrum board with detailed tasks and timelines for each sprint.',
    ],
    collaborations: [
      'Managed the project, including task distribution among team members.',
      'Actively participated in code reviews and solving merge conflicts.',
    ],
    githubUsername: 'annatvali',
    profilePictureUrl: '/rs-school-CZS_yQWd.webp',
  },
  {
    name: 'Nikolai Ivanov',
    role: 'Front-end Developer',
    contributions: [
      'Developed the login and authentication features.',
      'Implemented the login page.',
    ],
    collaborations: [
      'Actively participated in code reviews and solving merge conflicts.',
    ],
    githubUsername: 'NickIvn',
    profilePictureUrl: '/rs-school-CZS_yQWd.webp',
  },
  {
    name: 'Alina Astapchyk',
    role: 'Front-end Developer',
    contributions: [
      'Organized the project structure.',
      'Integrated and set up commercetools.',
    ],
    collaborations: [
      'Participated in the team meeting for sprint-1 and collaborated with team members.',
    ],
    githubUsername: 'astap4',
    profilePictureUrl: '/rs-school-CZS_yQWd.webp',
  },
];
