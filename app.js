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
        //Link the page to deliver the results 
    document.getElementById("finger").onclick = function() {
        location.href = "tech.html";
    };
}
const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar__menu')

menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');

})