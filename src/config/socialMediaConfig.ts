import {FaEnvelope, FaTelegramPlane} from 'react-icons/fa';
import {FaLinkedinIn} from 'react-icons/fa6';
import {FiGithub} from 'react-icons/fi';
import {MdOutlineDescription} from 'react-icons/md';
import {SiCodewars, SiCoursera} from 'react-icons/si';

export const socialMediaLinks = [
  {
    href: 'mailto:moroz.art.dev@gmail.com',
    ariaLabel: 'Email',
    icon: FaEnvelope,
    text: 'moroz.art.dev@gmail.com',
    color: '#D44638',
  },
  {
    href: 'https://linkedin.com/in/moroz-art-dev',
    ariaLabel: 'LinkedIn',
    icon: FaLinkedinIn,
    text: 'linkedin.com/in/moroz-art-dev',
    color: '#0077B5',
  },
  {
    href: 'https://t.me/ArtDecember',
    ariaLabel: 'Telegram',
    icon: FaTelegramPlane,
    text: '@ArtDecember',
    color: '#0088cc',
  },
  {
    href: 'https://github.com/moroz-art-dev',
    ariaLabel: 'Github',
    icon: FiGithub,
    text: 'github.com/moroz-art-dev',
    color: '#181717',
  },
  {
    href: 'https://raw.githubusercontent.com/moroz-art-dev/materials/main/cv/CV_Artem_Moroz.pdf',
    ariaLabel: 'CV',
    icon: MdOutlineDescription,
    text: 'CV_Artem_Moroz.pdf',
    color: '#2ECC71',
  },
];

export const additionalMediaLinks = [
  {
    href: 'https://coursera.org',
    ariaLabel: 'Coursera',
    icon: SiCoursera,
    text: '',
    color: '#0056D2',
  },
  {
    href: 'https://codewars.com',
    ariaLabel: 'Codewars',
    icon: SiCodewars,
    text: '',
    color: '#B1361E',
  },
];
