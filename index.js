const openMenuButton = document.querySelector('.hamburger__icon');
const closeMenuButton = document.querySelector('.hamburger__icon-close');
const hamburgerBackground = document.querySelector('.hamburger__background');
const hamburger = document.querySelector('.hamburger__wrapper');
const body = document.querySelector('.body')
const links = document.querySelectorAll('.hamburger__navigation-link')

const openBurger = () => {
    hamburgerBackground.classList.add('open');
    hamburger.classList.add('open')
    body.classList.add('open')
}

const closeBurger = () => {
    hamburgerBackground.classList.remove('open');
    hamburger.classList.remove('open');
    body.classList.remove('open')
}

openMenuButton.addEventListener('click', openBurger);
closeMenuButton.addEventListener('click', closeBurger)
hamburgerBackground.addEventListener('click', closeBurger)
links.forEach((el) => el.addEventListener('click', closeBurger))

/* slider */

const sliderItems = document.querySelectorAll('.destinations__slider-item')
const leftPicture = document.querySelector('.left-picture')
const rightPicture = document.querySelector('.right-picture')

const addTransitionLeft = () => {
    sliderItems.forEach((el) => el.classList.add('transition-left'))
    rightPicture.classList.add('disabled')
    if (sliderDots[1].classList.contains('active')) {
        sliderDots[1].classList.remove('active')
        sliderDots[2].classList.add('active')
    } else if (sliderDots[2].classList.contains('active')) {
        sliderDots[2].classList.remove('active')
        sliderDots[0].classList.add('active')
    } else if (sliderDots[0].classList.contains('active')) {
        sliderDots[0].classList.remove('active')
        sliderDots[1].classList.add('active')
    }
}

const addTransitionRight = () => {
    sliderItems.forEach((el) => el.classList.add('transition-right'))
    leftPicture.classList.add('disabled')
    if (sliderDots[1].classList.contains('active')) {
        sliderDots[1].classList.remove('active')
        sliderDots[0].classList.add('active')
    } else if (sliderDots[2].classList.contains('active')) {
        sliderDots[2].classList.remove('active')
        sliderDots[1].classList.add('active')
    } else if (sliderDots[0].classList.contains('active')) {
        sliderDots[0].classList.remove('active')
        sliderDots[2].classList.add('active')
    }
}

const removeTransitions = () => {
    sliderItems.forEach((el) => el.classList.remove('transition-left'))
    sliderItems.forEach((el) => el.classList.remove('transition-right'))
    mobilePictures.forEach((el) => el.classList.remove('transition-left'))
    mobilePictures.forEach((el) => el.classList.remove('transition-right'))
    leftPicture.classList.remove('disabled')
    rightPicture.classList.remove('disabled')
    subtitles.forEach((el) => el.classList.remove('transition-right'))
    subtitles.forEach((el) => el.classList.remove('transition-left'))
}

leftPicture.addEventListener('click', addTransitionRight)
rightPicture.addEventListener('click', addTransitionLeft)
sliderItems.forEach((el) => el.addEventListener('animationend', removeTransitions))

const images = document.querySelectorAll('.destinations__slider-image')
const countries = document.querySelectorAll('.destinations__slider-country')
const sliderDots = document.querySelectorAll('.slider-dots__item')


