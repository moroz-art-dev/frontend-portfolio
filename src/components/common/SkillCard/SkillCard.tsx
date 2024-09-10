import {useTranslations} from 'next-intl';

import {Box, Text, Tooltip, VStack} from '@chakra-ui/react';

import IconRenderer from '@components/common/IconRenderer';

import styles from './SkillCard.module.scss';

interface SkillCardProps {
  title: string;
  descriptionKey: string;
}

const SkillCard: React.FC<SkillCardProps> = ({title, descriptionKey}) => {
  const t = useTranslations('Skills');
  return (
    <Box className={styles.box} width={['46%', '46%', '30%', '18%']}>
      <VStack spacing={3} className={styles.vstack}>
        <IconRenderer name={title} size={40} />
        <Text className={styles.text}>{title}</Text>
        <Tooltip label={t(descriptionKey)}>
          <Text className={styles.description} display={['none', 'block']}>
            {t(descriptionKey)}
          </Text>
        </Tooltip>
      </VStack>
    </Box>
  );
};

export default SkillCard;
