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
  mainOpenImg.src = '/images/image-product-1.jpg'
  mainOpenImg.setAttribute('indexImg', '1')
}

productImages.forEach((img, index) => {img.addEventListener('click', () => {
  if (index == 0) {
    index = 1
  }
  openImages()
  console.log(productImages)

  mainOpenImg.src = `/images/image-product-${index}.jpg`
  mainOpenImg.setAttribute('indexImg', index)
})})

iconClose.addEventListener('click', closeImages)
overlay.addEventListener('click', closeImages)

//open imgs
const mainOpenImg = document.querySelector('.main-open-img')
const openImg = document.querySelectorAll('.open-img')

openImg.forEach((img, index) => {
img.addEventListener('click', () => {
  mainOpenImg.src = `/images/image-product-${index + 1}.jpg`
  mainOpenImg.setAttribute('indexImg', index + 1)
})
})

arrowNext = document.querySelector('.arrow-next')
arrowPrevious = document.querySelector('.arrow-previous')

let totalImages = 4
function updateImage(indexChange) {
  let index = Number(mainOpenImg.getAttribute('indexImg')) + indexChange;
  
  if (index < 1) {
    index = 4;
  }
  if (index > 4) {
    index = 1;
  }
  
  mainOpenImg.src = `/images/image-product-${index}.jpg`;
  mainOpenImg.setAttribute('indexImg', index);
}

arrowNext.addEventListener('click', () => updateImage(1));
arrowPrevious.addEventListener('click', () => updateImage(-1));




///////////////////////////////////




let counterProduct = document.querySelector('.counter-number')
const lessButton = document.querySelector('.less')
const moreButton = document.querySelector('.more')
moreButton.addEventListener('click', () => {
  counterProduct.innerHTML = Number(counterProduct.innerHTML) + 1
  if (counterProduct.innerHTML >= 99) {
    counterProduct.innerHTML = 99
  }
})

lessButton.addEventListener('click', () => {
  counterProduct.innerHTML = Number(counterProduct.innerHTML) - 1
  if (counterProduct.innerHTML <= 0) {
    counterProduct.innerHTML = 0
  }
})




////////////////////////////////





const cart = document.querySelector('.cart')
const openCart = document.querySelector('.open-cart')
cart.addEventListener('click', () => {
  if (openCart.style.display == 'none') {
    openCart.style.display = 'block'
  } else {
    openCart.style.display = 'none'
  }
})

const addCart = document.querySelector('.add-cart')
const fullCart = document.querySelector('.full-cart')
const emptyCart = document.querySelector('.empty-cart')
const delProduct = document.querySelector('.delete-product')
const productValue = 125
const unitProduct = document.querySelector('.unit-product')
const totalPrice = document.querySelector('.total-price')

let cartCounter = document.querySelector('.cart-counter')
cartCounter.innerText = counterProduct.innerText
console.log(cartCounter)

addCart.addEventListener('click', () => {
  if (counterProduct.innerHTML > 0) {
    fullCart.style.display = 'block'
    emptyCart.style.display = 'none'
    cartCounter.innerText = counterProduct.innerText
    unitProduct.innerText = counterProduct.innerText
    totalPrice.innerText = productValue * Number(unitProduct.innerText) + ',00' 
  }
})

console.log(counterProduct.innerText)

delProduct.addEventListener('click', () => {
  if (counterProduct.innerHTML > 0) {
    fullCart.style.display = 'none'
    emptyCart.style.display = 'flex'
  }
})


//////////////////////////////////


//user screen
const userScreen = document.querySelector('.user-screen')
const imgUser = document.querySelector('.user')
const userOptions = document.querySelector('.user-options')
imgUser.addEventListener('click', () => {
 if (userOptions.style.display == 'none') {
  userOptions.style.display = 'block'
 } else {
  userOptions.style.display = 'none'
 }
})