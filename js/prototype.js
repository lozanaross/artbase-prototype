jQuery(document).ready(function($) {


	/* Homepage keyword search focus */
	$('.search-box-focus').on('click', function() { 
		$('input').focus();
	}); 

	$('.open-query').on('click', function(e) { 
	e.preventDefault();
  	  
	    if ($('.content').hasClass('show')) {
	        $('.content').toggleClass('show');
	        $('.content').slideToggle(350);
	        $('.query-area').removeClass('active');
	    } else {
	    	$('.content').addClass('show');
	       	$('.content').slideDown(350);
	        $('.query-area').addClass('active');
	    }

	});


	/* Timeline open/close area */

	$('.timeline-full-screen').hide();  

	$('.timeline-button').on('click', function() { 
		$('.timeline-full-screen').show();
	}); 

	$('.timeline-close').on('click', function() { 
	    $('.timeline-full-screen').hide();
	});

	/* Access state hovers */

	$('.state-hover').hide(); 

	$('.access-button, .metadata-richness-state, .thumbnail-image').hover(function() { 
	    $(this).children('.state-hover').show();
	}, function() { 
	    $(this).children('.state-hover').hide(); 
	});

	$('.access-button').hover(function() { 
		$(this).toggleClass('background-change');
	});

	/* Dependencies details and view artwork areas */

	$('.info-layer-background').hide();

	$('.access-button').on('click', function() { 
	    $('.info-layer-background').filter('[data-popup="'+
	    	$(this).data('source')+'"]').show();
	}); 

	$('.info-layer-background').on('click', function() { 
	    $('.info-layer-background').hide();
	});
	

	/* Metadata collapsible areas */

	$('.collapsible').click(function(e) {
  	e.preventDefault();
  
	    var $this = $(this);
	  
	    if ($this.next().hasClass('show')) {
	        $this.next().removeClass('show');
	        $this.next().slideUp(350);
	        $this.removeClass('active');
	    } else {
	        $this.next().toggleClass('show');
	        $this.next().slideToggle(350);
	        $this.addClass('active');
	    }
	});

	/* Tree chart open and close */

	$('.tree-chart-full-screen').hide();

	$('.full-screen-icon').on('click', function() { 
		$('.tree-chart-full-screen').show();
	}); 

	$('.tree-chart-close').on('click', function() { 
	    $('.tree-chart-full-screen').hide();
	});

	/* Tree chart full screen adding extra columns */

	$('#add-extra-column').on('change', function() {

	     switch (this.value) 
	      	  {
	      	  	case 'dependencies':
	      	  	$(".common-dependencies").show();
	      	  	$(".common-plan").hide();
	      	  	break;

	      	  	case 'plan':
	      	  	$(".common-plan").show();
	      	  	$(".common-dependencies").hide();
	      	  	break;

	      	  	default:
	      	  	$(".common-dependencies").hide();
		 		$(".common-plan").hide();
		 		break;
	      	  }  
	});

	/* Emulation presentation prototype */

	$('.run-button').on('click', function() { 
	    $('.run-emulator, .emulator-overlay').hide();
	});

	/* Browsing filters on archival thumb grid */

	$('#filter-variants').on('change', function() {

	      if (this.value === 'artworks')
		      {
		        $(".artwork-element").show();
		        $(".variant-element").hide();
		        $(".other-element-1").show(); 
		        $(".other-element-2").hide();
		      }

	      else if (this.value === 'variants')
		      {  
		      	$(".artwork-element").hide();
		        $(".variant-element").show();
		        $(".other-element-1").show(); 
		        $(".other-element-2").hide();  
		      }

		  else if (this.value === 'everything')
		      {
		        $(".other-element-1").hide(); 
		        $(".other-element-2").show(); 
		      }
	});

	
});

