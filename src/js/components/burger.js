import vars from '../_vars';

if (vars.$burger) {
    vars.$burger.addEventListener('click', () => {
    vars.$nav.classList.toggle('nav--visible');
  });

  vars.$navClose.addEventListener('click', () => {
    vars.$nav.classList.remove('nav--visible');
  });

}

