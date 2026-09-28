// Menú del celular. Es lo único que necesita JavaScript en el sitio.
(function () {
  var btn = document.querySelector('.menu-btn');
  if (!btn) return;
  function set(open) {
    document.body.classList.toggle('menu-abierto', open);
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
  }
  btn.addEventListener('click', function () {
    set(!document.body.classList.contains('menu-abierto'));
  });
  document.querySelectorAll('.nav a').forEach(function (a) {
    a.addEventListener('click', function () { set(false); });
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') set(false);
  });
})();
