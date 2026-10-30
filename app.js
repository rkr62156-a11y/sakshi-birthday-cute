(() => {
'use strict';
const CODE='BEAUTIFUL SUAR';
const screens=[...document.querySelectorAll('.screen')];
const form=document.getElementById('unlock-form');
const input=document.getElementById('code');
const error=document.getElementById('error');
const audio=document.getElementById('birthday-audio');
function goTo(id){const next=document.getElementById(id);if(!next||!next.classList.contains('screen'))return;screens.forEach(s=>{const active=s===next;s.classList.toggle('active',active);s.setAttribute('aria-hidden',String(!active));});window.scrollTo({top:0,behavior:'smooth'});}
form?.addEventListener('submit',e=>{e.preventDefault();const typed=(input?.value||'').trim().replace(/\s+/g,' ').toUpperCase();if(typed===CODE){if(error)error.textContent='';goTo('reveal');}else{if(error)error.textContent='Almost, suar! Check the secret words and try again. 🐷';input?.focus();}});
document.addEventListener('click',e=>{const btn=e.target.closest('[data-go]');if(btn)goTo(btn.dataset.go);if(e.target.closest('#replay')){if(audio){audio.pause();audio.currentTime=0;}if(input)input.value='';if(error)error.textContent='';goTo('gate');}});
screens.forEach(s=>s.setAttribute('aria-hidden',String(!s.classList.contains('active'))));
})();