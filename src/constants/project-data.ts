import { StaticImageData } from 'next/image';

import project1 from '../../public/Images/work-1.png';
import project2 from '../../public/Images/work-2.png';

type Project = {
  imageSrc: StaticImageData;
  name: string;
  description: string;
  href: string;
};

export const projectsData: Project[] = [
  {
    imageSrc: project1,
    name: 'Todo List App',
    description: 'Implementation of todo list with CRUD features.',
    href: 'https://to-do-list-ten-umber-64.vercel.app/',
  },
  {
    imageSrc: project2,
    name: 'Company Profile Website',
    description:
      'Profesional company profile website with responsive design. Using Next.js, Shadcn UI, Framer Motion and Tailwind CSS.',
    href: 'https://company-profile-rho-silk.vercel.app/',
  },
];
