import vars  from "../_vars";
if (vars.$colorSelect) {
  vars.$colorSelect.addEventListener('click', (e) => {
    if (e.target.classList.contains('color-select__btn')) {

      document.querySelectorAll('.color-select__btn').forEach(el => el.classList.remove('color-select__btn--active'));

      let color = e.target.dataset.color;

      e.currentTarget.querySelector('.color-select__selected span').textContent = color;

      e.target.classList.add('color-select__btn--active');
    }
  });

}
