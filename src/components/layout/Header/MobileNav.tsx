import {FaBars} from 'react-icons/fa';

import {
  Button,
  Divider,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
  Flex,
  Spacer,
  useDisclosure,
} from '@chakra-ui/react';

import LanguageSwitcher from '@components/common/LanguageSwitcher';
import Menu from '@components/common/Menu';
import SocialMediaIcons from '@components/common/SocialMediaIcons';
import ThemeSwitcher from '@components/common/ThemeSwitcher';

interface MobileNavProps {
  items: Array<{labelKey: string; href: string}>;
}

const MobileNav: React.FC<MobileNavProps> = ({items}) => {
  const {isOpen, onOpen, onClose} = useDisclosure();

  return (
    <Flex as='nav'>
      <Button onClick={onOpen} fontSize={'1.25rem'}>
        <FaBars />
      </Button>
      <Drawer placement='top' onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay>
          <DrawerContent>
            <DrawerBody pb={4}>
              <Menu items={items} onItemClick={() => onClose()} />
              <Divider />
              <SocialMediaIcons />
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
      <Spacer />
      <ThemeSwitcher />
      <LanguageSwitcher />
    </Flex>
  );
};

export default MobileNav;
