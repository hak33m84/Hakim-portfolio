'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { Section } from '@/components/layouts/section';
import { Button } from '@/components/ui/button';

import { worksData, worksData1 } from '@/constants/work-data';

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const Working = () => {
  return (
    <Section title='WORKING' subtitle='WHY CHOOSE ME?' id='working'>
      <motion.div
        className='flex-center mt-6 flex w-full flex-wrap gap-12 md:mt-12 md:gap-20'
        variants={containerVariants}
        initial='hidden'
        whileInView='show'
        viewport={{ once: false, amount: 0.3 }}
      >
        <motion.div
          className='mx-4 flex-5 basis-80 md:my-1.5'
          variants={itemVariants}
        >
          <div className='flex-center flex flex-col gap-6 md:gap-8'>
            <motion.h3 className='text-xl-bold md:display-sm-bold text-neutral-25'>
              WORKING WITH ME
            </motion.h3>

            <motion.div variants={itemVariants}>
              <Image
                src='/Images/man.png'
                alt='work-with-me'
                width={80}
                height={80}
                className='size-15 rounded-full bg-neutral-950 md:size-20'
              />
            </motion.div>
          </div>

          <motion.nav className='mt-6 md:mt-8'>
            <motion.ul className='flex flex-col gap-12 md:gap-16'>
              {worksData.map((work, index) => (
                <motion.li
                  key={`${work.list}-${index}`}
                  className='text-md-bold md:text-xl-bold relative flex items-center gap-3'
                >
                  <Image
                    src={work.iconSrc}
                    alt={work.list}
                    width={20}
                    height={1}
                    className='size-6 items-center object-contain md:size-8'
                  />
                  <p>{work.list}</p>
                  {index < worksData.length - 1 && (
                    <div className='absolute -bottom-6 h-0.25 w-full bg-neutral-800 md:-bottom-8' />
                  )}
                </motion.li>
              ))}
            </motion.ul>
          </motion.nav>
        </motion.div>

        <motion.div
          className='mx-4 flex-5 basis-80 md:my-1.5'
          variants={itemVariants}
        >
          <div className='flex-center top-0 flex flex-col gap-6 md:gap-8'>
            <motion.h3
              className='text-xl-bold md:display-sm-bold text-neutral-25'
              variants={itemVariants}
            >
              ANOTHER TALENT
            </motion.h3>

            <motion.div variants={itemVariants}>
              <Image
                src='/Images/other-man.png'
                alt='other-talent'
                width={80}
                height={80}
                className='size-15 rounded-full bg-neutral-950 md:size-20'
              />
            </motion.div>
          </div>

          <motion.nav className='mt-6 md:mt-8'>
            <motion.ul className='flex flex-col gap-12 md:gap-16'>
              {worksData1.map((work, index) => (
                <motion.li
                  key={`${work.list}-${index}`}
                  className='text-md-regular md:display-xs-regular relative flex items-center gap-3 text-neutral-400'
                >
                  <Image
                    src={work.iconSrc}
                    alt={work.list}
                    width={20}
                    height={1}
                    className='size-6 items-center object-contain md:size-8'
                  />
                  <p>{work.list}</p>
                  {index < worksData1.length - 1 && (
                    <div className='absolute -bottom-6 h-0.25 w-full bg-neutral-800 md:-bottom-8' />
                  )}
                </motion.li>
              ))}
            </motion.ul>
          </motion.nav>
        </motion.div>
      </motion.div>

      <motion.div
        className='mt-6 w-full md:mx-120 md:mt-12 md:w-60'
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6, duration: 0.6 }}
      >
        <Button asChild>
          <Link href='#contact'>HIRE ME</Link>
        </Button>
      </motion.div>
    </Section>
  );
};

export default Working;
