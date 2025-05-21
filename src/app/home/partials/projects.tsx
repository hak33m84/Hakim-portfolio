import { StaticImageData } from 'next/image';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { Section } from '@/components/layouts/section';

import { projectsData } from '@/constants/project-data';

const Projects = () => {
  return (
    <Section id='projects' title='PORTFOLIO' subtitle='SELECTED WORK'>
      <Cards>
        {projectsData.map((project, index) => (
          <Card
            key={`${project.name}-${index}`}
            name={<Link href={project.href}>{project.name}</Link>}
            description={project.description}
            imageSrc={project.imageSrc}
            href={project.href}
          />
        ))}
      </Cards>
    </Section>
  );
};

export default Projects;

type CardsProps = {
  children: React.ReactNode;
};

const Cards: React.FC<CardsProps> = ({ children }) => {
  return <div className='flex flex-wrap gap-8 md:gap-5'>{children}</div>;
};

type CardProps = {
  imageSrc: StaticImageData;
  name: React.ReactNode;
  description: string;
  href: string;
};

const Card: React.FC<CardProps> = ({ imageSrc, name, description, href }) => {
  return (
    <div className='flex-1 basis-80 overflow-y-auto bg-scroll'>
      <Link href={href} target='_blank'>
        <Image
          src={imageSrc}
          alt={typeof name === 'string' ? name : 'Project Image'}
          className='aspect-square cursor-pointer rounded-2xl object-cover duration-500 hover:scale-90 md:rounded-3xl'
        />
      </Link>
      <h4 className='text-lg-bold text-neutral-25 md:display-xs-bold mt-3 md:mt-4'>
        {name}
      </h4>
      <p className='text-sm-regular md:text-md-regular mt-3 line-clamp-5 text-neutral-400 md:mt-4'>
        {description}
      </p>
    </div>
  );
};
