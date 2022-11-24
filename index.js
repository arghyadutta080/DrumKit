var n = document.querySelectorAll(".drum").length

for (let index = 0; index < n; index++) {
    document.querySelectorAll(".drum")[index].addEventListener("click", function () {
        // alert("I am clicked")
        console.log("clicked")
        // var music = new Audio('./sounds/crash.mp3')
        // music.play()
        console.log(this)
        // this.style.color = "white"
        var music
        var innerText = this.innerHTML
        musicPlay(innerText)
        buttonAnimation(innerText)
    })
}

addEventListener("keypress", function (event) {
    musicPlay(event.key)
    buttonAnimation(event.key)
})

function buttonAnimation(btn) {
    document.querySelector(`.${btn}`).classList.add("pressed")
    setTimeout(() => {
        document.querySelector(`.${btn}`).classList.remove("pressed")
    }, 100);
    
}

function musicPlay(sound) {
    switch (sound) {
        case "w":
            music = new Audio('./sounds/crash.mp3')
            music.play()
            break;
        case "a":
            music = new Audio('./sounds/kick-bass.mp3')
            music.play()
            break;
        case "s":
            music = new Audio('./sounds/snare.mp3')
            music.play()
            break;
        case "d":
            music = new Audio('./sounds/tom-1.mp3')
            music.play()
            break;
        case "j":
            music = new Audio('./sounds/tom-2.mp3')
            music.play()
            break;
        case "k":
            music = new Audio('./sounds/tom-3.mp3')
            music.play()
            break;
        case "l":
            music = new Audio('./sounds/tom-4.mp3')
            music.play()
            break;
        default:
            break;
    }
}
