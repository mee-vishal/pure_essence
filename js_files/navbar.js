// Create a function to inject the navbar HTML
function loadNavbar() {
    const navbarHTML = `
    <!-- Navigation -->
    <nav class="navbar">
        <button class="mobile-menu-btn"><i class="fas fa-bars"></i></button>
        <ul class="nav-links">
            <li>
                <a href="#">
                    <svg class="nav-icon" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-2-9V7h4v4h-4zm0 6v-4h4v4h-4z"/>
                    </svg>
                    Makeup
                </a>
                <div class="dropdown">
                    <div class="dropdown-column">
                        <div class="dropdown-category">
                            <h4>Face</h4>
                            <a href="foundations.html">Foundation</a>
                            <a href="#">Concealer</a>
                            <a href="#">Powder</a>
                            <a href="#">Blush</a>
                        </div>
                        <div class="dropdown-category">
                            <h4>Eyes</h4>
                            <a href="#">Eyeshadow</a>
                            <a href="#">Eyeliner</a>
                            <a href="#">Mascara</a>
                            <a href="#">Brows</a>
                        </div>
                        <div class="dropdown-category">
                            <h4>Lips</h4>
                            <a href="#">Lipstick</a>
                            <a href="#">Lip Gloss</a>
                            <a href="#">Lip Liner</a>
                            <a href="#">Lip Balm</a>
                        </div>
                        <div class="dropdown-image"></div>
                    </div>
                </div>
            </li>
            <li><a href="#"><svg class="nav-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-2-9V7h4v4h-4zm0 6v-4h4v4h-4z"/></svg>Skincare</a></li>
            <li><a href="#"><svg class="nav-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-2-9V7h4v4h-4zm0 6v-4h4v4h-4z"/></svg>Haircare</a></li>
            <li><a href="#"><svg class="nav-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-2-9V7h4v4h-4zm0 6v-4h4v4h-4z"/></svg>Appliances</a></li>
            <li><a href="#"><svg class="nav-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 8-3.59 8-8 8zm-2-9V7h4v4h-4zm0 6v-4h4v4h-4z"/></svg>Brands</a></li>
        </ul>
    </nav>
    `;

    // Insert navbar inside the element with id="navbar-container"
    document.getElementById("navbar-container").innerHTML = navbarHTML;
}

// Load navbar after DOM is ready
document.addEventListener("DOMContentLoaded", function() {
    // Your navbar JavaScript code here
});
