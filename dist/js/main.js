(()=>{"use strict";(e=>{const t=document.getElementById("timer-hours"),n=document.getElementById("timer-minutes"),r=document.getElementById("timer-seconds");let l;const c=e=>{const t=String(e);return t.length<2?`0${t}`:t},a=()=>{const{hours:e,minutes:a,seconds:o,timeRemaining:u}=(()=>{let e=(new Date("10 march 2022").getTime()-(new Date).getTime())/1e3;return{hours:Math.floor(e/60/60),minutes:Math.floor(e/60%60),seconds:Math.floor(e%60),timeRemaining:e}})();if(u<=0)return clearInterval(l),t.textContent="00",n.textContent="00",void(r.textContent="00");t.textContent=c(e),n.textContent=c(a),r.textContent=c(o)};a(),l=setInterval(a,1e3)})(),(()=>{const e=document.querySelector(".menu"),t=document.querySelector("menu"),n=t.querySelector(".close-btn"),r=t.querySelectorAll("ul>li>a"),l=()=>{t.classList.toggle("active-menu")};e.addEventListener("click",l),n.addEventListener("click",l),r.forEach((e=>e.addEventListener("click",l)))})(),(()=>{const e=document.querySelector(".popup"),t=e.querySelector(".popup-content"),n=document.querySelectorAll(".popup-btn"),r=e.querySelector(".popup-close");let l,c;const a=()=>{l=requestAnimationFrame(a),c<100?(c+=2,t.style.opacity=`${c}%`):(cancelAnimationFrame(l),t.style.opacity="")};n.forEach((n=>{n.addEventListener("click",(()=>{e.style.display="block",console.log(screen.width),+screen.width>768&&(c=0,t.style.opacity=0,a())}))})),r.addEventListener("click",(()=>{e.style.display="none"}))})(),(()=>{const e=document.querySelectorAll("menu>ul>li>a"),t=document.querySelector('a[href="#service-block"]');e.forEach((e=>{e.addEventListener("click",(t=>{t.preventDefault();let n=e.getAttribute("href");document.querySelector(n).scrollIntoView({behavior:"smooth",block:"start"})}))})),t.addEventListener("click",(e=>{e.preventDefault();let n=t.getAttribute("href");document.querySelector(n).scrollIntoView({behavior:"smooth",block:"start"})}))})(),(()=>{const e=document.querySelectorAll("input[type='tel']"),t=document.querySelector(".mess"),n=document.querySelectorAll("input[type='text']"),r=document.querySelectorAll("input[type='email']"),l=e=>{let t=/^[\s\-]+|[\s\-]+$/;return e=e.replace(t,""),t=/\s{2,}/g,e.replace(t," ")};t.addEventListener("input",(e=>{e.target.value=e.target.value.replace(/[^а-яА-Я\s\-]/g,"")})),t.addEventListener("blur",(e=>{e.target.value=l(e.target.value)})),e.forEach((e=>{e.addEventListener("input",(e=>{e.target.value=e.target.value.replace(/[^\d\(\-\)]+$/g,"")}))})),n.forEach((e=>{if(e.classList.contains("calc-item"))e.classList.contains("calc-item")&&e.addEventListener("input",(e=>{e.target.value=e.target.value.replace(/\D+/,"")}));else{let t=/[^а-яА-Я\s\-]/g;e.addEventListener("input",(e=>{e.target.value=e.target.value.replace(t,"")})),e.addEventListener("blur",(e=>{let t;e.target.value=l(e.target.value),t=/^[а-яА-Я]|\s[а-яА-Я]/g,e.target.value=e.target.value.replace(t,(e=>e.toUpperCase()))}))}})),r.forEach((e=>{e.addEventListener("input",(e=>{e.target.value=e.target.value.replace(/[^a-zA-Z\d\-\.\_\!\~\*\'\@]/g,"")}))}))})()})();