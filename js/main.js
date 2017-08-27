/* responsive navigation */
$(document).ready(function() {

	// Create the dropdown base
	$("<select />").appendTo("nav");

	// Create default option "Go to..."
	$("<option />", {
	   "selected": "selected",
	   "value"   : "",
	   "text"    : "Go to..."
	}).appendTo("nav select");

	// Populate dropdown with menu items
	$("nav a").each(function() {
	 var el = $(this);
	 $("<option />", {
	     "value"   : el.attr("href"),
	     "text"    : el.text()
	 }).appendTo("nav select");
	});

	$("nav select").change(function() {
 	window.location = $(this).find("option:selected").val();
	});

});

  $(".animsition").animsition({
    inClass: 'fade-in',
    outClass: 'fade-out',
    inDuration: 1500,
    outDuration: 800,
    linkElement: '.animsition-link',
    // e.g. linkElement: 'a:not([target="_blank"]):not([href^="#"])'
    loading: true,
    loadingParentElement: 'body', //animsition wrapper element
    loadingClass: 'animsition-loading',
    loadingInner: '', // e.g '<img src="loading.svg" />'
    timeout: false,
    timeoutCountdown: 5000,
    onLoadEvent: true,
    browser: [ 'animation-duration', '-webkit-animation-duration'],
    // "browser" option allows you to disable the "animsition" in case the css property in the array is not supported by your browser.
    // The default setting is to disable the "animsition" in a browser that does not support "animation-duration".
    overlay : false,
    overlayClass : 'animsition-overlay-slide',
    overlayParentElement : 'body',
    transition: function(url){ window.location.href = url; }
  });


	$('#contact_form').bootstrapValidator({
	        // To use feedback icons, ensure that you use Bootstrap v3.1.0 or later
	        feedbackIcons: {
	            valid: 'glyphicon glyphicon-ok',
	            invalid: 'glyphicon glyphicon-remove',
	            validating: 'glyphicon glyphicon-refresh'
	        },
	        fields: {
	            first_name: {
	                validators: {
	                        stringLength: {
	                        min: 2,
	                    },
	                        notEmpty: {
	                        message: 'Please supply your first name'
	                    }
	                }
	            },
	             last_name: {
	                validators: {
	                     stringLength: {
	                        min: 2,
	                    },
	                    notEmpty: {
	                        message: 'Please supply your last name'
	                    }
	                }
	            },
	            email: {
	                validators: {
	                    notEmpty: {
	                        message: 'Please supply your email address'
	                    },
	                    emailAddress: {
	                        message: 'Please supply a valid email address'
	                    }
	                }
	            },
	            phone: {
	                validators: {
	                    notEmpty: {
	                        message: 'Please supply your phone number'
	                    },
	                    phone: {
	                        country: 'US',
	                        message: 'Please supply a vaild phone number with area code'
	                    }
	                }
	            },
	            address: {
	                validators: {
	                     stringLength: {
	                        min: 8,
	                    },
	                    notEmpty: {
	                        message: 'Please supply your street address'
	                    }
	                }
	            },
	            city: {
	                validators: {
	                     stringLength: {
	                        min: 4,
	                    },
	                    notEmpty: {
	                        message: 'Please supply your city'
	                    }
	                }
	            },
	            state: {
	                validators: {
	                    notEmpty: {
	                        message: 'Please select your state'
	                    }
	                }
	            },
	            zip: {
	                validators: {
	                    notEmpty: {
	                        message: 'Please supply your zip code'
	                    },
	                    zipCode: {
	                        country: 'US',
	                        message: 'Please supply a vaild zip code'
	                    }
	                }
	            },
	            comment: {
	                validators: {
	                      stringLength: {
	                        min: 10,
	                        max: 200,
	                        message:'Please enter at least 10 characters and no more than 200'
	                    },
	                    notEmpty: {
	                        message: 'Please supply a description of your project'
	                    }
	                    }
	                }
	            }
	        })
	        .on('success.form.bv', function(e) {
	            $('#success_message').slideDown({ opacity: "show" }, "slow") // Do something ...
	                $('#contact_form').data('bootstrapValidator').resetForm();

	            // Prevent form submission
	            e.preventDefault();

	            // Get the form instance
	            var $form = $(e.target);

	            // Get the BootstrapValidator instance
	            var bv = $form.data('bootstrapValidator');

	            // Use Ajax to submit form data
	            $.post($form.attr('action'), $form.serialize(), function(result) {
	                console.log(result);
	            }, 'json');
	        });
	
