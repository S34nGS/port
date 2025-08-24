document.addEventListener('DOMContentLoaded', function() {
    function slowScrollTo(target, duration = 500, offset = 80) {
        const start = window.scrollY;
        const end = target.getBoundingClientRect().top + window.scrollY - offset;
        const distance = end - start;

        let startTime = null;
        function animation(currentTime) {
            if (!startTime) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const progress = Math.min(timeElapsed / duration, 1);
            window.scrollTo(0, start + distance * easeInOutQuad(progress));
            if (progress < 1) {
                requestAnimationFrame(animation);
            }
        }
        function easeInOutQuad(t) {
            return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
        }
        requestAnimationFrame(animation);
    }

    // Hero scroll button
    const scrollBtn = document.querySelector('.scroll_down_btn');
    const nextSection = document.querySelector('#projects');
    if (scrollBtn && nextSection) {
        scrollBtn.addEventListener('click', function(e) {
            e.preventDefault();
            slowScrollTo(nextSection, 500, 80);
        });
    }

    // Navbar links
    const navbarLinks = document.querySelectorAll('.navbar a[href^="#"]');
    navbarLinks.forEach(function(link) {
        link.addEventListener('click', function(e) {
            const targetId = link.getAttribute('href').replace('#', '');
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                e.preventDefault();
                slowScrollTo(targetSection, 500, 80);
            }
        });
    });
});