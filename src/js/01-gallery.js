import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

// 1. Create markup
const galleryItemsList = document.querySelector('.gallery');
const gallery = createPicGallery(galleryItems);

galleryItemsList.insertAdjacentHTML('beforeend', gallery);

function createPicGallery(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
   <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}" />
   </a>
    `;
    })
    .join('');
}

// 2. SimpleLightbox implementation

new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
