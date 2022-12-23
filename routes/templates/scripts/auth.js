function onClickRegistration() {
    window.location.href = 'http://localhost:3000/pages/auth'
}

function onClickLogin() {
    const element = document.getElementById("modal")
    element.style.display = 'flex'
}

function onClickBG() {
    const element = document.getElementById("modal")
    element.style.display = 'none'
}