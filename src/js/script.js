const btnSeeMore = document.querySelector('.see-more')
const pizzaRest = document.querySelectorAll('.rest')
const galleryImg = document.querySelectorAll('.container-gallery img')
const popup = document.querySelector('.popup')
const btnClose = document.querySelector('.closeImg')
const popupImg = document.querySelector('.popup-img')
const rightArrow = document.querySelector('.right')
const leftArrow = document.querySelector('.left')

let currentImgIndex

const nextPicture = () => {
	if (currentImgIndex === galleryImg.length - 1) {
		currentImgIndex = 0
	} else {
		currentImgIndex++
	}
	popupImg.src = galleryImg[currentImgIndex].src
}
const prevPicture = () => {
	if (currentImgIndex === 0) {
		currentImgIndex = galleryImg.length - 1
	} else {
		currentImgIndex--
	}
	popupImg.src = galleryImg[currentImgIndex].src
}
const closeGallery = () => {
	popup.classList.add('fade-out')
	setTimeout(() => {
		popup.classList.add('hidden')
		popup.classList.remove('fade-out')
	}, 300)
}
const handleClick = () => {
	pizzaRest.forEach(el => {
		if (el.classList.value.includes('rest')) {
			el.classList.remove('rest')
			btnSeeMore.innerHTML = 'Zwiń'
		} else {
			el.classList.add('rest')
			btnSeeMore.innerHTML = 'Pokaż więcej'
		}
	})
}

btnSeeMore.addEventListener('click', handleClick)

galleryImg.forEach((img, index) => {
	img.addEventListener('click', e => {
		popup.classList.remove('hidden')
		popupImg.src = e.target.src
		currentImgIndex = index
	})
})

btnClose.addEventListener('click', closeGallery)

rightArrow.addEventListener('click', nextPicture)
leftArrow.addEventListener('click', prevPicture)
document.addEventListener('keydown', e => {
	if (!popup.classList.contains('hidden')) {
		if (e.code === 'ArrowRight' || e.keyCode === 39) {
			nextPicture()
		} else if (e.code === 'ArrowLeft' || e.keyCode === 37) {
			prevPicture()
		} else if (e.code === 'Escape' || e.keyCode === 27) {
			closeGallery()
		}
	}
})

popup.addEventListener('click', e => {
	if (e.target === popup) {
		closeGallery()
	}
})
