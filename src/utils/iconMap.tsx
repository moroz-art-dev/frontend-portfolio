// src/utils/iconMap.ts
import {DiMaterializecss, DiSass} from 'react-icons/di';
import {FaCss3Alt, FaHtml5, FaOpencart, FaReact} from 'react-icons/fa';
import {IoLogoJavascript} from 'react-icons/io';
import {
  SiAdobephotoshop,
  SiAxios,
  //SiBitrix,
  SiBootstrap,
  SiChakraui,
  SiEslint,
  SiFigma,
  SiFilezilla,
  //SiFoundation,
  SiGimp,
  SiGithub,
  SiGnubash,
  //SiGpt3,
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

// Map icon names to React icons
const iconMap: {[key: string]: React.ReactNode} = {
  // Front-end Languages
  HTML: <FaHtml5 />,
  CSS: <FaCss3Alt />,
  JavaScript: <IoLogoJavascript />,
  TypeScript: <SiTypescript />,

  // Front-end Frameworks & Libraries
  React: <FaReact />,
  Redux: <SiRedux />,
  'Redux Toolkit': <SiRedux />,
  'Redux Saga': <SiReduxsaga />,
  MobX: <SiMobx />,
  'React Hooks': <FaReact />, // Placeholder icon
  'React Hook Form': <FaReact />, // Placeholder icon
  'Next.js': <SiNextdotjs />,

  // Other Frontend Technologies
  XML: <FaReact />, // Placeholder icon
  HTML5: <FaHtml5 />,
  SASS: <DiSass />,
  SCSS: <DiSass />,
  CamelCase: <FaReact />, // Placeholder icon
  BEM: <FaReact />, // Placeholder icon

  // JavaScript Tools & Libraries
  Promises: <FaReact />, // Placeholder icon
  'Async/await': <FaReact />, // Placeholder icon
  JSON: <SiJson />,
  'ES6+': <FaReact />, // Placeholder icon
  Fetch: <FaReact />, // Placeholder icon
  Axios: <SiAxios />,
  Jest: <SiJest />,

  // Developer Tools & Deployment
  'GooglePageSpeed Tools': <SiPagespeedinsights />,
  //'Chrome/React/Redux DevTools': <FaReact />,
  //Remmina: <FaReact />,
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
  //'GPT-3': <SiGpt3 />,
  Vercel: <SiVercel />,
  Webpack: <SiWebpack />,
  npm: <SiNpm />,
  yarn: <SiYarn />,

  // UI Libraries and Frameworks
  'MUI (Material-UI)': <SiMui />,
  MaterializeCSS: <DiMaterializecss />,
  Bootstrap: <SiBootstrap />,
  //Foundation: <SiFoundation />,
  'Chakra UI': <SiChakraui />,

  // Content Management Systems & E-commerce
  //Bitrix: <SiBitrix />,
  //'Bitrix API': <FaReact />,
  WordPress: <SiWordpress />,
  OpenCart: <FaOpencart />,
  Joomla: <SiJoomla />,
};

export default iconMap;
