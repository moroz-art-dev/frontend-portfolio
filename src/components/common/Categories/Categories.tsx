import {useTranslations} from 'next-intl';

import {Box, Stack} from '@chakra-ui/react';

import CategoriesItem from '@components/common/CategoriesItem';
import SectionHeader from '@components/common/SectionHeader';

interface Category {
  title: string;
  descriptionKey: string;
  url: string;
}

interface CategoriesProps {
  categories: Category[];
}

const Categories: React.FC<CategoriesProps> = ({categories}) => {
  const t = useTranslations('Categories');
  return (
    <Box overflowX='auto'>
      <SectionHeader text={t('title')} />
      <Stack
        gap='1rem'
        flexDirection='row'
        alignItems='flexStart'
        flexWrap='wrap'
        style={{justifyContent: 'center'}}
      >
        {categories.map((category, index) => (
          <CategoriesItem
            key={category.title}
            title={category.title}
            descriptionKey={category.descriptionKey}
            url={category.url}
            index={index}
          />
        ))}
      </Stack>
    </Box>
  );
};

export default Categories;
