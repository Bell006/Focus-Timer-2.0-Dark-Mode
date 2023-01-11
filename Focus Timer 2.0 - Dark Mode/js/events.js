import {body, 
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
    darkModeButton,
    lightModeButton,
    inputVolCoffeeShop,
    inputVolFireplace,
    inputVolForest,
    inputVolRain,} from "./elements.js"

import Sound from "./sounds.js"

const sound = Sound()


export default function ({timer, sounds}) {

    let minutes
    
    playButton.addEventListener('click', function() {
        playButton.classList.add('hide')
        pauseButton.classList.remove('hide')
        
        timer.countdown()
    })
    
    pauseButton.addEventListener('click', function() {
        playButton.classList.remove('hide')
        pauseButton.classList.add('hide')
        
        timer.hold()
    })
    
    stopButton.addEventListener('click', function() {
        timer.resetControls()
        timer.reset()
    })
    
    addButton.addEventListener('click', function() {
        minutes = Number(minutesDisplay.textContent)
        
        minutes < 50 ? minutesDisplay.textContent = String(minutes + 5).padStart(2, "0") : minutes = 50;
    })
    
    decreaseButton.addEventListener('click', function() {
        minutes = Number(minutesDisplay.textContent)
        
        minutes > 0 ? minutesDisplay.textContent = String(minutes - 5).padStart(2, "0") : minutes = 0;
    })
    
    forestSound.addEventListener('click', function() {
        forestSound.classList.add('hide')
        forestSoundSelected.classList.remove('hide')
        
        sounds.forestAudio.play()
    })

    forestSoundSelected.addEventListener('click', function() {
        forestSound.classList.remove('hide')
        forestSoundSelected.classList.add('hide')
        sounds.forestAudio.pause()
    })
    
    inputVolForest.addEventListener('mouseup', function() {
        sounds.setForestVolume()
    })
    
    rainSound.addEventListener('click', function() {
        rainSound.classList.add('hide')
        rainSoundSelected.classList.remove('hide')
    
        sounds.rainAudio.play()
    })
    
    rainSoundSelected.addEventListener('click', function() {
        rainSound.classList.remove('hide')
        rainSoundSelected.classList.add('hide')
    
        sounds.rainAudio.pause()
    })

    inputVolRain.addEventListener('click', function() {
        sounds.setRainVolume(inputVolRain.value)
    })
    
    coffeeShopSound.addEventListener('click', function() {
        coffeeShopSound.classList.add('hide')
        coffeeShopSoundSelected.classList.remove('hide')
    
        sounds.coffeeShopAudio.play()
    })
    
    coffeeShopSoundSelected.addEventListener('click', function() {
        coffeeShopSound.classList.remove('hide')
        coffeeShopSoundSelected.classList.add('hide')
    
        sounds.coffeeShopAudio.pause()
    })

    inputVolCoffeeShop.addEventListener('mouseup', function() {
        sounds.setCoffeeVolume()
    })
    
    firePlaceSound.addEventListener('click', function() {
        firePlaceSound.classList.add('hide')
        firePlaceSoundSelected.classList.remove('hide')
    
        sounds.fireplaceAudio.play()
    })
    
    firePlaceSoundSelected.addEventListener('click', function() {
        firePlaceSound.classList.remove('hide')
        firePlaceSoundSelected.classList.add('hide')
    
        sounds.fireplaceAudio.pause()
    })

    inputVolFireplace.addEventListener('mouseup', function() {
        sounds.setFireplaceVolume()
    })

    darkModeButton.addEventListener('click', function() {
        darkModeButton.classList.add('hide')
        lightModeButton.classList.remove('hide')

        body.classList.add('dark')
    })

    lightModeButton.addEventListener('click', function() {
        darkModeButton.classList.remove('hide')
        lightModeButton.classList.add('hide')

        body.classList.remove('dark')
    })
 

}


    
    




