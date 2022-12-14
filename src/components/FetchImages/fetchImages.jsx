import axios from 'axios';

import { BASE_URL } from '../../utils/constants';
import { API_KEY } from '../../utils/constants';
import { IMAGES_PER_PAGE } from '../../utils/constants';
 
export async function fetchImages(search, page) {
  const params = {
    q: search,
    key: API_KEY,
    image_type: 'photo',
    orientation: 'horizontal',
    per_page: IMAGES_PER_PAGE,
    page: page,
  };

  try {
    const response = await axios.get(BASE_URL, { params });
    if (response.data.hits.length === 0) {
      throw Error('There is no any match on your request!');
    }
      return response.data;

  }
  
  catch (error) {
    console.log(error.config);
    if (error.response) {
      console.log(error.response.data);
      console.log(error.response.headers);
      console.log(error.response.status);

      throw Error('There is no server response. Try later again!');
    }
    
    else if (error.request) {
      console.log(error.request);
      throw Error('There is no server response. Try later again!');
    }
    
    else {
      console.log('Error', error.message);
      throw error;
    }
  }
}
