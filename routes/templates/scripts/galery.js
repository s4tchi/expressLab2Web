function onClickPreview(id) {

    const images = document.getElementsByClassName('table_item')

    for(let i = 0; i < images.length; i++) {
        images[i].style.width = 'auto'
        images[i].style.height = 'auto'
        images[i].style.position = 'auto'
    }

    const element = document.getElementById(id)
    element.style.width = '600px'
    element.style.height = '600px'
    element.style.position = 'absolute'
}