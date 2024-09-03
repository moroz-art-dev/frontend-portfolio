import Image from 'next/image';
import React from 'react';
import {DiMaterializecss, DiSass} from 'react-icons/di';
import {
  FaCertificate,
  FaCss3Alt,
  FaHtml5,
  FaOpencart,
  FaReact,
} from 'react-icons/fa';
import {IoLogoJavascript} from 'react-icons/io';
import {
  SiAdobephotoshop,
  SiAxios,
  SiBootstrap,
  SiChakraui,
  SiEslint,
  SiFigma,
  SiFilezilla,
  SiGimp,
  SiGithub,
  SiGnubash,
  SiJest,
  SiJoomla,
  SiJson,
  SiMobx,
  SiMui,
  SiNextdotjs,
  SiNpm,
  SiPagespeedinsights,
  SiPrettier,
  SiRedux,
  SiReduxsaga,
  SiStylelint,
  SiTypescript,
  SiVercel,
  SiWebpack,
  SiWordpress,
  SiYarn,
} from 'react-icons/si';

import {getIconPath} from '@utils/getIconPath';

const reactIconMap: {[key: string]: React.ReactNode} = {
  HTML: <FaHtml5 />,
  CSS: <FaCss3Alt />,
  JavaScript: <IoLogoJavascript />,
  TypeScript: <SiTypescript />,
  React: <FaReact />,
  Redux: <SiRedux />,
  'Redux Toolkit': <SiRedux />,
  'Redux Saga': <SiReduxsaga />,
  MobX: <SiMobx />,
  'Next.js': <SiNextdotjs />,
  HTML5: <FaHtml5 />,
  SASS: <DiSass />,
  SCSS: <DiSass />,
  JSON: <SiJson />,
  Axios: <SiAxios />,
  Jest: <SiJest />,
  'GooglePageSpeed Tools': <SiPagespeedinsights />,
  FileZilla: <SiFilezilla />,
  Bash: <SiGnubash />,
  Photoshop: <SiAdobephotoshop />,
  Figma: <SiFigma />,
  Gimp: <SiGimp />,
  Git: <SiGithub />,
  GitHub: <SiGithub />,
  ESLint: <SiEslint />,
  Stylelint: <SiStylelint />,
  Prettier: <SiPrettier />,
  Vercel: <SiVercel />,
  Webpack: <SiWebpack />,
  npm: <SiNpm />,
  yarn: <SiYarn />,
  'MUI (Material-UI)': <SiMui />,
  MaterializeCSS: <DiMaterializecss />,
  Bootstrap: <SiBootstrap />,
  'Chakra UI': <SiChakraui />,
  WordPress: <SiWordpress />,
  OpenCart: <FaOpencart />,
  Joomla: <SiJoomla />,
  Certificate: <FaCertificate />,
};

const getIcon = (techName: string, imageBaseUrl: string): React.ReactNode => {
  const iconPath = getIconPath(techName, imageBaseUrl);

  if (iconPath) {
    return (
      <Image
        style={{fontSize: 24}}
        src={iconPath}
        alt={techName}
        width={24}
        height={24}
      />
    );
  }

  if (reactIconMap[techName]) {
    return reactIconMap[techName];
  }

  return null;
};

export default getIcon;
