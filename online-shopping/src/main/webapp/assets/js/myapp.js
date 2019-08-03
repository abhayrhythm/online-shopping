$(function() {
	// solving active menu problem
	switch (menu) {
	case 'About Us':
		// make class active
		$('#about').addClass('active');
		break;
	case 'Contact Us':
		$('#contact').addClass('active');
		break;

	case 'All Products':
		$('#listProducts').addClass('active');
		break;

	default:
		$('#listProducts').addClass('active');
		$('#a_' + menu).addClass('active');

		break;
	}

});