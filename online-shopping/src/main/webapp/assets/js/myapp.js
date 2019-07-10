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
	
	default:
		$('#home').addClass('active');
		break;
	}
	
});