const boxes = document.querySelectorAll('.box');
window.addEventListener('scroll', checkboxes)

function checkboxes() {
    const tiggerBottom = window.innerHeight / 5 * 4
    boxes.forEach(box => {
        const boxTob = box.getBoundingClientRect().top
        if (boxTob < tiggerBottom) {
            box.classList.add('active')
        } else {
            box.classList.remove('active')
        }

    })
}