const changeImageAndTextLeft = () => {
    if (images[1].getAttribute('src')[30] === '1' && countries[1].innerHTML === 'SPAIN') {
        images[1].setAttribute('src', './assets/images/desktop/slider2.jpg')
        countries[1].innerHTML = 'JAPAN'
        images[0].setAttribute('src', './assets/images/desktop/slider1.jpg')
        countries[0].innerHTML = 'SPAIN'
    } else if (images[1].getAttribute('src')[30] === '2' && countries[1].innerHTML === 'JAPAN') {
        images[1].setAttribute('src', './assets/images/desktop/slider3.jpg')
        countries[1].innerHTML = 'USA'
        images[0].setAttribute('src', './assets/images/desktop/slider2.jpg')
        countries[0].innerHTML = 'JAPAN'
    } else if (images[1].getAttribute('src')[30] === '3' && countries[1].innerHTML === 'USA') {
        images[1].setAttribute('src', './assets/images/desktop/slider1.jpg')
        countries[1].innerHTML = 'SPAIN'
        images[0].setAttribute('src', './assets/images/desktop/slider3.jpg')
        countries[0].innerHTML = 'USA'
    }
    
    if (images[2].getAttribute('src')[30] === '1' && countries[2].innerHTML === 'SPAIN') {
        images[2].setAttribute('src', './assets/images/desktop/slider2.jpg')
        countries[2].innerHTML = 'JAPAN'
    } else if (images[2].getAttribute('src')[30] === '2' && countries[2].innerHTML === 'JAPAN') {
        images[2].setAttribute('src', './assets/images/desktop/slider3.jpg')
        countries[2].innerHTML = 'USA'
    } else if (images[2].getAttribute('src')[30] === '3' && countries[2].innerHTML === 'USA') {
        images[2].setAttribute('src', './assets/images/desktop/slider1.jpg')
        countries[2].innerHTML = 'SPAIN'
    }
    
    if (images[3].getAttribute('src')[30] === '1' && countries[3].innerHTML === 'SPAIN') {
        images[3].setAttribute('src', './assets/images/desktop/slider2.jpg')
        countries[3].innerHTML = 'JAPAN'
        images[4].setAttribute('src', './assets/images/desktop/slider3.jpg')
        countries[4].innerHTML = 'USA'
    } else if (images[3].getAttribute('src')[30] === '2' && countries[3].innerHTML === 'JAPAN') {
        images[3].setAttribute('src', './assets/images/desktop/slider3.jpg')
        countries[3].innerHTML = 'USA'
        images[4].setAttribute('src', './assets/images/desktop/slider1.jpg')
        countries[4].innerHTML = 'SPAIN'
    } else if (images[3].getAttribute('src')[30] === '3' && countries[3].innerHTML === 'USA') {
        images[3].setAttribute('src', './assets/images/desktop/slider1.jpg')
        countries[3].innerHTML = 'SPAIN'
        images[4].setAttribute('src', './assets/images/desktop/slider2.jpg')
        countries[4].innerHTML = 'JAPAN'
    }
}

