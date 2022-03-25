// import FingerprintJS from '@fingerprintjs/fingerprintjs-pro'
// // via CommonJS imports:
// const { ClientJS } = require('clientjs');
const client = new ClientJS();
// in a browser, when using a script tag:
// const ClientJS = window.ClientJS;

function classFings() {
    // Initialize an agent at application startup.
    // const fpPromise = FingerprintJS.load({
    //     apiKey: 'Rj1uQxYPXTNOS7czdJyD',
    //     region: 'eu'
    // })

    // Get the visitor identifier when you need it.
    fpPromise
        .then(fp => fp.get())
        .then(result => console.log(result.visitorId))
        //Link the page to deliver the results 
    document.getElementById("finger").onclick = function() {
        client.getBrowserData();
        client.getFingerprint();
        client.getCustomFingerprint();

        client.getUserAgent();
        client.getUserAgentLowerCase();

        client.getBrowser();
        client.getBrowserVersion();
        client.getBrowserMajorVersion();
        client.isIE();
        client.isChrome();
        client.isFirefox();
        client.isSafari();
        client.isOpera();

        client.getEngine();
        client.getEngineVersion();

        client.getOS();
        client.getOSVersion();
        client.isWindows();
        client.isMac();
        client.isLinux();
        client.isUbuntu();
        client.isSolaris();

        client.getDevice();
        client.getDeviceType();
        client.getDeviceVendor();

        client.getCPU();

        client.isMobile();
        client.isMobileMajor();
        client.isMobileAndroid();
        client.isMobileOpera();
        client.isMobileWindows();
        client.isMobileBlackBerry();

        client.isMobileIOS();
        client.isIphone();
        client.isIpad();
        client.isIpod();

        client.getScreenPrint();
        client.getColorDepth();
        client.getCurrentResolution();
        client.getAvailableResolution();
        client.getDeviceXDPI();
        client.getDeviceYDPI();

        client.getPlugins();
        client.isJava();
        client.getJavaVersion(); // functional only in java and full builds, throws an error otherwise
        client.isFlash();
        client.getFlashVersion(); // functional only in flash and full builds, throws an error otherwise
        client.isSilverlight();
        client.getSilverlightVersion();

        client.getMimeTypes();
        client.isMimeTypes();

        client.isFont();
        client.getFonts();

        client.isLocalStorage();
        client.isSessionStorage();
        client.isCookie();

        client.getTimeZone();

        client.getLanguage();
        client.getSystemLanguage();

        client.isCanvas();
        client.getCanvasPrint();
        location.href = "tech.html";
    };
}


const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar__menu')

menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');

})