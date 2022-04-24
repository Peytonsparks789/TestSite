/* Code to connect to Google Analytics page */

const imported = document.createElement('script');
imported.src = 'https://www.googletagmanager.com/gtag/js?id=UA-12xxxxxxx-1';
document.head.appendChild(imported);


window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

gtag('config', 'G-MMQ5VE19V4');