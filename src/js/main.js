import './_vendor';

import './_functions';
import './components/card-bottom-tabs';
import './components/banner-slider.js';
import './components/catalog-slider.js';
import './components/catalog-props.js';
import './components/color-select.js';
import './components/card-slider.js';
import './components/product.js';
import './components/stepper.js';
import './components/catalog-filter-toggle.js';
// import 'simplebar/dist/simplebar.css';
// vars.$freeDeliveryBtn.addEventListener('click', (e) => {
//   e.currentTarget.closest('.free-delivery').style.display = 'none';
// });

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
