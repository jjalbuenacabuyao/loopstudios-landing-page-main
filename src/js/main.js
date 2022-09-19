const navbarToggler = document.querySelector("[data-nav-toggler]");
const navigation = document.querySelector("[data-navigation]");

navbarToggler.addEventListener('click', () => {
  const visibility = navigation.getAttribute('data-visible');
  if (visibility === 'false') {
    navigation.setAttribute('data-visible', true);
    navbarToggler.setAttribute('aria-expanded', true);
  } else {
    navigation.setAttribute('data-visible', false);
    navbarToggler.setAttribute('aria-expanded', false);
  }
})