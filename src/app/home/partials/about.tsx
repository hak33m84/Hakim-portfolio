'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';

import DecorationBox from '@/components/layouts/decorationBox';
import { Section } from '@/components/layouts/section';

const About = () => {
  return (
    <Section
      title='ABOUT ME'
      subtitle={
        <>
          CRAFTING SEAMLESS <br />
          <span className='text-primary-200'>HIGH-PERFORMANCE WEB</span> <br />
          EXPERIENCES
        </>
      }
      id='about'
    >
      <motion.p
        className='text-md-medium md:text-xl-medium mx-auto text-center text-neutral-400 max-md:mb-10'
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 0.6 }}
      >
        I love turning designs into interactive, high-performance websites. With
        a keen eye for detail and a deep understanding of frontend technologies,
        I create smooth and visually appealing user experiences.
      </motion.p>

      <div className='relative flex-wrap max-md:mb-50 max-md:flex'>
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <DecorationBox className='absolute -bottom-65 -left-10 z-10 h-[4.3rem] w-[6.45rem] rotate-90 md:top-0 md:-left-42 md:h-[5.75rem] md:w-[8.625rem]' />
        </motion.div>

        <motion.div
          initial={{ rotate: -10, opacity: 0, scale: 0.9 }}
          whileInView={{ rotate: 0, opacity: 1, scale: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
        >
          <Image
            src='/Images/web-1.jpg'
            alt='web-1'
            width={238}
            height={178}
            className='absolute -z-10 h-31.75 w-42.5 max-md:left-4 md:-top-112.5 md:left-32.5 md:h-44.5 md:w-59.5'
          />
        </motion.div>

        <motion.div
          initial={{ rotate: -10, opacity: 0, scale: 0.9 }}
          whileInView={{ rotate: 0, opacity: 1, scale: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
        >
          <Image
            src='/Images/web-3.jpg'
            alt='web-3'
            width={250}
            height={187}
            className='absolute -z-10 h-24.75 w-33.5 max-md:top-11.25 max-md:right-2.75 md:-top-104 md:right-15 md:h-46.75 md:w-62.5'
          />
        </motion.div>

        <motion.div
          initial={{ rotate: -10, opacity: 0, scale: 0.9 }}
          whileInView={{ rotate: 0, opacity: 1, scale: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8, delay: 0.6, ease: 'easeOut' }}
        >
          <Image
            src='/Images/web-2.jpg'
            alt='web-2'
            width={117}
            height={88}
            className='absolute z-10 h-25 w-33 max-md:top-41 max-md:left-30 md:-top-43 md:right-82 md:h-22 md:w-29.25'
          />
        </motion.div>
      </div>
    </Section>
  );
};

export default About;
