document.addEventListener('DOMContentLoaded', function() {
	const scrollBtn = document.querySelector('.scroll_down_btn');
	const nextSection = document.querySelector('#projects');
	if (scrollBtn && nextSection) {
		scrollBtn.addEventListener('click', function() {
			nextSection.scrollIntoView({ behavior: 'smooth' });
		});
	}
});
// Fade out hero text on scroll
window.addEventListener('scroll', function() {
	const heroContent = document.querySelector('.hero_content');
	if (heroContent) {
		const maxFade = 300; // px to fully fade out
		const scrollY = window.scrollY;
		const opacity = Math.max(0, 1 - scrollY / maxFade);
		heroContent.style.opacity = opacity;
		heroContent.style.transform = `translateY(${scrollY / 8}px)`;
	}
});
