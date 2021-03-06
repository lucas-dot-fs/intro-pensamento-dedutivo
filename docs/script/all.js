const toggle = {
    button: document.querySelector("button[data-button-toggle]"),
    links: document.querySelector("ul[data-toggle]")
}

toggle.button.addEventListener("click", e => {
    toggle.links.classList.toggle("open-list")
    toggle.button.classList.toggle("open-button")
})

window.addEventListener("resize", e => {
    if(window.screen.width >= 960) {
        toggle.links.classList.remove("open-list")
        toggle.button.classList.remove("open-button")
    }
})
