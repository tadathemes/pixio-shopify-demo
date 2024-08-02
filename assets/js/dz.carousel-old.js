/* JavaScript Document */
jQuery(window).on('load', function() {
    'use strict';
	
	
	// service-silder-swiper
	if(jQuery('.main-swiper').length > 0){
		var swiper = new Swiper(".main-swiper-thumb", {
			loop: true,
			spaceBetween: 10,
			slidesPerView: "auto",
			//freeMode: true,
			watchSlidesProgress: true,
			//autoplay: {
			//   delay: 1500,
			//},
		});
		var swiper2 = new Swiper(".main-swiper", {
			loop: true,
			effect: "fade",
			speed: 1000,
			parallax: true,
			autoplay: {
			   delay: 1500,
			},
			pagination: {
				el: ".swiper-pagination-five",
				clickable: true,
				renderBullet: function (index, className) {
					return '<span class="' + className + '">' + 0 + (index + 1) + "</span>";
				},
			},
			navigation: {
				nextEl: ".swiper-button-next",
				prevEl: ".swiper-button-prev",
			},
		});
	}
	
	if(jQuery('.main-swiper-two').length > 0){
		var swiper = new Swiper(".main-swiper-thumb", {
			loop: true,
			spaceBetween: 10,
			slidesPerView: "auto",
			//freeMode: true,
			watchSlidesProgress: true,
			autoplay: {
			   delay: 1500,
			},
		});
		var swiper2 = new Swiper(".main-swiper-two", {
			loop: true,
			effect: "fade",
			speed: 1000,
			parallax: true,
			autoplay: {
			   delay: 1500,
			},
			pagination: {
				el: ".swiper-pagination-five",
				clickable: true,
			},
			thumbs: {
			  swiper: swiper,
			},
		});
	}
	
	// kanbern Swiper
	if(jQuery('.kanbern-bnr').length > 0){
		var swiperTestimonial = new Swiper('.kanbern-bnr', {
			loop: true,
			spaceBetween: 10,
			slidesPerView: "auto",
			effect: "fade",
			parallax: true,
			speed: 1500,
			autoplay: {
			   delay: 2000,
			},
		});
	}
	
	// blog-slideshow Swiper
	if(jQuery('.blog-slideshow').length > 0){
		var swiperTestimonial = new Swiper('.blog-slideshow', {
			loop: true,
			spaceBetween: 0,
			slidesPerView: "auto",
			speed: 1500,
			autoplay: {
			   delay: 2000,
			},
			pagination: {
			  el: ".swiper-pagination-two",
			  clickable: true,
			},
		});
	}
	
	// Testimonial Swiper
	if(jQuery('.testimonial-swiper').length > 0){
		var swiperTestimonial = new Swiper('.testimonial-swiper', {
			slidesPerView: 3,
			spaceBetween: 30,
			loop: true,
			autoplay: {
			   delay: 3000,
			},
			navigation: {
			  nextEl: ".testimonial-button-next",
			  prevEl: ".testimonial-button-prev",
			},
			breakpoints: {
				300: {
					slidesPerView: 1,
				},
				600: {
					slidesPerView: 1,
				},
				767: {
					slidesPerView: 2,
				},
				1200: {
					slidesPerView: 3,
				},
				
			}
		});
	}
	
	if(jQuery('.project-carousel').length > 0){
		var swiperBook = new Swiper('.project-carousel', {
			loop:true,
			centeredSlides: true,
			spaceBetween:30,
			slidesPerView: 1.5,
			autoplay: {
				delay: 4000,
			},
			navigation: {
				nextEl: ".portfolio-button-next",
				prevEl: ".portfolio-button-prev",
			},
			breakpoints: {
				300: {
					slidesPerView: 1,
				},
				600: {
					slidesPerView: 1,
				},
				767: {
					slidesPerView: 2,
				},
				991: {
					slidesPerView: 1.5,
				},
				1600: {
					slidesPerView:1.5,
				},
			}
		});
	}
	
	if(jQuery('.swiper-three').length > 0){
		var swiper = new Swiper( '.swiper-three', {
			slidesPerView: 1,
			centeredSlides: true,
			spaceBetween: 90,
			loop: true,
			pagination: {
			  el: ".swiper-pagination-three",
			  clickable: true,
			},
			autoplay: {
				delay: 4500,
			},
			navigation: {
			  nextEl: ".swiper-button-next",
			  prevEl: ".swiper-button-prev",
			},
			breakpoints: {
				320: {
					slidesPerView: 1,
				},
				1200: {
					slidesPerView: 1,
				},
				1680: {
					slidesPerView: 1,
				},
			}
		});
	}
	
	if(jQuery('.testimonial-swiper-2').length > 0){
		var swiperTestimonial2 = new Swiper( '.testimonial-swiper-2', {
			slidesPerView: 1.5,
			centeredSlides: true,
			spaceBetween: 95,
			loop: true,
			autoplay: {
				delay: 4000,
			},
			breakpoints: {
				320: {
					slidesPerView: 1,
				},
				1200: {
					slidesPerView: 1,
				},
				1680: {
					slidesPerView: 1,
				}
			}
		} );
	}
	
	if(jQuery('.client-swiper').length > 0){
		var swiper = new Swiper(".client-swiper", {
			slidesPerView: 5,
			autoplay: {
				delay: 2000,
			},
			pagination: {
			  el: ".swiper-pagination",
			  clickable: true,
			},
			breakpoints: {
				1600: {
					slidesPerView: 5,
				},
				1400: {
					slidesPerView: 4,
				},
				1200: {
					slidesPerView: 3,
				},
				991: {
					slidesPerView: 3,
				},
				591: {
					slidesPerView: 2,
				},
				320: {
					slidesPerView: 2,
				},
			}
		});
	}

	if(jQuery('.swiper-two').length > 0){
		var swiper = new Swiper( '.swiper-two', {
			slidesPerView: 5,
			spaceBetween: 30,
			loop: true,
			autoplay: {
				delay: 2500,
			},
			pagination: {
			  el: ".swiper-pagination",
			  clickable: true,
			},
			breakpoints: {
				1200: {
					slidesPerView: 5,
				},
				1024: {
					slidesPerView: 4,
				},
				991: {
					slidesPerView: 3,
				},
				767: {
					slidesPerView: 3,
					centeredSlides: true,
				},
				320: {
					slidesPerView: 2,
					spaceBetween: 15,
					centeredSlides: true,
				},
			}
		} );
	}

	if(jQuery('.swiper-four').length > 0){
		var swiper = new Swiper( '.swiper-four', {
			slidesPerView: 4,
			spaceBetween: 30,
			loop: true,
			pagination: {
				el: ".swiper-pagination-trading",
			},
			autoplay: {
				delay: 2500,
			},
			navigation: {
				nextEl: ".tranding-button-next",
				prevEl: ".tranding-button-prev",
			},	
			breakpoints: {
				1200: {
					slidesPerView: 4,
				},
				1024: {
					slidesPerView: 4,
				},
				991: {
					slidesPerView: 3,
				},
				591: {
					slidesPerView: 2,
					spaceBetween: 20,
				},
				340: {
					slidesPerView: 2,
					spaceBetween: 15,
				},
			}
		});
	}
	
	if(jQuery('.swiper-product').length > 0){
		var swiper = new Swiper( '.swiper-product', {
			slidesPerView: 4,
			spaceBetween: 15,
			loop: true,
			pagination: {
				el: ".swiper-pagination-trading",
			},
			autoplay: {
				delay: 2000,
			},
			breakpoints: {
				1200: {
					slidesPerView: 4,
				},
				767: {
					slidesPerView: 2.5,
					centeredSlides: true,
				},
				591: {
					slidesPerView: 2,
					centeredSlides: true,
				},
				340: {
					slidesPerView: 1,
					centeredSlides: true,
				},
			}
		});
	}

	if(jQuery('.swiper-blog-post').length > 0){
		var swiper = new Swiper( '.swiper-blog-post', {
			slidesPerView: 3,
			spaceBetween: 30,
			loop: true,
			pagination: {
				el: ".swiper-pagination-trading",
			},
			autoplay: {
				delay: 2000,
			},
			breakpoints: {
				1200: {
					slidesPerView: 3,
				},
				1024: {
					slidesPerView: 3,
				},
				991: {
					slidesPerView: 2,
				},
				767: {
					slidesPerView: 1.5,
					spaceBetween: 15,
					centeredSlides: true,
				},
				575: {
					slidesPerView: 1.5,
					spaceBetween: 15,
					centeredSlides: true,
				},
				300: {
					slidesPerView: 1.2,
					spaceBetween: 15,
				},
				
			}
		});
	}

	if(jQuery('.category-swiper').length > 0){
		var swiper = new Swiper( '.category-swiper', {
			slidesPerView: 7,
			centeredSlides: false,
			spaceBetween: 20,
			loop: true,
				pagination: {
				el: ".swiper-pagination-two",
			},
			autoplay: {
				delay: 3000,
			},
			navigation: {
				nextEl: ".tranding-button-next", 
				prevEl: ".tranding-button-prev",
			},	
			breakpoints: {
				1600: {
					slidesPerView: 7,
				},
				1200: {
					slidesPerView: 5,
				},
				991: {
					slidesPerView: 4,
				},
				591: {
					slidesPerView: 3, 	
				},
				320: {
					slidesPerView: 2,
					spaceBetween: 15,
				},
			}
		});
	}
	
	if(jQuery('.category-swiper2').length > 0){
		var swiper = new Swiper( '.category-swiper2', {
			slidesPerView: 6,
			centeredSlides: false,
			spaceBetween: 20,
			loop: true,
				pagination: {
				el: ".swiper-pagination-two",
			},
			autoplay: {
				delay: 3000,
			},
			navigation: {
				nextEl: ".tranding-button-next", 
				prevEl: ".tranding-button-prev",
			},	
			breakpoints: {
				1600: {
					slidesPerView: 6,
					spaceBetween: 40,
				},
				1200: {
					slidesPerView: 6,
					spaceBetween: 20,
				},
				991: {
					slidesPerView: 4,
					spaceBetween: 20,
				},
				575: {
					slidesPerView: 3, 	
					spaceBetween: 15,
				},
				320: {
					slidesPerView: 2,
					spaceBetween: 15,
				},
			}
		});
	}

	if(jQuery('.swiper-five').length > 0){
		var swiper = new Swiper( '.swiper-five', {
			slidesPerView: 1,
			spaceBetween: 20,
			loop: true,
			pagination: {
			  el: ".swiper-pagination-two",
			  clickable: true,
			},
			navigation: {
			  nextEl: ".about-button-next",
			  prevEl: ".about-button-prev",
			},
			breakpoints: {
				1600: {
					slidesPerView: 1,
				},
			}
		} );
	}

	if(jQuery('.swiper-six').length > 0){
		var swiper = new Swiper( '.swiper-six', {
			slidesPerView: 8,
			spaceBetween: 20,
			loop: true,
			centeredSlides: true,
			breakpoints: {
				1600: {
					slidesPerView: 8,
				},
				1480: {
					slidesPerView: 7,
				},
				1280: {
					slidesPerView: 5,
				},
				1024: {
					slidesPerView: 4,
				},
				991: {
					slidesPerView: 4,
				},
				768: {
					slidesPerView: 3,
				},
				600: {
					slidesPerView: 2,
				} ,
				320: {
					slidesPerView: 1,
				},
			}
		} );
	}
	
	if(jQuery('.swiper-seven').length > 0){
		var swiper = new Swiper( '.swiper-seven', {
			slidesPerView: 6,
			spaceBetween: 20,
			loop: true,
			breakpoints: {
				1600: {
					slidesPerView: 6,
				},
				1200: {
					slidesPerView: 5,
				},
				1024: {
					slidesPerView: 4,
				},
				991: {
					slidesPerView: 3,
				},
				768: {
					slidesPerView: 3,
				},
				600: {
					slidesPerView: 2,
				} ,
				320: {
					slidesPerView: 1,
				},
			}
		} );
	}

	if(jQuery('.product-gallery-swiper').length > 0){
		var swiper = new Swiper(".product-gallery-swiper", {
		  spaceBetween: 15,
		  slidesPerView: 4,
		  freeMode: true,
		  watchSlidesProgress: true,
		});
		var swiper2 = new Swiper(".product-gallery-swiper2", {
		  spaceBetween: 0,
		  navigation: {
			nextEl: ".gallery-button-next",
			prevEl: ".gallery-button-prev",
		  },
		  thumbs: {
			swiper: swiper,
		  },
		});
	}

	if(jQuery('.blog-swiper').length > 0){
		var swiper = new Swiper( '.blog-swiper', {
			slidesPerView: 4,
			spaceBetween: 30,
			loop: true,
			autoplay: {
				delay: 2500,
			},
			breakpoints: {
				1200: {
					slidesPerView: 4,
				},
				1024: {
					slidesPerView: 3,
				},
				991: {
					slidesPerView: 2,
				},
				600: {
					slidesPerView: 2,
				},
				320: {
					slidesPerView: 1,
				},
			}
		} ); 
	}
	
	
	// testimonial
	if(jQuery('.product-gallery').length > 0){
		var swiper = new Swiper(".product-thumb", {
			slidesPerView: "2",
			spaceBetween: 0,
			
			grid: {
				rows: 2,
			},
			pagination: {
				el: ".product-swiper-pagination",
				clickable: true,
				renderBullet: function (index, className) {
				  return '<span class="' + className + '">0' + (index + 1) + "</span>";
				},
			},
			breakpoints: {
				
				576: {
					slidesPerView: 2,
				},
				300: {
					slidesPerView: 1,
				},
			}
		});
		var swiper2 = new Swiper(".product-gallery", {
			slidesPerView: "1",
			
			thumbs: {
			  swiper: swiper,
			},
		});
	}
	
	// testimonial
	if(jQuery('.portfolio-gallery').length > 0){
		var swiper = new Swiper(".portfolio-thumb", {
			slidesPerView: "auto",
			spaceBetween: 0,
			
		});
		var swiper2 = new Swiper(".portfolio-gallery", {
			slidesPerView: "1",
			
			thumbs: {
			  swiper: swiper,
			},
		});
	}
	
	if(jQuery('.portfolio-gallery2').length > 0){
		var swiper = new Swiper( '.portfolio-gallery2', {
			slidesPerView: "auto",
			spaceBetween: 30,
			
			loop: true,
			autoplay: {
				delay: 2500,
			},
			pagination: {
				el: ".swiper-pagination-two",
			},
			navigation: {
				nextEl: ".portfolio-button-next",
				prevEl: ".portfolio-button-prev",
			},
			breakpoints: {
				1200: {
					slidesPerView: "auto",
				},
				576: {
					slidesPerView: "auto",
				},
				300: {
					slidesPerView: 1,
				},
			}
		} ); 
	}
	
	if(jQuery('.portfolio-gallery3').length > 0){
		var swiper = new Swiper( '.portfolio-gallery3', {
			slidesPerView: 3,
			spaceBetween: 30,
			loop: true,
			autoplay: {
				delay: 2500,
			},
			pagination: {
				el: ".swiper-pagination-two",
			},
			navigation: {
				nextEl: ".portfolio-button-next",
				prevEl: ".portfolio-button-prev",
			},
			breakpoints: {
				1200: {
					slidesPerView: 3,
				},
				768: {
					slidesPerView: 2,
				},
				600: {
					slidesPerView: 2,
					spaceBetween: 15,
				},
				300: {
					slidesPerView: 1,
					spaceBetween: 15,
				},
			}
		} ); 
	}
	// Split Swiper
	if(jQuery('.spilt-swiper-slider').length > 0){
		var spiltSwiper = new Swiper('.spilt-swiper-slider', {
			direction: "vertical",
			loop: true,
			slidesPerView: 1,
			mousewheel: true,
			paginationClickable: true,
			pagination: {
				el: ".swiper-pagination-two",
			},
			grabCursor: true,
			speed: 1000,
			parallax: true,
			//autoplay: {
			//   delay: 3000,
			//},
			effect: "slide",
			mousewheelControl: 1,
		});
	}
	
});
/* Document .ready END */