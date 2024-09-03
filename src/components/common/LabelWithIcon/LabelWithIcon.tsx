import React from 'react';

import {Tag, TagLabel} from '@chakra-ui/react';

import IconRenderer from '@components/common/IconRenderer';

import styles from './LabelWithIcon.module.scss';

interface LabelWithIconProps {
  name: string;
  iconUrl?: string;
}

const LabelWithIcon: React.FC<LabelWithIconProps> = ({name}) => (
  <Tag className={styles.tag}>
    <TagLabel className={styles.tagLabel} mr={2}>
      {name}
    </TagLabel>
    <IconRenderer name={name} />
  </Tag>
);

export default LabelWithIcon;
