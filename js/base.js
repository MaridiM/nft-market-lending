const liveAuctions = new Splide('.live-auctions', {
    perPage: 3,
    perMove: 1,
    pagination: false,
})
const collections = new Splide('.collections', {
    perPage: 3,
    perMove: 1,
    pagination: false,
})
const categories = new Splide('.categories', {
    perPage: 4,
    perMove: 1,
    pagination: false,
})

liveAuctions.mount()
collections.mount()
categories.mount()

const categoriesItem = document.querySelector('.categories')
const slides = categoriesItem.querySelectorAll('.splide__slide')
slides.forEach((item, idx) => {
    const itemImg = slides[idx].querySelector('.item__image')
    const img = itemImg.querySelector('img')
    const btn = itemImg.querySelector('.btn')
    
    item.addEventListener('mouseover', () => {
        const classItem = slides[idx].getAttribute('class')
        if (classItem.includes('is-visible') || classItem.includes('is-next') || classItem.includes('is-active')) {
            img.style.opacity = '.3'
            btn.style.display = 'block'    
        }

    })
    item.addEventListener('mouseout', () => {
        img.style.opacity = '1'
        btn.style.display = 'none'
    })

})