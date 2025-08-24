window.addEventListener('pageshow', function(event) {
	if (event.persisted || performance.navigation.type === 1) {
		window.scrollTo({ top: 0, behavior: 'auto' });
	}
});
