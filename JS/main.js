const headerEl = document.querySelector('header')

inView('.intro')
    .on('enter', bgChange => {
        headerEl.classList.remove('change-bg')
    })
    .on('exit', bgChange => {
        headerEl.classList.add('change-bg')
    });
inView.threshold(0.9);

const scrollView = document.querySelectorAll('.scroll')
scrollView.forEach(link => {
    link.addEventListener('click', event => {
        event.preventDefault()
        const href = link.getAttribute('href')
        document.querySelector(href).scrollIntoView({
            behavior: 'smooth'
        })
    })
})

