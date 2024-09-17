import Link from 'next/link';

import {useTranslations} from 'next-intl';

import {Box, Stack, Text, Tooltip} from '@chakra-ui/react';

import IconRenderer from '@components/common/IconRenderer';

import styles from './CategoriesItem.module.scss';

interface CategoriesItemProps {
  title: string;
  descriptionKey: string;
  url: string;
  index: number;
}

const CategoriesItem: React.FC<CategoriesItemProps> = ({
  title,
  descriptionKey,
  url,
  index,
}) => {
  const t = useTranslations('Categories');
  return (
    <Box
      className={styles.box}
      width={
        index < 2 ? ['96%', '47%', '47%', '32%'] : ['96%', '96%', '96%', '32%']
      }
    >
      <Link href={url} passHref>
        <Stack spacing={3} className={styles.stack} flexDirection={'row'}>
          <IconRenderer name={title} size={40} />
          <Text className={styles.text}>{t(title)}</Text>
          <Tooltip label={t(descriptionKey)}>
            <Text className={styles.description}>{t(descriptionKey)}</Text>
          </Tooltip>
        </Stack>
      </Link>
    </Box>
  );
};

export default CategoriesItem;
