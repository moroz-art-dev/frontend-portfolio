import {IMAGE_ICONS_URL, IMAGE_STACK_URL} from '@config/constants';

interface IconMap {
  [key: string]: string | null;
}

const ICONS_SPECIAL_LIST = ['codewars', 'ibm', 'linkedin', 'meta', 'scrimba'];

const iconMap: IconMap = {
  html: 'html.svg',
  css: 'css.svg',
  javascript: 'js.svg',
  typescript: 'typescript.svg',
  sass: 'sass.svg',
  scss: 'scss.svg',
  less: 'less.svg',
  bem: 'bem.svg',
  xml: 'xml.svg',
  react: 'react.svg',
  redux: 'redux.svg',
  'rtk-query': 'redux.svg',
  'redux-saga': 'redux-saga.svg',
  'redux-thunk': 'redux.svg',
  mobx: 'mobx.svg',
  'react-hook-form': 'react-hook-form.svg',
  formik: 'formik.svg',
  'next.js': 'next.svg',
  es6: 'es6.svg',
  promises: 'promises.svg',
  json: 'json.svg',
  axios: 'axios.svg',
  jest: 'jest.svg',
  i18next: 'i18next.svg',
  'next-intl': 'next-intl.svg',
  lodash: 'lodash.svg',
  'ant-design': 'antd.svg',
  'mui-material-ui': 'mui.svg',
  fontawesome: 'fontawesome.svg',
  vite: 'vite.svg',
  'tailwind-css': 'tailwind-css.svg',
  materializecss: 'materialize.svg',
  bootstrap: 'bootstrap.svg',
  foundation: 'foundation.svg',
  'chakra-ui': 'chakra.svg',
  git: 'git.svg',
  github: 'github.svg',
  gitlab: 'gitlab.svg',
  npm: 'npm.svg',
  yarn: 'yarn.svg',
  webpack: 'webpack.svg',
  'create-react-app': 'cra.svg',
  craco: 'craco.svg',
  eslint: 'eslint.svg',
  stylelint: 'stylelint.svg',
  prettier: 'prettier.svg',
  vercel: 'vercel.svg',
  'chromereactredux-devtools': 'dev.svg',
  'google-pagespeed-insights': 'pagespeed.svg',
  storybook: 'storybook.svg',
  figma: 'figma.svg',
  'adobe-photoshop': 'photoshop.svg',
  gimp: 'gimp.svg',
  bitrix: 'bitrix.svg',
  wordpress: 'wordpress.svg',
  opencart: 'opencart.svg',
  joomla: 'joomla.svg',
  php: 'php.svg',
  'node.js': 'node.svg',
  'express.js': 'express.svg',
  mongodb: 'mongo.svg',
  sql: 'sql.svg',
  mysql: 'mysql.svg',
  'rest-api': 'restapi.svg',
  remmina: 'remmina.svg',
  filezilla: 'filezilla.svg',
  bash: 'bash.svg',
  'gpt-3': 'gpt.svg',
  'claude.ai': 'claudeai.svg',
  yup: 'yup.svg',
  codewars: 'codewars.svg',
  ibm: 'ibm.svg',
  linkedin: 'linkedIn.svg',
  meta: 'meta.svg',
  scrimba: 'scrimba.svg',
};

const formatTechName = (name: string): string => {
  return name
    .toLowerCase()
    .replace(/[\s]+/g, '-')
    .replace(/[^\w.-]+/g, '');
};

const isSpecialIcon = (techNameFormatted: string): boolean => {
  return ICONS_SPECIAL_LIST.includes(techNameFormatted);
};

const getBaseUrl = (
  techNameFormatted: string,
  imageBaseUrl: string
): string => {
  return isSpecialIcon(techNameFormatted)
    ? `${imageBaseUrl}${IMAGE_ICONS_URL}`
    : `${imageBaseUrl}${IMAGE_STACK_URL}`;
};

export const getIconPath = (
  techName: string,
  imageBaseUrl: string
): string | null => {
  const techNameFormatted = formatTechName(techName);
  if (!iconMap[techNameFormatted]) return null;

  const baseUrl = getBaseUrl(techNameFormatted, imageBaseUrl);
  return `${baseUrl}${iconMap[techNameFormatted]}`;
};
