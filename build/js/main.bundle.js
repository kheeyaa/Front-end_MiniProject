(()=>{var e={184:()=>{let e=document.querySelector(".gallery"),t=document.querySelector(".gallery__slide");window.addEventListener("scroll",(()=>{let n=window.innerWidth,o=e.offsetTop,r=document.documentElement.scrollTop;if(n>=768&&r>=o&&r<o+4e3){let e=(r-o)/4e3*-80;t.style.transform="translateX("+e+"%)"}}))},432:()=>{document.querySelector(".greeting__button").addEventListener("click",(()=>{let e=document.querySelector(".play"),t=document.querySelector(".greeting__video"),n=!1;for(let t=0;t<e.classList.length;t++)"fa-play"===e.classList[t]&&(n=!0);n?t.play():t.pause(),e.classList.toggle("fa-play")}))},986:()=>{let e=document.getElementsByClassName("register__hashbutton"),t=document.getElementById("Explain"),n=new Map;for(let o of e)o.addEventListener("click",(function(){let e=o.getAttribute("data-label");n.has(e)||(t.innerHTML+=e,n.set(e,1),o.setAttribute("background-color","#000"))}))},44:()=>{let e=[];window.addEventListener("scroll",(()=>{let t=document.documentElement.scrollTop,n=(window.innerHeight,document.body.scrollHeight),o=document.querySelector(".header__bg__cat"),r=document.querySelector(".header");document.querySelector(".nav"),0===t?(r.classList.add("is-top"),r.classList.add("is-top"),r.style.transform="translateY(-100%)"):(r.classList.remove("is-top"),r.classList.remove("is-top"),r.style.transform="translateY(0)"),e[e.length-1]>t?(o.style.transform="scaleX(1)",e=[]):(o.style.transform="scaleX(-1)",e=[]),e.push(t),o.style.left=100*(t/n+.05)+"%"}));let t=document.querySelector(".header__menu"),n=document.querySelector(".nav"),o=document.querySelector(".nav__close");t.addEventListener("click",(()=>{t.classList.toggle("is-active"),n.classList.toggle("is-active"),t.style.opacity="0",t.style.transform="translateX(100%)"})),o.addEventListener("click",(()=>{t.classList.toggle("is-active"),n.classList.toggle("is-active")}));let r=document.querySelector(".header__link"),l=document.querySelector(".header__menu"),s=document.querySelector(".header");r.addEventListener("focus",(()=>{s.style.transform="translateY(0)"})),l.addEventListener("focus",(()=>{s.style.transform="translateY(0)"})),document.querySelector(".nav__link a"),l.addEventListener("focus",(()=>{n.style.transform="translateX(0)"})),document.querySelector(".nav__close").addEventListener("click",(()=>{n.style.transform="translateX(-100%)",t.style.transform="translateX(0)",t.style.opacity="1"})),document.querySelector(".greeting__button").addEventListener("focus",(()=>{n.style.transform="translateX(-100%)",t.style.transform="translateX(0)",t.style.opacity="1"}))},997:()=>{let e;const t=[...document.querySelectorAll(".headAnimation")];document.addEventListener("scroll",(function(){e||(e=setTimeout((function(){e=null;let n=window.pageYOffset;t.forEach((e=>{n+e.getBoundingClientRect().top<=window.innerHeight+n&&e.classList.add("headingAnimation")}))}),300))}))},35:()=>{document.addEventListener("DOMContentLoaded",(function(){let e;if("IntersectionObserver"in window){e=document.querySelectorAll(".lazy");const t=new IntersectionObserver(((e,n)=>{e.forEach((e=>{if(e.isIntersecting){var n=e.target;n.src=n.dataset.src,n.classList.remove("lazy"),t.unobserve(n)}}))}),{rootMargin:"100%"});e.forEach((e=>{t.observe(e)}))}else{let n;function t(){n&&clearTimeout(n),n=setTimeout((()=>{const n=window.pageYOffset;e.forEach((e=>{e.offsetTop<window.innerHeight+n&&(e.src=e.dataset.src,e.classList.remove("lazy"))})),0===e.length&&(document.removeEventListener("scroll",t),window.removeEventListener("resize",t),window.removeEventListener("orientationChange",t))}),100)}e=document.querySelectorAll(".lazy"),document.addEventListener("scroll",t),window.addEventListener("resize",t),window.addEventListener("orientationChange",t)}}))},60:()=>{$((function(){$(".modal-button1").click((function(){$(".modal1").fadeIn()})),$(".button-close1").click((function(){$(".modal1").fadeOut()})),$(".modal-button2").click((function(){$(".modal2").fadeIn()})),$(".button-close2").click((function(){$(".modal2").fadeOut()})),$(".modal-button3").click((function(){$(".modal3").fadeIn()})),$(".button-close3").click((function(){$(".modal3").fadeOut()})),$(".modal-button4").click((function(){$(".modal4").fadeIn()})),$(".button-close4").click((function(){$(".modal4").fadeOut()}))}))},813:()=>{document.getElementById("File").addEventListener("input",(function(e){let t=new FileReader,n=document.querySelector(".register__item--upload");t.onload=function(e){document.querySelector(".register__thumbnail").setAttribute("src",e.target.result)},t.readAsDataURL(e.target.files[0]),n.setAttribute("data-label",e.target.files[0].name)}))},974:()=>{const e=document.querySelector(".splash"),t=document.querySelector(".splash__text");document.addEventListener("DOMContentLoaded",(n=>{setTimeout((()=>{e.classList.add("display-none"),t.classList.add("display-none")}),4e3)}))},130:()=>{document.addEventListener("keydown",(function(e){const t=e.keyCode;console.log("pushed key "+e.key);let n=document.activeElement.className;13==t&&(console,"register__item--upload"===n&&$("#File").trigger("click"))}))}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var l=t[o]={exports:{}};return e[o](l,l.exports,n),l.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";n(44),n(35),n(813),n(184),n(432),n(60),n(974),n(986),n(997),n(130),history.scrollRestoration?history.scrollRestoration="manual":window.onbeforeunload=function(){window.scrollTo(0,0)}})()})();