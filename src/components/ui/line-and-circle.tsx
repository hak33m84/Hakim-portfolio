import { useAnimation, motion } from 'framer-motion';
import React from 'react';
import { useInView } from 'react-intersection-observer';

type LineAndCircleProps = {
  index: number;
  isLargeIsh: boolean;
  lastItem?: boolean;
};

const LineAndCircle: React.FC<LineAndCircleProps> = ({ index, lastItem }) => {
  const { ref, inView } = useInView({ threshold: 1, triggerOnce: true });
  const lineControls = useAnimation();

  React.useEffect(() => {
    if (inView) {
      lineControls.start({ height: '102%' });
    }
  }, [inView, lineControls]);
  return (
    <div className='relative'>
      <div ref={ref}>
        {!lastItem && (
          <motion.div
            className='absolute top-1/2 left-1/2 h-[calc(100%)] w-0.25 -translate-x-1/2 transform bg-gradient-to-r from-[#91FF02] to-[#609120] group-first:top-1/2'
            initial={{ height: 0 }}
            animate={lineControls}
            whileInView={{ height: `102%` }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 1, delay: index * 0.8, ease: 'easeOut' }}
          />
        )}

        {/* index circle */}
        <span className='flex-center bg-base-black text-primary-200 md:text-md-bold text-sm-bold group-second:top-1/4 border-primary-200 absolute inset-x-0 top-1/2 aspect-square -translate-y-1/2 rounded-full border'>
          {index}
        </span>
      </div>
    </div>
  );
};

export default LineAndCircle;
