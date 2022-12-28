import React, { useState } from 'react';
 
import { Modal } from 'components/Modal';
import { GalleryItem, Image } from './ImageGalleryItem.styled';
 
export const ImageGalleryItem = ({ webformatURL, largeImageURL, tags }) => {
  const [imageUrl, setImageUrl] = useState(null);

  // ==================================
  return (
    <GalleryItem>
      <Image
        alt={tags}
        src={webformatURL}
        onClick={() => setImageUrl(largeImageURL)}
      />
      {imageUrl && (
        <Modal
          largeImageURL={imageUrl}
          onClose={() => setImageUrl(null)}
        />
      )}
    </GalleryItem>
  );
}