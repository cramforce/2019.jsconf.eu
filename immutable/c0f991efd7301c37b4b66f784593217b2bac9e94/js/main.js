"use strict";var e=!1;function t(){var t;e||(e=!0,(t=document.getElementById("typekit").getAttribute("data-tracking-url"))&&((new Image).src=t))}window.addEventListener("load",()=>{t(),"serviceWorker"in navigator&&navigator.serviceWorker.register("/sw.js")}),setTimeout(t,500);