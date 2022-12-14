import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Modal } from 'components/Modal';
import { GalleryItem, Image } from './ImageGalleryItem.styled';

export class ImageGalleryItem extends Component {
  static propTypes = {
    webformatURL: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
  };

  state = {
    imageUrl: null,
  };

  // ==================================
  showModal = largeImageURL => {
    this.setState({ imageUrl: largeImageURL });
  };

  // ==================================
  closeModal = () => {
    this.setState({ imageUrl: null });
  };

  // ==================================
  render() {
    const { tags, webformatURL, largeImageURL } = this.props;

    return (
      <GalleryItem>
        <Image
          alt={tags}
          src={webformatURL}
          onClick={() => this.showModal(largeImageURL)}
        />
        {this.state.imageUrl && (
          <Modal
            largeImageURL={this.state.imageUrl}
            onClose={this.closeModal}
          />
        )}
      </GalleryItem>
    );
  }
}
