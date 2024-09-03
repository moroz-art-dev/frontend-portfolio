/** @type {import('next').NextConfig} */
import path from 'path';
import {fileURLToPath} from 'url';

import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  trailingSlash: false,
  reactStrictMode: true,
  images: {
    domains: ['raw.githubusercontent.com'],
  },
  webpack(config) {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@assets': path.resolve(__dirname, 'assets'),
      '@components': path.resolve(__dirname, 'components'),
      '@config': path.resolve(__dirname, 'config'),
      '@containers': path.resolve(__dirname, 'containers'),
      '@contexts': path.resolve(__dirname, 'contexts'),
      '@hooks': path.resolve(__dirname, 'hooks'),
      '@lib': path.resolve(__dirname, 'lib'),
      '@utils': path.resolve(__dirname, 'utils'),
      '@types': path.resolve(__dirname, 'types'),
      '@styles': path.resolve(__dirname, 'styles'),
    };
    return config;
  },
};

export default withNextIntl(nextConfig);
