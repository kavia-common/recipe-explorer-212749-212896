/* Shared app behaviors for all screens */
(function () {
  // Example: delegate clicks for any anchor with href="#"
  document.addEventListener('click', function (e) {
    const a = e.target.closest('a[href="#"]');
    if (a) {
      e.preventDefault();
    }
  });
})();
