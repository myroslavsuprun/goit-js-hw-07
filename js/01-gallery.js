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

ref.galleryDiv.addEventListener("click", onPictureClickToOpenModal);

function onPictureClickToOpenModal(e) {
  e.preventDefault();
  if (e.target.nodeName !== "IMG") {
    return;
  }

  const galleryLink = e.target.dataset.source;

  const instance = basicLightbox.create(`
  <img class="gallery__image" src="${galleryLink}" width="800" height="600">
  `);

  instance.show();

  window.addEventListener("keydown", function (e) {
    handleModalCloseKeyPress(e, instance);
  });
}

function handleModalCloseKeyPress(e, lightBoxEl) {
  if (e.key === "Escape") {
    lightBoxEl.close();
    window.removeEventListener("keydown", handleModalCloseKeyPress);
  }
}
