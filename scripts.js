let prevButton = document.getElementById('prev')
let nextButton = document.getElementById('next')
let container = document.querySelector('.container')
let items = document.querySelectorAll('.list .item')
let indicator = document.querySelector('.indicators')
let dots = indicator.querySelectorAll('ul li')
let list = container.querySelector('.list')

let active = 0;
let firstPosition = 0;
let lastPosition = items.length - 1

function setSlider() {
    let itemOld = container.querySelector('.list .item.active')
    itemOld.classList.remove('active')

    let dotsOld = indicator.querySelector('ul li.active')
    dotsOld.classList.remove('active')
    dots[active].classList.add('active')

    indicator.querySelector('.number').innerText = '0' + (active + 1)

}
nextButton.onclick = () => {
    list.style.setProperty('--calculation', 1)
    active = active + 1 > lastPosition ? 0 : active + 1
    setSlider()
    items[active].classList.add('active')
}



prevButton.onclick = () => {
    list.style.setProperty('--calculation', 1)
    active = active - 1 < firstPosition ? lastPosition : active - 1
    setSlider()
    items[active].classList.add('active')
}

let infoButtons = document.querySelectorAll('.information')
let modal = document.getElementById('modal')
let modalTitle = document.getElementById('modal-title')
let modalText = document.getElementById('modal-text')
let closeButton = modal.querySelector('.close-btn')

infoButtons.forEach(button => {
    button.addEventListener('click', () => {
        let item = button.closest('.item')
        let carName = item.querySelector('.car-information').innerText.trim()
        let brand = item.querySelector('h2').innerText.trim()
        let description = item.querySelector('.description').innerText.trim()

        modalTitle.innerText = `${carName} - ${brand}`
        modalText.innerText = `${description}\n\nPara mais informações, entre em contato conosco ou explore outras opções.`
        modal.classList.add('active')
    })
})

closeButton.addEventListener('click', () => {
    modal.classList.remove('active')
})

modal.addEventListener('click', event => {
    if (event.target === modal) {
        modal.classList.remove('active')
    }
})