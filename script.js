document.addEventListener("DOMContentLoaded", function() {
    let lastScrollY = window.scrollY;

    // Function to handle animations
    const handleAnimations = () => {
        const currentScrollY = window.scrollY;
        const scrollDirection = currentScrollY > lastScrollY ? 'down' : 'up';

        if (scrollDirection === 'up') {
            // Add animations when scrolling up
            document.querySelector('.March').classList.add('animate__pulse');
            document.querySelector('.Bsit3C').classList.add('animate__pulse');
            document.querySelector('.ImagePhotoroom11').classList.add('animate__fadeIn');
            document.querySelector('.IMPassionateAboutDesignTheArtOfCodingAndEverythingConnectedToArt').classList.add('animate__fadeIn');
        } else {
            // Remove animations when scrolling down
            document.querySelector('.March').classList.remove('animate__pulse');
            document.querySelector('.Bsit3C').classList.remove('animate__pulse');
            document.querySelector('.ImagePhotoroom11').classList.remove('animate__fadeIn');
            document.querySelector('.IMPassionateAboutDesignTheArtOfCodingAndEverythingConnectedToArt').classList.remove('animate__fadeIn');
        }

        lastScrollY = currentScrollY;  // Update last scroll position
    };

    // Handle animations on scroll
    window.addEventListener('scroll', handleAnimations);

    // Handle animations on page load
    handleAnimations(); // Initial check to handle animations based on current scroll position


    // Hover events for 'March'
    const marchElement = document.querySelector('.March');
    marchElement.addEventListener('mouseover', () => {
        marchElement.classList.add('animate__pulse');
    });
    marchElement.addEventListener('mouseout', () => {
        marchElement.classList.remove('animate__pulse');
    });

    // Hover events for 'Bsit3C'
    const bsit3CElement = document.querySelector('.Bsit3C');
    bsit3CElement.addEventListener('mouseover', () => {
        bsit3CElement.classList.add('animate__pulse');
    });
    bsit3CElement.addEventListener('mouseout', () => {
        bsit3CElement.classList.remove('animate__pulse');
    });

    // Hover events for 'HelloIMMarchel'
    const helloIMMarchelElement = document.querySelector('.HelloIMMarchel');
    helloIMMarchelElement.addEventListener('mouseover', () => {
        helloIMMarchelElement.classList.add('animate__pulse');
    });
    helloIMMarchelElement.addEventListener('mouseout', () => {
        helloIMMarchelElement.classList.remove('animate__pulse');
    });

    

});

document.addEventListener("DOMContentLoaded", function() {
    let lastScrollY = window.scrollY;

    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
        );
    }

    window.addEventListener('scroll', () => {
        const currentScrollY = window.scrollY;
        const scrollDirection = currentScrollY > lastScrollY ? 'down' : 'up';

        const helloIMMarchel = document.querySelector('.HelloIMMarchel');
        const myNameIsMarchel = document.querySelector('.MyNameIsMarchelLagahitNgujoYouCanCallMeMarchIMA20YearOld3rdYearBsitStudentFromSection3cAtCordovaPublicCollege');
        const march302004 = document.querySelector('.March302004');
        const filipino = document.querySelector('.Filipino');
        const majorSubject = document.querySelector('.MajorSubjectPerYearLevel');

        if (scrollDirection === 'down') {
            // Only add animations if elements are in the viewport
            if (isInViewport(helloIMMarchel)) {
                helloIMMarchel.classList.add('animate__pulse');
            }
            if (isInViewport(myNameIsMarchel)) {
                myNameIsMarchel.classList.add('animate__pulse');
            }
            if (isInViewport(march302004)) {
                march302004.classList.add('animate__fadeInUp');
            }
            if (isInViewport(filipino)) {
                filipino.classList.add('animate__fadeInUp');
            }
            if (isInViewport(majorSubject)) {
                majorSubject.classList.add('animate__swing');
            }
        } else {
            // Optional: Remove animations when scrolling up (if desired)
            helloIMMarchel.classList.remove('animate__pulse');
            myNameIsMarchel.classList.remove('animate__pulse');
            march302004.classList.remove('animate__fadeInUp');
            filipino.classList.remove('animate__fadeInUp');
            majorSubject.classList.remove('animate__swing');
        }

        lastScrollY = currentScrollY;  // Update last scroll position
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const refreshIcon = document.getElementById('refresh-icon');
    if (refreshIcon) {
        refreshIcon.addEventListener('click', function() {
            location.reload(); // Refreshes the page
        });
    }
});

    document.addEventListener('DOMContentLoaded', function() {
        const scrollToTopIcon = document.getElementById('scroll-to-top');
        if (scrollToTopIcon) {
            scrollToTopIcon.addEventListener('click', function() {
                window.scrollTo({ top: 0, behavior: 'smooth' }); // Smoothly scrolls to the top
            });
        }
    });


