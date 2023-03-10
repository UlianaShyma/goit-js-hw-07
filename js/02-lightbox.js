import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const gallerymarkUp = galleryItems.reduce((acc, { original, preview, description }) => {
  return `
    ${acc}
    <div class="gallery__item">
      <a class="gallery__link" href="${original}">
        <img
          class="gallery__image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"
        />
      </a>
    </div>`;
}, '');

const gallery = document.querySelector('.gallery');

gallery.insertAdjacentHTML('beforeend', gallerymarkUp);

new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
