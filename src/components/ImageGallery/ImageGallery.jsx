import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import { Gallery } from './ImageGallery.module';
import PropTypes from 'prop-types';
export const ImageGallery = ({ galleryItems }) => {
  return (
    <Gallery>
      {galleryItems.map(galleryItem => {
        return (
          <ImageGalleryItem key={galleryItem.id} galleryItem={galleryItem} />
        );
      })}
    </Gallery>
  );
};

ImageGallery.propTypes = {
  items: PropTypes.array,
};