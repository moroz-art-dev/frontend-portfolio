import {Flex, IconButton, Tooltip} from '@chakra-ui/react';

import {socialMediaLinks} from '@config/socialMediaConfig';

import styles from './SocialMediaIcons.module.scss';

const SocialMediaIcons = () => {
  return (
    <Flex gap={4}>
      {socialMediaLinks.map(({href, ariaLabel, icon: Icon}, index) => (
        <Tooltip key={index} label={ariaLabel}>
          <IconButton
            variant='solid'
            as='a'
            href={href}
            aria-label={ariaLabel}
            icon={<Icon />}
            className={styles.iconButton}
            target='_blank'
          />
        </Tooltip>
      ))}
    </Flex>
  );
};

export default SocialMediaIcons;
