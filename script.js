$(document).ready(function() {
	
	$('.pic').first().addClass('active-pic');

	$('.food').click(function() {

		// $('.food').first().addClass('active-food');

		// var $this = $(this),
		// 	$siblings = $this.parents('col-sm-4').children(),
		// 	position = $siblings.index($this);
		
		// $siblings.find('.active-food').removeClass('active-food');
		// $this.addClass('active-food');

		$(this).addClass('active-food').siblings('.active-food').removeClass('active-food');
	});
});