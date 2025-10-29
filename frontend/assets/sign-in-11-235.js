(function () {
  const btn = document.getElementById('big-button-54-668');
  if (btn) {
    btn.addEventListener('click', function (e) {
      e.preventDefault();
      // Placeholder action
      console.log('Sign In clicked');
    });
  }
  // Make label clicks focus corresponding inputs despite visual layering
  const emailLabel = document.querySelector('label[for="email"]');
  if (emailLabel) {
    emailLabel.addEventListener('click', () => {
      const i = document.getElementById('email');
      if (i) i.focus();
    });
  }
  const pwdLabel = document.querySelector('label[for="password"]');
  if (pwdLabel) {
    pwdLabel.addEventListener('click', () => {
      const i = document.getElementById('password');
      if (i) i.focus();
    });
  }
})();
