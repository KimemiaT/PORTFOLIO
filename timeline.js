document.addEventListener('DOMContentLoaded', function() {
    // Get all elements to animate
    const sections = document.querySelectorAll('.timeline-section, .tech-stack-section');
    const timelineItems = document.querySelectorAll('.timeline-item');
    const techCategories = document.querySelectorAll('.tech-category');
    
    // Function to check if element is in viewport
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.75
        );
    }
    
    // Function to add visible class
    function animateElements() {
        // Animate sections
        sections.forEach(section => {
            if (isInViewport(section)) {
                section.classList.add('visible');
            }
        });
        
        // Animate timeline items with delay
        timelineItems.forEach((item, index) => {
            if (isInViewport(item)) {
                setTimeout(() => {
                    item.classList.add('visible');
                }, index * 100);
            }
        });
        
        // Animate tech categories with delay
        techCategories.forEach((category, index) => {
            if (isInViewport(category)) {
                setTimeout(() => {
                    category.classList.add('visible');
                }, index * 150);
            }
        });
    }
    
    // Initial check
    animateElements();
    
    // Check on scroll
    window.addEventListener('scroll', animateElements);
    
    // Add animation delay for each item
    timelineItems.forEach((item, index) => {
        item.style.transitionDelay = `${index * 0.1}s`;
    });
    
    techCategories.forEach((category, index) => {
        category.style.transitionDelay = `${index * 0.15}s`;
    });
});