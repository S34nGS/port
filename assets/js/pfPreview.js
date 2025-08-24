document.addEventListener('DOMContentLoaded', function() {
    // Define projects and their images
    const projects = [
        {
            name: 'UneedIT',
            images: [
				'assets/img/projectImages/UneedIT/homepage.png',
				'assets/img/projectImages/UneedIT/service.png',
				'assets/img/projectImages/UneedIT/aanvraag.png'
			]
        },
        {
            name: 'Skate Game',
            images: [
				'assets/img/projectImages/Skate/homepage.png', 
				'assets/img/projectImages/Skate/game.png'
			]
        },
        {
            name: 'Project 3',
            images: ['assets/img/projectImages/project3.jpg', 'assets/img/projectImages/project3b.jpg', 'assets/img/projectImages/project3c.jpg']
        }
    ];

    const pfTextItems = document.querySelectorAll('.pf_text_item');
    const previewImg = document.getElementById('previewImg');
    const arrowLeft = document.getElementById('arrowLeft');
    const arrowRight = document.getElementById('arrowRight');

    let currentProjectIndex = 0;
    let currentImageIndex = 0;

    function updatePreview() {
        const project = projects[currentProjectIndex];
        previewImg.src = project.images[currentImageIndex];
        previewImg.alt = `${project.name} image ${currentImageIndex + 1}`;
    }

    pfTextItems.forEach((item, idx) => {
        item.addEventListener('click', function() {
            pfTextItems.forEach(i => i.classList.remove('active'));
            item.classList.add('active');
            currentProjectIndex = idx;
            currentImageIndex = 0;
            updatePreview();
        });
    });

    arrowLeft.addEventListener('click', function() {
        const images = projects[currentProjectIndex].images;
        currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
        updatePreview();
    });

    arrowRight.addEventListener('click', function() {
        const images = projects[currentProjectIndex].images;
        currentImageIndex = (currentImageIndex + 1) % images.length;
        updatePreview();
    });

    // Initialize first project
    pfTextItems[0].classList.add('active');
    updatePreview();
});