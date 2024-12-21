
jQuery(document).ready(function($){
	
	"use strict";
	
	if(jQuery().owlCarousel){
		
		jQuery("#parentTestimonial").owlCarousel({
			loop:true,
			margin:10,
			responsiveClass:true,
			responsive:{
				0:{
					items:1,
					nav:true,
					loop: true
				},
				991:{
					items:1,
					nav:true,
					loop: true
				},
				1170:{
					items:2,
					nav:true,
					loop:true
				}
			}		
		});
		
		
		jQuery("#ourTeacher").owlCarousel({
			loop:true,
			margin:10,
			responsiveClass:true,
			responsive:{
				0:{
					items:1,
					nav:true,
					loop: true
				},
				991:{
					items:2,
					nav:true,
					loop: true
				},
				1170:{
					items:3,
					nav:true,
					loop:true
				}
			}		
		});
	}
	
	jQuery("#studentDOB").datepicker();
	jQuery("#dptDate").datepicker();
	

	jQuery( "#pAccordion" ).accordion({
		collapsible:true,
		icons: { "header": "fa fa-plus", "activeHeader": "fa fa-minus" },
		heightStyle: "content"
	});
});
