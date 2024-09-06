import React from 'react';

import {IMAGE_BASE_URL} from '@config/constants';
import getIcon from '@utils/iconMap';

const IconRenderer: React.FC<{
  name: string;
  size?: number;
}> = ({name, size}) => {
  return getIcon(name, IMAGE_BASE_URL, size);
};
export default IconRenderer;
