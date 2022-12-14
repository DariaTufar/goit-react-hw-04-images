import React, { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { GlobalStyle } from 'components/GlobalStyle';
import { Box } from '../Box';
import { fetchImages } from '../FetchImages';
import { Searchbar } from 'components/Searchbar';
import { ImageGallery } from '../ImageGallery';
import { Loader } from 'components/Loader';
import { LoadMoreButton } from 'components/Button';

const status = {
  idle: 0,
  pending: 1,
  resolved: 2,
  rejected: 3,
};

export class App extends Component {
  state = {
    images: [],
    search: '',
    totalImages: 0,
    page: 1,
    status: status.idle,
  };

  //========================================================
  async componentDidUpdate(_, prevState) {
    const { search, page } = this.state;

    if (prevState.search !== search || prevState.page !== page) {
      this.setState({ status: status.pending });
      try {
        const response = await fetchImages(search, page);
        this.setState(prevState => ({
          images: [...prevState.images, ...response.hits],
          status: status.resolved,
          totalImages: response.totalHits,
        }));
      } catch (error) {
        toast(error.message);
        this.setState({ status: status.rejected });
        return;
      }
    }
  }
  //=======================================================

  handleClickLoadMore = page => {
    this.setState({ page });
  };

  //=======================
  handleSearch = search => {
    this.setState(prevState => {
      if (prevState.search !== search) {
        this.setState({
          images: [],
          totalImages: 0,
          page: 1,
          status: status.idle,
          search,
        });
      } else return;
    });
  };

  //======================================================
  render() {
    return (
      <Box>
        <Searchbar onSubmit={this.handleSearch}></Searchbar>
        <Box>
          <ImageGallery images={this.state.images} />

          {this.state.status === status.pending && <Loader />}

          {this.state.status === status.resolved && this.state.totalImages && (
            <LoadMoreButton
              onClick={this.handleClickLoadMore}
              page={this.state.page}
            />
          )}
        </Box>

        <ToastContainer />
        <GlobalStyle />
      </Box>
    );
  }
}
