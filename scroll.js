// SyirkahMu — animasi scroll ringan (Beranda). Tanpa library luar; kalau browser tidak mendukung, konten tetap tampil normal.
(function(){
var revealEls = document.querySelectorAll('.reveal, .reveal-grid');
if ('IntersectionObserver' in window && revealEls.length) {
var observer = new IntersectionObserver(function(entries){
entries.forEach(function(entry){
if (entry.isIntersecting) { entry.target.classList.add('tampil'); observer.unobserve(entry.target); }
});
}, { threshold: 0.15 });
revealEls.forEach(function(el){ observer.observe(el); });
} else {
revealEls.forEach(function(el){ el.classList.add('tampil'); });
}
var header = document.querySelector('header.site');
if (header) {
window.addEventListener('scroll', function(){
if (window.scrollY > 30) { header.classList.add('menyusut'); } else { header.classList.remove('menyusut'); }
}, { passive: true });
}
})();
