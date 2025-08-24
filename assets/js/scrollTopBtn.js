document.addEventListener('DOMContentLoaded', function() {
	const scrollBtn = document.getElementById('scrollTopBtn');
	// Show/hide button on scroll
	window.addEventListener('scroll', function() {
		if (window.scrollY > 200) {
			scrollBtn.classList.add('visible');
			scrollBtn.classList.remove('fade-out');
		} else {
			scrollBtn.classList.remove('visible');
			scrollBtn.classList.add('fade-out');
		}
	});
	// Scroll to top on click
	scrollBtn.addEventListener('click', function() {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	});
});