const changeImageAndTextRight = () => {
    if (images[1].getAttribute('src')[30] === '1' && countries[1].innerHTML === 'SPAIN') {
        images[1].setAttribute('src', './assets/images/desktop/slider3.jpg')
        countries[1].innerHTML = 'USA'
        images[0].setAttribute('src', './assets/images/desktop/slider2.jpg')
        countries[0].innerHTML = 'JAPAN'
    } else if (images[1].getAttribute('src')[30] === '2' && countries[1].innerHTML === 'JAPAN') {
        images[1].setAttribute('src', './assets/images/desktop/slider1.jpg')
        countries[1].innerHTML = 'SPAIN'
        images[0].setAttribute('src', './assets/images/desktop/slider3.jpg')
        countries[0].innerHTML = 'USA'
    } else if (images[1].getAttribute('src')[30] === '3' && countries[1].innerHTML === 'USA') {
        images[1].setAttribute('src', './assets/images/desktop/slider2.jpg')
        countries[1].innerHTML = 'JAPAN'
        images[0].setAttribute('src', './assets/images/desktop/slider1.jpg')
        countries[0].innerHTML = 'SPAIN'
    }
    
    if (images[2].getAttribute('src')[30] === '1' && countries[2].innerHTML === 'SPAIN') {
        images[2].setAttribute('src', './assets/images/desktop/slider3.jpg')
        countries[2].innerHTML = 'USA'
    } else if (images[2].getAttribute('src')[30] === '2' && countries[2].innerHTML === 'JAPAN') {
        images[2].setAttribute('src', './assets/images/desktop/slider1.jpg')
        countries[2].innerHTML = 'SPAIN'
    } else if (images[2].getAttribute('src')[30] === '3' && countries[2].innerHTML === 'USA') {
        images[2].setAttribute('src', './assets/images/desktop/slider2.jpg')
        countries[2].innerHTML = 'JAPAN'
    }
    
    if (images[3].getAttribute('src')[30] === '1' && countries[3].innerHTML === 'SPAIN') {
        images[3].setAttribute('src', './assets/images/desktop/slider3.jpg')
        countries[3].innerHTML = 'USA'
        images[4].setAttribute('src', './assets/images/desktop/slider1.jpg')
        countries[4].innerHTML = 'SPAIN'
    } else if (images[3].getAttribute('src')[30] === '2' && countries[3].innerHTML === 'JAPAN') {
        images[3].setAttribute('src', './assets/images/desktop/slider1.jpg')
        countries[3].innerHTML = 'SPAIN'
        images[4].setAttribute('src', './assets/images/desktop/slider2.jpg')
        countries[4].innerHTML = 'JAPAN'
    } else if (images[3].getAttribute('src')[30] === '3' && countries[3].innerHTML === 'USA') {
        images[3].setAttribute('src', './assets/images/desktop/slider2.jpg')
        countries[3].innerHTML = 'JAPAN'
        images[4].setAttribute('src', './assets/images/desktop/slider3.jpg')
        countries[4].innerHTML = 'USA'
    }
}



rightPicture.addEventListener('click', () => setTimeout(changeImageAndTextLeft, 495))
leftPicture.addEventListener('click', () => setTimeout(changeImageAndTextRight, 495))


/* slider mobile */

const rightButton = document.querySelector('.slider-button__arrow-right')
const leftButton = document.querySelector('.slider-button__arrow-left')
const mobilePictures = document.querySelectorAll('.slider__image')
const subtitles = document.querySelectorAll('.slider-subtitle__country')
const mobileDots = document.querySelectorAll('.slider-dots__item-mobile')

const moveRight = () => {
    mobilePictures.forEach((el) => el.classList.add('transition-left'))
    subtitles.forEach((el) => el.classList.add('transition-left'))
}

const changePhotosToRight = () => {
    if (mobilePictures[1].getAttribute('src')[29] === '1') {
        mobilePictures[0].setAttribute('src', './assets/images/mobile/slider1.jpg')
        subtitles[0].innerHTML = 'SPAIN'
        mobilePictures[1].setAttribute('src', './assets/images/mobile/slider2.jpg')
        subtitles[1].innerHTML = 'JAPAN'
        mobilePictures[2].setAttribute('src', './assets/images/mobile/slider3.jpg')
        subtitles[2].innerHTML = 'USA'
    } else if (mobilePictures[1].getAttribute('src')[29] === '2') {
        mobilePictures[0].setAttribute('src', './assets/images/mobile/slider2.jpg')
        subtitles[0].innerHTML = 'JAPAN'
        mobilePictures[1].setAttribute('src', './assets/images/mobile/slider3.jpg')
        subtitles[1].innerHTML = 'USA'
        mobilePictures[2].setAttribute('src', './assets/images/mobile/slider3.jpg')
        subtitles[2].innerHTML = 'USA'
    }
}

const changeDotsToRight = () => {
    if (mobilePictures[1].getAttribute('src')[29] === '1') {
        mobileDots[0].classList.remove('active')
        mobileDots[1].classList.add('active')
        leftButton.classList.remove('disabled')
    } else if (mobilePictures[1].getAttribute('src')[29] === '2') {
        mobileDots[1].classList.remove('active')
        mobileDots[2].classList.add('active')
        rightButton.classList.add('disabled')
    }
}

