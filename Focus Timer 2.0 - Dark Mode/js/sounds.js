import { inputVolCoffeeShop, inputVolFireplace, inputVolForest, inputVolRain } from "./elements.js"

export default function() {
    const forestAudio = new Audio("./sounds/Floresta.wav")
    const rainAudio = new Audio("./sounds/Chuva.wav")
    const coffeeShopAudio = new Audio("./sounds/Cafeteria.wav")
    const fireplaceAudio = new Audio("./sounds/Lareira.wav")

    forestAudio.loop = true
    rainAudio.loop = true
    coffeeShopAudio.loop = true
    fireplaceAudio.loop = true

    
    function setForestVolume() {
        forestAudio.volume = inputVolForest.value / 100;
    }

    function setRainVolume() {
        rainAudio.volume = inputVolRain.value / 100;
    }

    function setCoffeeVolume() {
        coffeeShopAudio.volume = inputVolCoffeeShop.value / 100
    }

    function setFireplaceVolume() {
        fireplaceAudio.volume = inputVolFireplace.value / 100
    }


    return  {
        forestAudio,
        rainAudio,
        coffeeShopAudio,
        fireplaceAudio,
        setForestVolume,
        setCoffeeVolume,
        setFireplaceVolume,
        setRainVolume
    }
}
