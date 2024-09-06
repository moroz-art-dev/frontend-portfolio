import {useTranslations} from 'next-intl';

import {Box, Text, VStack} from '@chakra-ui/react';

import IconRenderer from '@components/common/IconRenderer';

import styles from './SkillCard.module.scss';

interface SkillCardProps {
  title: string;
  descriptionKey: string;
}

const SkillCard: React.FC<SkillCardProps> = ({title, descriptionKey}) => {
  const t = useTranslations('Skills');
  return (
    <Box className={styles.box} width={['100%', '45%', '30%', '18%']}>
      <VStack spacing={3} className={styles.vstack}>
        <IconRenderer name={title} size={40} />
        <Text className={styles.text}>{title}</Text>
        <Text className={styles.description}>{t(descriptionKey)}</Text>
      </VStack>
    </Box>
  );
};

export default SkillCard;
