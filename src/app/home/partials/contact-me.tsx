'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import DecorationBox from '@/components/layouts/decorationBox';

import { socialMediaData } from '@/constants/social-media-data';

import ContactForm from './contact-form';

const ContactMe = () => {
  return (
    <section
      className='custom-container relative flex flex-wrap gap-10 md:gap-30.5 md:pt-20 md:pb-30'
      id='contact'
    >
      <DecorationBox className='absolute top-0 left-0 z-10 h-[4.3rem] w-[6.45rem] rotate-180 md:top-0 md:-left-25 md:h-[5.75rem] md:w-[8.625rem]' />

      <motion.div
        className='relative overflow-hidden'
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 0.8 }}
      >
        {/* Man Image */}
        <div className='relative mx-auto gap-4 md:gap-6'>
          <Image
            src='/Images/man-contact12.png'
            alt='man'
            width={421}
            height={640}
            className='mix-blend-luminosity'
          />
          <div className='absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent' />
        </div>

        {/* Social Media */}
        <motion.div
          className='bg-base-transparent absolute right-0 bottom-0 z-10 flex w-full flex-col items-center gap-4 md:gap-6'
          initial='hidden'
          whileInView='visible'
          viewport={{ once: false }}
          variants={{
            visible: { transition: { staggerChildren: 0.15 } },
            hidden: {},
          }}
        >
          <div className='flex flex-wrap gap-4 md:gap-6'>
            {socialMediaData.map((data, index) => (
              <motion.div
                key={data.alt}
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link
                  href={data.href}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='flex-center bg-base-black aspect-square size-12 rounded-full border border-neutral-800 p-2.5 duration-500 hover:scale-125 md:size-16'
                >
                  <Image
                    src={data.icon}
                    alt={data.alt}
                    className='h-3/4 w-auto'
                  />
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div
            className='flex flex-col gap-2'
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: false }}
          >
            <p className='text-md-bold md:text-xl-bold text-neutral-25 text-center'>
              Budi Hakim
            </p>
            <div className='flex-center gap-3'>
              <Image
                src='/Icons/green-dot.png'
                alt='dot'
                width={12}
                height={12}
              />
              <p className='text-sm-semibold md:text-md-semibold text-neutral-400'>
                Available for Work
              </p>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Contact Form */}
      <motion.div
        className='flex w-fit flex-col py-10'
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        viewport={{ once: false }}
      >
        <p className='text-md-medium md:text-lg-medium text-primary-200 mb:2'>
          CONTACT
        </p>
        <h2 className='display-md-extrabold md:display-2xl-extrabold text-neutral-25 mb-6 md:mb-12'>
          LET’S GET IN TOUCH
        </h2>
        <ContactForm />
      </motion.div>
    </section>
  );
};

export default ContactMe;
