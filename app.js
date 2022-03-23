import FingerprintJS from '@fingerprintjs/fingerprintjs-pro'

function classFings() {
    // Initialize an agent at application startup.
    const fpPromise = FingerprintJS.load({
        apiKey: 'Rj1uQxYPXTNOS7czdJyD',
        region: 'eu'
    })

    // Get the visitor identifier when you need it.
    fpPromise
        .then(fp => fp.get())
        .then(result => console.log(result.visitorId))
}
const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar__menu')

menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');

})