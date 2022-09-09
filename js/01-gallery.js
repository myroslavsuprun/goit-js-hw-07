import { galleryItems } from "./gallery-items.js";
// Change code below this line

const ref = {
  galleryDiv: document.querySelector(".gallery"),
};

function galleryItemsMarkUp(gallery) {
  return gallery
    .map((galleryItem) => {
      return `<div class="gallery__item">
  <a class="gallery__link" href="${galleryItem.original}">
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

ref.galleryDiv.addEventListener("click", onPictureResizeClick);

function onPictureResizeClick(e) {
  e.preventDefault();
  if (e.target.nodeName !== "IMG") {
    return;
  }

  const galleryLink = e.currentTarget.querySelector(".gallery__link");
  console.log(galleryLink.href);
}
