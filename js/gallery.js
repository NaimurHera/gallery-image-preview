const galleryImages = document.querySelectorAll(".gallery-img");
const previewWrapper = document.querySelector("#preview-wrapper");
const previewImage = document.querySelector(".preview-image");
const hidePreview = document.querySelector(".hide-preview");
const leftArrow = document.querySelector(".fa-chevron-left");
const rightArrow = document.querySelector(".fa-chevron-right");
const imageCount = document.querySelector(".image-count");
const bgOverlay = document.querySelector(".background-overlay");
let previewImageIndex = 0;

const showPreview = (clickedImgSrc, index) => {
  // toggle the class to show the preview
  if (previewWrapper.classList.contains("invisible", "opacity-0")) previewWrapper.classList.remove("invisible", "opacity-0");
  previewImage.src = clickedImgSrc; // change the preview image source to the click image
  previewImageIndex = index; // update the image index so that we can use it later
  console.log(previewImageIndex);
  imageCount.textContent = `${previewImageIndex + 1}/${galleryImages.length}`;
};

const closePreview = () => {
  // toggle the class to hide the preview
  if (!previewWrapper.classList.contains("invisible", "opacity-0")) previewWrapper.classList.add("invisible", "opacity-0");
};

const handleRightClick = () => {
  // if the current image index is the last image index then set the first image as next image
  const nextImageIndex = previewImageIndex + 1 <= galleryImages.length - 1 ? previewImageIndex + 1 : 0;
  const nextImg = galleryImages[nextImageIndex].src;
  previewImage.src = nextImg;

  // update the index number as well
  previewImageIndex = nextImageIndex;

  // also update the text content
  imageCount.textContent = `${previewImageIndex + 1}/${galleryImages.length}`;
};

const handleLeftClick = (src) => {
  // if the current image index is the first image index then set the last image as prev image
  const prevImageIndex = previewImageIndex - 1 < 0 ? galleryImages.length - 1 : previewImageIndex - 1;

  const prevImg = galleryImages[prevImageIndex].src;
  previewImage.src = prevImg;

  // update the index number as well
  previewImageIndex = prevImageIndex;
  // also update the text content
  imageCount.textContent = `${previewImageIndex + 1}/${galleryImages.length}`;
};

galleryImages.forEach((img, index) => {
  img.addEventListener("click", () => showPreview(img.src, index));
});

hidePreview.addEventListener("click", () => closePreview());
previewWrapper.addEventListener("click", (e) => {
  if (e.target === previewWrapper) {
    closePreview();
  }
});
leftArrow.addEventListener("click", () => handleLeftClick());
rightArrow.addEventListener("click", () => handleRightClick());
