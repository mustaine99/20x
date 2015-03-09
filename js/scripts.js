$(document).ready(function() {
   
 

   $(window).load(function() {

      // Availabilities
      $("#avail-top").click(function(){
		  $("#avail").toggleClass("active")
	  });
      
	  $('#avail-top').click(function(){
         if ($('#avail-top').hasClass('open')) {
            $(this).removeClass('open');
            $(this).addClass('close');
       } else {
            $(this).removeClass('close');
            $(this).addClass('open');             
         }
      });
   

      // Disclaimer

	  
      var html = $('html');

      $('.disclaimer .close').bind('click tap', function(e){
         e.preventDefault();
         $(this).parents('.modal').removeClass('visible');
         html.removeClass('fancybox-lock');
      });
      
      $('#disclaimer').bind('click tap', function(e){
         e.preventDefault();
         $('.disclaimer').toggleClass('visible');
         html.addClass('fancybox-lock');
      });

      $('#disclaimer').bind('click tap', function(e){
         
		 $(this).removeClass('visible');
         html.removeClass('fancybox-lock');
      });

      $('.disclaimer .wrapper').bind('click tap', function(e){
         e.stopPropagation();
      });
	  
	  
	   // Site credits
       $("#credits").bind("click tap", function(e) {
         e.preventDefault();
         var el = $(this);
         el.text() == el.data("text-swap") 
         ? el.text(el.data("text-original")) 
        : el.text(el.data("text-swap"));
        });
	  
	  
	  
	  // Carousel

      $('.carousel-neigh').slick({
        dots: true,
        infinite: true,
		centerPadding: '10px',
		centerMode: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 4,
		variableWidth: true,
        responsive: [
      {
        breakpoint: 1037,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
       }
      },
      {
        breakpoint: 643,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
     ]
     });  

              
	  

  
		
		
		
		// Prevent Href top page
		$('a').click(function(e){  
          e.preventDefault();
         });
		 
	   
		 
		 
      // Nav Solapas Neigh

       $(".cafe").click(function(){
            $("#cafe").show();
       });
       $(".close, .fitness, .museums, .shopping, .transport").click(function(){
        $("#cafe").hide();
       });
	   
	   $(".fitness").click(function(){
            $("#fitness").show();
       });
       $(".close, .cafe, .museums, .shopping, .transport").click(function(){
        $("#fitness").hide();
       });
	   
	   $(".museums").click(function(){
            $("#museums").show();
       });
       $(".close, .cafe, .fitness, .shopping, .transport").click(function(){
        $("#museums").hide();
       });
	   
	   $(".shopping").click(function(){
            $("#shopping").show();
       });
       $(".close, .cafe, .fitness, .museums, .transport").click(function(){
        $("#shopping").hide();
       });
	   
	   $(".transport").click(function(){
            $("#transport").show();
       });
       $(".close, .cafe, .fitness, .museums, .shopping").click(function(){
        $("#transport").hide();
       });

	   
	   

	  
	  


	  
   });


});

 