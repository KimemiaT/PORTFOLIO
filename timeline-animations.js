document.addEventListener('DOMContentLoaded', function() {
    // Get all animatable elements
    const animatableElements = [
        ...document.querySelectorAll('.timeline-container'),
        ...document.querySelectorAll('.timeline-section'),
        ...document.querySelectorAll('.timeline-item'),
        ...document.querySelectorAll('.tech-stack-section'),
        ...document.querySelectorAll('.tech-category'),
        ...document.querySelectorAll('.tech-item')
    ];
    
    // Function to check if element is in viewport
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.75
        );
    }
    
    // Function to add visible class
    function animateOnScroll() {
        animatableElements.forEach(element => {
            if (isInViewport(element)) {
                element.classList.add('visible');
            }
        });
    }
    
    // Initial check
    animateOnScroll();
    
    // Check on scroll with debounce
    let isScrolling;
    window.addEventListener('scroll', function() {
        clearTimeout(isScrolling);
        isScrolling = setTimeout(animateOnScroll, 50);
    }, { passive: true });
    
    // Add staggered delays for timeline items
    document.querySelectorAll('.timeline-section').forEach((section, sectionIndex) => {
        section.style.transitionDelay = `${sectionIndex * 0.1}s`;
        
        const items = section.querySelectorAll('.timeline-item');
        items.forEach((item, itemIndex) => {
            item.style.transitionDelay = `${(sectionIndex * 0.1) + (itemIndex * 0.15)}s`;
            
            const listItems = item.querySelectorAll('li');
            listItems.forEach((li, liIndex) => {
                li.style.transitionDelay = `${(sectionIndex * 0.1) + (itemIndex * 0.15) + (liIndex * 0.1)}s`;
            });
        });
    });
});