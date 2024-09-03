'use client';

import Image from 'next/image';
import React, {useState} from 'react';

import {
  Box,
  Heading,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  SimpleGrid,
  Tooltip,
  useDisclosure,
  VStack,
} from '@chakra-ui/react';

import ExternalLink from '@components/common/ExternalLink';
import IconRenderer from '@components/common/IconRenderer';

import styles from './ImageTile.module.scss';

interface ImageTileProps {
  images: {
    imageSrc: string;
    title: string;
    name?: string;
    icon?: string;
    url?: string;
  }[];
  width?: number;
  height?: number;
  maxHeight?: number | string;
}

const ImageTile: React.FC<ImageTileProps> = ({
  images,
  width,
  height,
  maxHeight,
}) => {
  const {isOpen, onOpen, onClose} = useDisclosure();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleImageClick = (src: string) => {
    setSelectedImage(src);
    onOpen();
  };

  return (
    <Box className={styles.imageTileContainer}>
      <SimpleGrid columns={{base: 2, md: 4}} spacing={4}>
        {images.map((image, index) => (
          <VStack
            key={index}
            className={styles.imageTileBox}
            onClick={() => handleImageClick(image.imageSrc)}
            style={{maxHeight: maxHeight ? maxHeight : 250}}
          >
            <Image
              className={styles.image}
              src={image.imageSrc}
              alt={image.name ? image.name : image.title}
              width={width ? width : 300}
              height={height ? height : 200}
              //layout='fill'
              objectFit='cover'
              objectPosition='center'
            />
            {image.name && image.icon && image.url && (
              <Box className={styles.imageTitleContent}>
                <ExternalLink url={image.url}>
                  <IconRenderer name={image.icon} />
                  <Tooltip label={image.name}>
                    <Heading as='h4' size='base' className={styles.imageTitle}>
                      {image.name}
                    </Heading>
                  </Tooltip>
                </ExternalLink>
              </Box>
            )}
          </VStack>
        ))}
      </SimpleGrid>

      {selectedImage && (
        <Modal isOpen={isOpen} onClose={onClose} size='xl'>
          <ModalOverlay />
          <ModalContent maxW='90vw' minW='90vw'>
            <ModalCloseButton />
            <ModalBody>
              <Box className={styles.imageModalBox} position='relative'>
                <Image
                  src={selectedImage}
                  alt='Selected'
                  layout='responsive'
                  width={width ? width : 300}
                  height={height ? height : 200}
                  objectFit='contain'
                  priority
                  loading='eager'
                />
              </Box>
            </ModalBody>
          </ModalContent>
        </Modal>
      )}
    </Box>
  );
};

export default ImageTile;
