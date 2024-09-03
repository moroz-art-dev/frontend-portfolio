import ImageTile from '@components/common/ImageTile';

interface CertificatesImagesProps {
  images: {
    imageSrc: string;
    title: string;
    name: string;
    icon: string;
    url: string;
  }[];
}

const CertificatesImages: React.FC<CertificatesImagesProps> = ({images}) => (
  <ImageTile images={images} height={192} width={250} maxHeight='none' />
);

export default CertificatesImages;
