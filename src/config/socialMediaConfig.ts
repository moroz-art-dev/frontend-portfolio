import {FaEnvelope, FaGithub, FaLinkedin, FaTelegram} from 'react-icons/fa';
import {SiCodewars, SiCoursera} from 'react-icons/si';

export const socialMediaLinks = [
  {
    href: 'mailto:moroz.art.dev@gmail.com',
    ariaLabel: 'Email',
    icon: FaEnvelope,
    text: 'moroz.art.dev@gmail.com',
  },
  {
    href: 'https://linkedin.com/in/moroz-art-dev',
    ariaLabel: 'LinkedIn',
    icon: FaLinkedin,
    text: 'linkedin.com/in/moroz-art-dev',
  },
  {
    href: 'https://t.me/ArtDecember',
    ariaLabel: 'Telegram',
    icon: FaTelegram,
    text: '@ArtDecember',
  },
  {
    href: 'https://github.com/moroz-art-dev',
    ariaLabel: 'Github',
    icon: FaGithub,
    text: 'github.com/moroz-art-dev',
  },
];

export const additionalMediaLinks = [
  {
    href: 'https://coursera.org',
    ariaLabel: 'Coursera',
    icon: SiCoursera,
    text: '',
  },
  {
    href: 'https://codewars.com',
    ariaLabel: 'Codewars',
    icon: SiCodewars,
    text: '',
  },
];