const moveLeft = () => {
    mobilePictures.forEach((el) => el.classList.add('transition-right'))
    subtitles.forEach((el) => el.classList.add('transition-right'))
}

const changePhotosToLeft = () => {
    if (mobilePictures[1].getAttribute('src')[29] === '2') {
        mobilePictures[1].setAttribute('src', './assets/images/mobile/slider1.jpg')
        subtitles[1].innerHTML = 'SPAIN'
        mobilePictures[2].setAttribute('src', './assets/images/mobile/slider2.jpg')
        subtitles[2].innerHTML = 'JAPAN'
    } else if (mobilePictures[1].getAttribute('src')[29] === '3') {
        mobilePictures[1].setAttribute('src', './assets/images/mobile/slider2.jpg')
        subtitles[1].innerHTML = 'JAPAN'
        mobilePictures[2].setAttribute('src', './assets/images/mobile/slider3.jpg')
        subtitles[2].innerHTML = 'USA'
        mobilePictures[0].setAttribute('src', './assets/images/mobile/slider1.jpg')
        subtitles[0].innerHTML = 'SPAIN'
    }
}

const changeDotsToLeft = () => {
    if (mobilePictures[1].getAttribute('src')[29] === '2') {
        mobileDots[1].classList.remove('active')
        mobileDots[0].classList.add('active')
        leftButton.classList.add('disabled')
    } else if (mobilePictures[1].getAttribute('src')[29] === '3') {
        mobileDots[2].classList.remove('active')
        mobileDots[1].classList.add('active')
        rightButton.classList.remove('disabled')
    }
}

rightButton.addEventListener('click', moveRight)
rightButton.addEventListener('click', changeDotsToRight)
rightButton.addEventListener('click', () => setTimeout(changePhotosToRight, 495))


leftButton.addEventListener('click', moveLeft)
leftButton.addEventListener('click', changeDotsToLeft)
leftButton.addEventListener('click', () => setTimeout(changePhotosToLeft, 495))

mobilePictures.forEach(el => el.addEventListener('animationend', removeTransitions))


/* Pop-up */

const btnLogin = document.querySelector('.button__login')
const popupWrapper = document.querySelector('.popup__wrapper')
const popupBg = document.querySelector('.popup__background')
const registerButton = document.querySelector('.popup__account-link')
const popupSecondPage = document.querySelector('.popup__login-wrapper')
const logInButton = document.querySelector('.popup__account-link-login')
const accountButton = document.querySelector('.account')
const closePopupBtn = document.querySelectorAll('.popup__icon-close')
const signInButton = document.querySelectorAll('.popup__sign-in')

const emailInput = document.querySelectorAll('.email__input')
const password = document.querySelectorAll('.password__input')

const showPopup = () => {
    popupWrapper.style.top = '50%'
    popupBg.style.display = 'flex'
}

const closePopup = () => {
    popupWrapper.style.top = '-50%'
    popupBg.style.display = 'none'
    popupSecondPage.style.top = '-50%'
}

const changePopup = () => {
    popupWrapper.style.top = '-50%'
    popupSecondPage.style.top = '50%'
}

const changePopup1 = () => {
    popupWrapper.style.top = '50%'
    popupSecondPage.style.top = '-50%'
}

const showAlert = () => {
    alert(`Email: ${emailInput[0].value}\nPassword: ${password[0].value}`)
}

const showAlert1 = () => {
    alert(`Email: ${emailInput[1].value}\nPassword: ${password[1].value}`)
}

btnLogin.addEventListener('click', showPopup)
popupBg.addEventListener('click', closePopup)
registerButton.addEventListener('click', changePopup)
logInButton.addEventListener('click', changePopup1)
accountButton.addEventListener('click', showPopup)
closePopupBtn.forEach(el => el.addEventListener('click', closePopup))
signInButton[0].addEventListener('click', showAlert)
signInButton[1].addEventListener('click', showAlert1)
