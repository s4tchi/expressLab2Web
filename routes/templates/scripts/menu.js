function onClickSwitch() {
    const element = document.getElementById('menu_1')
    if(element.style.display === 'flex') {
        element.style.display = 'none'
        return
    }
    element.style.display = 'flex'
}