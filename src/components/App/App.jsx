import React , { useState, useEffect, useRef } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { GlobalStyle } from 'components/GlobalStyle';
import { Box } from '../Box';
import { fetchImages } from '../FetchImages';
import { Searchbar } from 'components/Searchbar';
import { ImageGallery } from '../ImageGallery';
import { Loader } from 'components/Loader';
import { LoadMoreButton } from 'components/Button';

const STATUS = {
  idle: 0,
  pending: 1,
  resolved: 2,
  rejected: 3,
};

export const App = () => {
  const [images, setImages] = useState([]);
  const [search, setSearch] = useState('');
  const [totalImages, setTotalImages] = useState(0);
  const [page, setPage] = useState(1);
  const [status, setStatus] = useState(STATUS.idle);

  let isFirstLoad = useRef(true);

  //========================================================
  useEffect(() => {
    if (isFirstLoad.current) {
      isFirstLoad.current = false;
      return;
    }

    async function imageSearch() {
      if (!search) {
        return;
      }
      setStatus(STATUS.pending);
      try {
        const response = await fetchImages(search, page);
             console.dir(response);
        setImages(prevImages => [...prevImages, ...response.hits]);
        
        setStatus(STATUS.resolved);
        setTotalImages(response.totalHits);
   
      } catch (error) {
        toast(error.message);
        setStatus(STATUS.rejected);
      }
    }

    imageSearch();
  }, [search, page]);

  //=======================================================

  const handleSearch = newSearch => {
    if (!newSearch || search === newSearch) {
      return;
    }
    setImages([]);
    setTotalImages(0);
    setPage(1);
    setStatus(STATUS.idle);
    setSearch(newSearch);
     
  };

  //======================================================

  return (
    <Box>
      <Searchbar onSubmit={handleSearch} />
      <Box>
        <ImageGallery images={images} />

        {status === STATUS.pending && <Loader />}

        {status === STATUS.resolved && totalImages && (
          <LoadMoreButton onClick={setPage} page={page} />
        )}
      </Box>

      <ToastContainer />
      <GlobalStyle />
    </Box>
  );
};
