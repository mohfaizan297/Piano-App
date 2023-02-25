const volumeSlider = document.querySelector('#volume-slider')
const whiteKeys = document.querySelectorAll('.white-keys')
const blackKeys = document.querySelectorAll('.black-keys')

//the above selector return us to nodeList. So convert NodeList to array
const whiteKeysArray = Array.from(whiteKeys);
const blackKeysArray = Array.from(blackKeys);

whiteKeysArray.forEach((element) => {
    const audio = new Audio(`piano sound/${element.id}.mp3`)
    element.addEventListener('click', ()=>{
        audio.volume = volumeSlider.value/100;
        audio.play();
    })
})
blackKeysArray.forEach((element) => {
    const audio = new Audio(`piano sound/${element.id}.mp3`)
    element.addEventListener('click', ()=>{
        audio.volume = volumeSlider.value/100;
        audio.play();
    })
})

document.addEventListener('keydown', (e)=>{
    whiteKeys.forEach((element) => {
        const audio = new Audio(`piano sound/${element.id}.mp3`)
        if(element.id == e.key)
        {
            audio.play()
            //or we can use inbuilt function
            // element.click()

            element.classList.add('active-white')
            setInterval(()=> {
                element.classList.remove('active-white')

            }, 150)
        }
    })
    blackKeys.forEach((element) => {
        const audio = new Audio(`piano sound/${element.id}.mp3`)
        if(element.id == e.key)
        {
            audio.play()
            element.classList.add('active-black')
            setInterval(()=> {
                element.classList.remove('active-black')

            }, 150)
        }
    })
})