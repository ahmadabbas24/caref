const btn=document.getElementById('menuBtn'),links=document.getElementById('links');
btn.addEventListener('click',()=>{const o=links.classList.toggle('open');btn.setAttribute('aria-expanded',o);btn.setAttribute('aria-label',o?'Close menu':'Open menu')});
document.querySelectorAll('[data-dummy]').forEach(a=>a.addEventListener('click',e=>e.preventDefault()));
links.addEventListener('click',e=>{if(e.target.closest('a')){links.classList.remove('open');btn.setAttribute('aria-expanded','false')}});

// Scroll reveal: elements stay visible; only items below the fold get a small lift that settles as they enter.
if('IntersectionObserver' in window){
  const io=new IntersectionObserver(es=>es.forEach(en=>{if(en.isIntersecting){en.target.classList.remove('pre');io.unobserve(en.target)}}),{rootMargin:'0px 0px -8% 0px'});
  document.querySelectorAll('.reveal').forEach((el,i)=>{
    if(el.getBoundingClientRect().top>innerHeight){el.classList.add('pre');el.style.transitionDelay=(i%3)*70+'ms';io.observe(el)}
  });
}
