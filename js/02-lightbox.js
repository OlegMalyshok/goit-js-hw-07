import { galleryItems } from "./gallery-items.js";

const galleryEl = document.querySelector(".gallery");
const galleryItemsEl = createGalleryItemsMarkup(galleryItems);
galleryEl.insertAdjacentHTML("beforeend", galleryItemsEl);

function createGalleryItemsMarkup(items) {
  return items
    .map(({ preview, original, description }) => {
      return `<li class="gallery__item">
   <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
   </a>
</li>`;
    })
    .join("");
}

const markup = galleryItems.reduce(
  (acc, { original, preview, description }) =>
    (acc += `<li>
<a class="gallery__item" href="${original}">
<img
  class="gallery__image"
  src="${preview}"
  alt="${description}"
/>
</a>
</li>`),
  ""
);

galleryEl.insertAdjacentHTML("beforeend", markup);

const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
