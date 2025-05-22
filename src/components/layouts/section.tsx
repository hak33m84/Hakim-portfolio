'use client';

import { motion } from 'framer-motion';
import React from 'react';

type SectionProps = {
  children: React.ReactNode;
  title: string;
  subtitle: React.ReactNode;
  id?: string;
};

export const Section: React.FC<SectionProps> = ({
  children,
  title,
  subtitle,
  id,
}) => {
  return (
    <div className='custom-container relative py-10 md:py-20' id={id}>
      <motion.div
        className='text-center'
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 0.8 }}
      >
        <p className='text-md-medium md:text-lg-medium text-primary-200 mb-2'>
          {title}
        </p>
        <h2 className='display-md-extrabold md:display-2xl-extrabold text-neutral-25'>
          {subtitle}
        </h2>
      </motion.div>
      <div className='mt-6 md:mt-16'>{children}</div>
    </div>
  );
};
