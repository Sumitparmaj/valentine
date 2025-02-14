document.addEventListener("DOMContentLoaded", () => {
    console.log("JavaScript Loaded!"); // Debugging: Check if JS is running

    const flowers = document.querySelectorAll(".flower");

    // Apply a growing effect to each flower with a delay
    flowers.forEach((flower, index) => {
        setTimeout(() => {
            flower.classList.add("bloom");
        }, index * 1000); // Staggered animation
    });
});
