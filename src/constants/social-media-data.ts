import { StaticImageData } from 'next/image';

import iconFacebook from '../../public/Icons/fb.png';
import iconGithub from '../../public/Icons/github.png';
import iconLinkedin from '../../public/Icons/linkedin.svg';

type Icon = {
  href: string;
  icon: StaticImageData;
  alt: string;
};

export const socialMediaData: Icon[] = [
  {
    href: 'https://www.facebook.com/budihakimsantoso',
    icon: iconFacebook,
    alt: 'facebook',
  },
  {
    href: 'https://www.linkedin.com/in/budi-hakim/',
    icon: iconLinkedin,
    alt: 'linkedin',
  },
  {
    href: 'https://github.com/hak33m84',
    icon: iconGithub,
    alt: 'instagram',
  },
];
