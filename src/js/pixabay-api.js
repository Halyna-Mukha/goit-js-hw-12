import axios from 'axios';

export async function fetchImages(query, page, perPage) {
  try {
    const BASE_URL = 'https://pixabay.com/api/';
    const KEY = '44036260-cc4fe30d806c32d5981005e75';
    const response = await axios.get(BASE_URL, {
      params: {
        key: KEY,
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        page: page,
        per_page: perPage,
      },
    });

    return response.data;
  } catch (error) {
    console.error('Error fetching images:', error);
    throw error;
  }
}