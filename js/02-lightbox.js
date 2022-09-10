import { galleryItems } from "./gallery-items.js";
// Change code below this line
const ref = {
  galleryDiv: document.querySelector(".gallery"),
};

function galleryItemsMarkUp(gallery) {
  return gallery
    .map((galleryItem) => {
      return `<div class="gallery__item">
  <a class="gallery__link lazyload" data-src="${galleryItem.preview}" href="${galleryItem.original}">
    <img
      class="gallery__image"
      src="${galleryItem.preview}"
      data-source="${galleryItem.original}"
      alt="${galleryItem.description}"
    />
  </a>
  </div>`;
    })
    .join("");
}

ref.galleryDiv.insertAdjacentHTML(
  "beforeend",
  galleryItemsMarkUp(galleryItems)
);

let galleryImg = new SimpleLightbox(".gallery__item .gallery__link", {
  captionDelay: 250,
  captionsData: "alt",
});
galleryImg.on("show.simplelightbox");
