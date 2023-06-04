// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Change code below this line

// console.log(galleryItems);
const place = document.querySelector('.gallery');

const newItems = galleryItems.map(e => {
  return `<li class="gallery__item">
  <a class="gallery__link" href="${e.original}" onclick="return false">
    <img
      class="gallery__image"
      src="${e.preview}"
      alt="${e.description}"
    />
  </a></li>`;
});
place.insertAdjacentHTML('beforeend', newItems.join(''));

new SimpleLightbox('.gallery a', {
  caption: true,
  captionsData: 'alt',
  captionDelay: 250,
});
