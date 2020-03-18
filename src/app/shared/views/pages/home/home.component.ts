import { Component, OnInit } from '@angular/core';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  config: SwiperConfigInterface = {
    observer: true,
    direction: "horizontal",
    threshold: 50,
    // direction: 'vertical',
    autoplay: {
      delay: 3500,
      disableOnInteraction: false
    },
    fadeEffect: {
      crossFade: true
    },
    // mousewheel: {
    //   invert: false
    // },
    loop: true,
    spaceBetween: 0,
    slidesPerView: 1,
    centeredSlides: true,
    breakpoints: {
      // when window width is >= 640px
      769: {
        slidesPerView: 1,
        spaceBetween: 0
      }
    }
  };
  constructor() { }

  ngOnInit() {
  }


}
