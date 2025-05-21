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
    description:
      'Implemented a Todo List application featuring complete CRUD functionalities using React JS and Axios, styled with CSS Modules for modular and maintainable design. Integrated infinite scroll and data fetching on viewport using Intersection Observer API to enhance performance and ensure a fast-loading user experience. Configured and consumed RESTful APIs documented with Swagger.',
    href: 'https://to-do-list-ten-umber-64.vercel.app/',
  },
  {
    imageSrc: project2,
    name: 'Company Profile Website',
    description:
      'Built a professional company profile website with a responsive design that works seamlessly on both mobile and desktop. The project was developed using Next.js and styled with Tailwind CSS, combining modern layout techniques like Flexbox, Grid, and clamp for flexible and clean design. Used Shadcn UI components, and added smooth skew animations with Framer Motion.',
    href: 'https://company-profile-rho-silk.vercel.app/',
  },
];
