import PropTypes from 'prop-types';
import { Box } from 'components/Box';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';

export const ImageGallery = ({ images }) => {
  return (
    <Box
      as="ul"
      display="grid"
      gridTemplateColumns="1fr 1fr 1fr 1fr"
      gridGap={5}
      padding="30px"
    >
      {images.map(image => (
        <ImageGalleryItem
          key={image.id}
          id={image.id}
          tags={image.tags}
          webformatURL={image.webformatURL}
          largeImageURL={image.largeImageURL}
        ></ImageGalleryItem>
      ))}
    </Box>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
      tags: PropTypes.string.isRequired,
    }).isRequired
  ),
};
