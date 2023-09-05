const productImages = document.querySelectorAll('.images-open')
const overlay = document.querySelector('.overlay')
const openImgs = document.querySelector('.open-imgs')
const iconClose = document.querySelector('.icon-close')

function openImages() {
  overlay.classList.add('on')
  openImgs.style.display = 'block';
}

function closeImages() {
  overlay.classList.remove('on')
  openImgs.style.display = 'none';
}

productImages.forEach(img => {img.addEventListener('click', openImages)})

iconClose.addEventListener('click', closeImages)
overlay.addEventListener('click', closeImages)

console.log(productImages)