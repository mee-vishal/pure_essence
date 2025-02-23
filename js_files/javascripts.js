 // Scroll functionality
 const productsContainer = document.querySelector('.products');
 const leftArrow = document.querySelector('.left-arrow');
 const rightArrow = document.querySelector('.right-arrow');

 rightArrow.addEventListener('click', () => {
     productsContainer.scrollBy({
         left: 300,
         behavior: 'smooth'
     });
 });

 leftArrow.addEventListener('click', () => {
     productsContainer.scrollBy({
         left: -300,
         behavior: 'smooth'
     });
 });

 // Hover effect
 document.querySelectorAll('.product-card').forEach(card => {
     card.addEventListener('mouseenter', () => {
         card.style.transform = 'translateX(10px)';
     });
     
     card.addEventListener('mouseleave', () => {
         card.style.transform = 'translateX(0)';
     });
 });

 // Dropdown functionality
 document.querySelectorAll('.nav-links li').forEach(item => {
     item.addEventListener('mouseover', () => {
         item.querySelector('.dropdown').style.display = 'block';
     });
     item.addEventListener('mouseout', () => {
         item.querySelector('.dropdown').style.display = 'none';
     });
 });




 // navbar

 document.querySelector('.mobile-menu-btn').addEventListener('click', () => {
const navLinks = document.querySelector('.nav-links');
navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
});

// Close dropdown when clicking outside
document.addEventListener('click', (e) => {
if (!e.target.closest('.nav-links li')) {
 document.querySelectorAll('.dropdown').forEach(dropdown => {
     dropdown.style.opacity = '0';
     dropdown.style.transform = 'translateY(10px)';
 });
}
});
 // navbar



//  %off
document.addEventListener('DOMContentLoaded', function() {
    const track = document.querySelector('.carousel-track');
    const slides = document.querySelectorAll('.carousel-slide');
    let index = 1;
    const slideCount = slides.length;

    // Initialize carousel with clone slides
    track.appendChild(slides[0].cloneNode(true));
    track.insertBefore(slides[slideCount - 1].cloneNode(true), slides[0]);

    setInterval(() => {
        index++;
        track.style.transition = 'transform 0.5s ease-in-out';
        track.style.transform = `translateX(-${index * 100}%)`;

        // Reset position for infinite loop
        if (index === slideCount + 1) {
            setTimeout(() => {
                track.style.transition = 'none';
                index = 1;
                track.style.transform = `translateX(-${index * 100}%)`;
            }, 500);
        }
    }, 3000); // Change slide every 3 seconds
});



// faqs
document.querySelectorAll('.faq-item').forEach(item => {
    item.addEventListener('click', () => {
        item.classList.toggle('active');
        
        // Close other items when opening a new one
        document.querySelectorAll('.faq-item').forEach(otherItem => {
            if(otherItem !== item && otherItem.classList.contains('active')) {
                otherItem.classList.remove('active');
            }
        });
    });
});




// responsive navbar

document.addEventListener('DOMContentLoaded', function() {
    const mobileBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');

    mobileBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.navbar')) {
            navLinks.classList.remove('active');
        }
    });
});