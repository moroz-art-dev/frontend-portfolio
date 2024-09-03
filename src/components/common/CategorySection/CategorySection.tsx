import React from 'react';

import {HStack, Text} from '@chakra-ui/react';

import LabelWithIcon from '@components/common/LabelWithIcon';

import styles from './CategorySection.module.scss';

interface CategorySectionProps {
  sectionData: {[key: string]: string | {[key: string]: string}};
}

const CategorySection: React.FC<CategorySectionProps> = ({sectionData}) =>
  Object.entries(sectionData).map(([key, value]) => (
    <HStack
      key={key}
      alignItems='flex-start'
      className={styles.itemWrap}
      flexDirection={
        typeof value !== 'string' ? {base: 'column', md: 'row'} : 'row'
      }
    >
      {typeof value === 'string' ? (
        <LabelWithIcon name={key} iconUrl={value} />
      ) : (
        <>
          <Text
            fontSize='md'
            fontWeight='semibold'
            className={styles.labelText}
          >
            {key}
          </Text>
          <HStack style={{flexWrap: 'wrap', gap: 0}}>
            <CategorySection sectionData={value} />
          </HStack>
        </>
      )}
    </HStack>
  ));

export default CategorySection;
