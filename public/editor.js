$(document).ready(function() {
	
	$('#submit').click(function() {
	  $('#editor_form').submit();
	});
	 // When using more than one `textarea` on your page, change the following line to match the one you’re after
	 var $textarea = $('#textarea'),
	     $preview = $('#preview'),
		 $code=$("#text"),
	     converter = new Showdown.converter();
	
	 $textarea.keyup(function() {
	  	var html=converter.makeHtml($textarea.val());
	  	$preview.html(html);
	 	// $code.text(html);
	 }).trigger('keyup');

	

	$('#show').toggle(function() {
	    $('#preview').animate({
			bottom:'0',
			height:"90%"
		}, 500);
	},
	function(){
		$('#preview').animate({
			bottom:'-100px',
			height:"0"
		}, 500);
		$('#textarea').animate({
			height:"550px"
		},500);
	});
	
	$('#halfAndHalf').toggle(
	function()
	{
	  	$('#preview').animate({
			bottom:"0px",
			height:"300px"
		},500);
		
		$('#textarea').animate({
			height:"250px"
		},500);
	},
	function()
	{
	  	$('#preview').animate({
			bottom:"-100px",
			height:"0"
		},500);
		
		$('#textarea').animate({
			height:"550px"
		},500);

	});
	    
	
	
	
	$("h2.trigger").css("cursor","pointer").toggle(function(){  
	    $(this).addClass("active");  
	  }, function () {  
	  $(this).removeClass("active");  
	});
});