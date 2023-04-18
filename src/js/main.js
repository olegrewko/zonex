import './_vendor';

import './_functions';
import './components/jquery.js';
// import './vendor/focus-visible.min.js';
// import './components/main-slider';
import './components/catalog-slider';
// import './components/marketing';
import './components/catalog-filter-toggle';
import './components/catalog-props';
import './components/color-select';
import './components/stepper';
import './components/card-slider';
import './components/card-bottom-tabs';
import './components/products';
import './components/burger';
import './components/mobile-filter';
import vars from '../js/_vars';
// import {resizeContent} from './functions/resize';
// import {scrollTo} from './functions/smooth-scroll';
// import {disableScroll, enableScroll} from './functions/stop-scroll';
// import SimpleBar from 'simplebar';

//disableScroll(fix) // fix -> class of element with position: fixed
// new SimpleBar(document.getElementById('myElement'));
if (document.querySelector('[data-bar]')) {
  new SimpleBar(document.querySelector('.card-description__navigation'));
}

if (document.querySelector('.to-top')) {
  document.querySelector('.to-top').addEventListener('click', (e) => {
    e.preventDefault();
    scrollTo(document.querySelector('.site-container'));
  });
}
$(function () {
  $('.nav__btn').on('click', function name() {
    $('.nav__list').toggleClass('nav__list--active');


  });
  });



 $(document).ready(function () {
        var defaults = {
          containerID: "toTop",
          containerHoverID: "toTopHover",
          scrollSpeed: 1200,
          easingType: "linear",
        };

        $().UItoTop({
          easingType: "easeOutQuart",
        });
      });
