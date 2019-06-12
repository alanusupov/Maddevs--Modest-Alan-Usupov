$(document).ready(function () {
  
    var Slider = {
      slideIndex: 1,
  
      changeSlide: function(){
        var arrows = $('.arrows');
        var self = this;
  
        arrows.on('click', function(event){
          event.preventDefault();
  
          if($(this).hasClass('next')){
            self.showSlides(self.slideIndex += 1);
          }
          if($(this).hasClass('prev')){
            self.showSlides(self.slideIndex -= 1);
          }
        });
      },
  
      showSlides: function (n = 1){
        var slides = $('.mySlides');
        var dots = $('.dot');
  
        if(n < 1) {
          this.slideIndex = slides.length;
        }
        if (n > slides.length){
          this.slideIndex = 1; 
        }
  
        slides.css('display', 'none');
        dots.removeClass('active');
  
        $(slides[this.slideIndex - 1]).css('display', 'block');
        $(dots[this.slideIndex - 1]).addClass('active');
      },
      currentSlide: function(){
        var dots = $('.dot');
        var self = this;
  
        dots.on('click', function(){
          self.showSlides(self.slideIndex = $(this).index() + 1);
        })
  
      },
      play: function(){
        setInterval( () => {
            this.showSlides(this.slideIndex += 1);
  
        }, 2000);
      },
      init: function(){
          this.showSlides();
          this.changeSlide();
          this.currentSlide();
          this.play();
      }
    };
  
    
  Slider.init();
  
  });