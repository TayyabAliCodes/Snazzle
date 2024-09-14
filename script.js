let slideIndex = 0;
let slides = document.getElementsByClassName("slide");
let dots = document.getElementsByClassName("dot");

showSlides(slideIndex);

// Next/previous controls
function moveSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n - 1);
}

// Main function to show slides
function showSlides(n) {
    if (n >= slides.length) {
        slideIndex = 0; // Wrap around forward
    }
    if (n < 0) {
        slideIndex = slides.length - 1; // Wrap around backward
    }
    
    // Hide all slides
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }

    // Remove active class from dots
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    // Show current slide
    slides[slideIndex].style.display = "block";  
    dots[slideIndex].className += " active";
}

// Auto slide every 5 seconds
setInterval(() => moveSlides(1), 5000);
