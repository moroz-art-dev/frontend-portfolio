import ImageTile from '@components/common/ImageTile';

interface ProjectImagesProps {
  images: {
    imageSrc: string;
    title: string;
  }[];
}

const ProjectImages: React.FC<ProjectImagesProps> = ({images}) => (
  <ImageTile images={images} />
);

export default ProjectImages;
