const body = document.querySelector('body')

const playButton = document.querySelector(".play-button")
const pauseButton = document.querySelector('.pause-button')
const stopButton = document.querySelector(".stop-button")
const addButton = document.querySelector(".add-button")
const decreaseButton = document.querySelector(".decrease-button")
    
const forestSound = document.querySelector('.forest-sound')
const rainSound = document.querySelector('.rain-sound')
const coffeeShopSound = document.querySelector('.coffeeShop-sound')
const firePlaceSound = document.querySelector('.fireplace-sound')
const forestSoundSelected = document.querySelector('.forest-sound-selected')
const rainSoundSelected = document.querySelector('.rain-sound-selected')
const coffeeShopSoundSelected = document.querySelector('.coffeeShop-sound-selected')
const firePlaceSoundSelected = document.querySelector('.fireplace-sound-selected')

const darkModeButton = document.querySelector('.dark-mode')
const lightModeButton = document.querySelector('.light-mode')

const minutesDisplay = document.querySelector('.minutes')
const secondsDisplay = document.querySelector('.seconds')

const inputVolForest = document.querySelector('#forestSoundInput')
const inputVolRain = document.querySelector('#rainSoundInput')
const inputVolCoffeeShop = document.querySelector('#coffeeShopInput')
const inputVolFireplace = document.querySelector('#fireplaceSoundInput')

export {
    body,
    playButton,
    pauseButton,
    stopButton,
    addButton,
    decreaseButton,
    forestSound,
    rainSound,
    coffeeShopSound,
    firePlaceSound,
    forestSoundSelected,
    rainSoundSelected,
    coffeeShopSoundSelected,
    firePlaceSoundSelected,
    minutesDisplay,
    secondsDisplay,
    darkModeButton,
    lightModeButton,
    inputVolCoffeeShop,
    inputVolFireplace,
    inputVolForest,
    inputVolRain
}
