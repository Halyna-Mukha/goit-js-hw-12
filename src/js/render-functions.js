import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import 'izitoast/dist/css/iziToast.min.css';

export const galleryElement = document.querySelector('.gallery');

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

lightbox.refresh();


export function renderGallery(images, isLastPage) {
  let galleryItemsHTML = images.reduce((acc, image) => {
    return acc + `
      <li class="gallery-item">
        <a href="${image.largeImageURL}" class="gallery-link">
          <img src="${image.webformatURL}" alt="${image.tags}" class="gallery-img">
          <ul class="gallery-descript">
    <li class="gallery-descript__item"><p><span class="gallery-descript__span">Likes</span>${image.likes}</p></li>
  <li class="gallery-descript__item"><p><span class="gallery-descript__span">Views</span>${image.views}</p></li>
  <li class="gallery-descript__item"><p><span class="gallery-descript__span">Comments</span>${image.comments}</p></li>
  <li class="gallery-descript__item"><p><span class="gallery-descript__span">Downloads</span>${image.downloads}</p></li>
        </ul>
        </a>
      </li>
    `;
  }, "");

  if (isLastPage) {
    galleryItemsHTML += `<p class="end-message">We're sorry, but you've reached the end of search results.</p>`;
  }

  galleryElement.insertAdjacentHTML('beforeend', galleryItemsHTML);

  lightbox.refresh();
}

