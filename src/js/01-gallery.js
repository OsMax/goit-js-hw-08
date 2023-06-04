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

place.addEventListener('click', e => {
  if (e.target.nodeName !== 'IMG') {
    return;
  }
  let gallery = new SimpleLightbox('.gallery a', {
    caption: true,
    captionsData: 'alt',
    captionDelay: 250,
  });

  // Без цієї частини відбувається незрозуміле
  // накопичення бекдропів при закритті і відкритті нових модалок...
  gallery.on('closed.simplelightbox', function () {
    gallery.close();
  });
});
