import tabs from "./modules/tabs";
import modal from "./modules/modal";
import timer from "./modules/timer";
import menuCard from "./modules/menuCard";
import form from "./modules/form";
import slider from "./modules/slider";
import calc from "./modules/calc";
import {openModal} from './modules/modal';

window.addEventListener("DOMContentLoaded", function () {
 const modalTimerId = setTimeout(() => openModal(".modal", modalTimerId), 30000);

  tabs(".tabheader__item", ".tabcontent", ".tabheader__items", "tabheader__item_active");
  modal("[data-modal]", ".modal", modalTimerId);
  timer(".timer", '2021-05-05');
  menuCard();
  form("form", modalTimerId);
  slider({
    container: '.offer__slider',
    nextArrow: '.offer__slider-next',
    slide: '.offer__slide',
    prevArrow: '.offer__slider-prev',
    totalCounter: '#total',
    currentCounter: '#current',
    wrapper: '.offer__slider-wrapper',
    field: '.offer__slider-inner'
  });
  calc();
});
