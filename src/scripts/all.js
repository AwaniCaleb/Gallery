// Function to add animations to target elements
function addAnimations(targetElements) {
    if (!Array.isArray(targetElements) && !(targetElements instanceof NodeList)) {
        return; // Ensure it's a valid list of elements
    }

    targetElements.forEach((item, index) => {
        const rect = item.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        // Check if the item is in view
        if (rect.top <= windowHeight - 10) { // 10px threshold for visibility
            item.classList.remove('not-in-view');
            item.classList.add('in-view');

            // Add a delay based on the index for variation
            item.style.transitionDelay = `${index * 0.05}s`;
        } else {
            item.classList.remove('in-view');
            item.classList.add('not-in-view');
        }
    });
}

// Add event listeners once the document has fully loaded
document.addEventListener("DOMContentLoaded", () => {
    // Select all elements with the class 'scroll-animate'
    const scrollAnimatedElements = document.querySelectorAll('.scroll-animate');

    // Add scroll and resize event listeners
    const handleScrollAndResize = () => addAnimations(scrollAnimatedElements);
    window.addEventListener('scroll', handleScrollAndResize);
    window.addEventListener('resize', handleScrollAndResize);

    // Trigger the animation check on load
    handleScrollAndResize();
});
