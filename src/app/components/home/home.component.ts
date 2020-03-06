import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    'use strict';
    // tslint:disable: deprecation
    // tslint:disable: variable-name
    const window_width = $(window).width();
    const window_height = window.innerHeight;
    const header_height = $('.default-header').height();
    const header_height_static = $('.site-header.static').outerHeight();
    const fitscreen = window_height - header_height;

    $('.fullscreen').css('height', window_height);
    $('.fitscreen').css('height', fitscreen);
    const nav_offset_top = $('header').height() + 50;
    /*-------------------------------------------------------------------------------
      Navbar
    -------------------------------------------------------------------------------*/

    // * Navbar Fixed
    function navbarFixed() {
      if ($('.header_area').length) {
        $(window).scroll(() => {
          const scroll = $(window).scrollTop();
          if (scroll >= nav_offset_top) {
            $('.header_area').addClass('navbar_fixed');
          } else {
            $('.header_area').removeClass('navbar_fixed');
          }
        });
      }
    }
    navbarFixed();


    /*----------------------------------------------------*/
    /*  Magnific Pop Up
      /*----------------------------------------------------*/
    $('.img-gal').magnificPopup({
      type: 'image',
      gallery: {
        enabled: true
      }
    });

    /*----------------------------------------------------*/
    /*  Testimonials Slider
      /*----------------------------------------------------*/
    if ($('.popular-places-slider').length) {
      $('.popular-places-slider').owlCarousel({
        loop: true,
        margin: 0,
        items: 4,
        nav: false,
        autoplay: false,
        smartSpeed: 1500,
        dots: false,
        responsiveClass: true,
        responsive: {
          0: {
            items: 1
          },
          576: {
            items: 2
          },
          1200: {
            items: 4
          }
        }
      });
    }

    if ($('.testi-slider').length) {
      $('.testi-slider').owlCarousel({
        loop: true,
        margin: 30,
        items: 1,
        nav: false,
        autoplay: 2500,
        smartSpeed: 1500,
        dots: true,
        responsiveClass: true,
        thumbs: true,
        thumbsPrerendered: true,
        navText: ['<i class=\'lnr lnr-arrow-left\'></i>', '<i class=\'lnr lnr-arrow-right\'></i>']
      });
    }

    /*----------------------------------------------------*/
    /*  MailChimp Slider
      /*----------------------------------------------------*/
    function mailChimp() {
      $('#mc_embed_signup').find('form').ajaxChimp();
    }
    mailChimp();
    function mailChimp2() {
      $('#mc_embed_signup2').find('form').ajaxChimp();
    }
    mailChimp2();

    /*----------------------------------------------------*/
    /*  Nice Select js
      /*----------------------------------------------------*/
    $('select').niceSelect();

  }

}
