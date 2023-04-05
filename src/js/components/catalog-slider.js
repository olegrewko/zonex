import Swiper from "../vendor/swiper.min.js";
import vars  from "../_vars";
 const catalogSlider = new Swiper(vars.$bannerSlider, {
  loop: true,
  sliderPerView: 1,
  pagination: {
    el: '.banner-pag',
    type: 'bullets',
    clickable: 'true',
  },
 });
