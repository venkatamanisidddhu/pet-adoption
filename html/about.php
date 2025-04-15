<?php
session_start();

?>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>About Us - PetFinder</title>
    <link rel="stylesheet" href="../css/style.css">
    <link rel="stylesheet" href="../css/about.css">
</head>
<body>
    <nav class="navbar">
        <div class="nav-container">
            <div class="logo">
                <img class="heart-icon" src="../imgs/heart-logo.png" alt="">
                 <a href="index.php" class="logo-text">PetFinder</a>
            </div>
            <button class="mobile-menu-btn">
                <img  class="menu" src="../imgs/menu-icon.png" alt="menu">
            </button>
            <div class="nav-links">
                <a href="index.php">Home</a>
                <a href="adopt.php">Adopt</a>
                <a href="about.php">About</a>
                <form action="<?php if(isset($_SESSION['name'])) { echo 'logout.php';}else{echo 'login.php';} ?>">
                <button class="sign-in-btn"><?php echo isset($_SESSION['name']) ? 'Logout' : 'Login'; ?></button>
                </form>
            </div>
        </div>
    </nav>

    <section class="about-hero">
        <div class="container">
            <div class="about-hero-content">
                <h1>Our Mission</h1>
                <p>We believe every pet deserves a loving home. Our mission is to connect wonderful pets with caring families, making the adoption process simple and joyful.</p>
            </div>
        </div>
    </section>


    <section class="our-story">
        <div class="container">
            <div class="story-grid">
                <div class="story-image">
                    <img src="../imgs/about-hero.avif" alt="Happy dogs and their owners">
                </div>
                <div class="story-content">
                    <h2>Our Story</h2>
                    <p>Founded in 2020, PetFinder has grown from a small local initiative to a nationwide platform connecting thousands of pets with their forever homes. We work with shelters and rescue organizations across the country to make pet adoption accessible to everyone.</p>
                    <p>Our team of dedicated animal lovers works tirelessly to ensure every pet finds the perfect match, and every adopter finds their ideal companion.</p>
                </div>
            </div>
        </div>
    </section>

    <section class="team-section">
        <div class="container">
            <h2>Meet Our Team</h2>
            <div class="team-grid">
                <div class="team-member">
                    <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=2070" alt="Sarah Johnson">
                    <h3>Sarah Johnson</h3>
                    <p class="role">Founder & CEO</p>
                    <p class="bio">With over 15 years of experience in animal welfare, Sarah leads our mission to connect pets with loving homes.</p>
                </div>
                <div class="team-member">
                    <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=2070" alt="Mike Thompson">
                    <h3>Mike Thompson</h3>
                    <p class="role">Head of Operations</p>
                    <p class="bio">Mike ensures our platform runs smoothly and our partner shelters have everything they need.</p>
                </div>
                <div class="team-member">
                    <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=2070" alt="Emily Chen">
                    <h3>Emily Chen</h3>
                    <p class="role">Veterinary Director</p>
                    <p class="bio">Dr. Chen oversees the health and well-being of all our shelter partners' pets.</p>
                </div>
            </div>
        </div>
    </section>


    <section class="impact-section">
        <div class="container">
            <h2>Our Impact</h2>
            <div class="impact-grid">
                <div class="impact-stat">
                    <div class="stat-number">10,000+</div>
                    <div class="stat-label">Pets Adopted</div>
                </div>
                <div class="impact-stat">
                    <div class="stat-number">200+</div>
                    <div class="stat-label">Partner Shelters</div>
                </div>
                <div class="impact-stat">
                    <div class="stat-number">50+</div>
                    <div class="stat-label">Cities Served</div>
                </div>
                <div class="impact-stat">
                    <div class="stat-number">$1M+</div>
                    <div class="stat-label">Donations Raised</div>
                </div>
            </div>
        </div>
    </section>


    <section class="contact-section">
        <div class="container">
            <div class="contact-grid">
                <div class="contact-info">
                    <h2>Get in Touch</h2>
                    <p>Have questions about adoption or want to become a partner? We'd love to hear from you!</p>
                    <div class="contact-details">
                        <div class="contact-item">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                            <span>(555) 123-4567</span>
                        </div>
                        <div class="contact-item">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                            <span>contact@petfinder.com</span>
                        </div>
                        <div class="contact-item">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                            <span>123 Pet Street, Anytown, ST 12345</span>
                        </div>
                    </div>
                </div>
                <div class="contact-form">
                    <form id="contactForm">
                        <div class="form-group">
                            <label for="name">Name</label>
                            <input type="text" id="name" required>
                        </div>
                        <div class="form-group">
                            <label for="email">Email</label>
                            <input type="email" id="email" required>
                        </div>
                        <div class="form-group">
                            <label for="message">Message</label>
                            <textarea id="message" rows="5" required></textarea>
                        </div>
                        <button type="submit" class="primary-btn">Send Message</button>
                    </form>
                </div>
            </div>
        </div>
    </section>

    <footer class="footer">
        <div class="container">
            <div class="footer-grid">
                <div class="footer-about">
                    <div class="footer-logo">
                        <img src="../imgs/heart-logo.png" class="heart-icon" alt="heart-icon">
                           <span class="logo-text">PetFinder</span>
                    </div>
                    <p>Making pet adoption easy, accessible, and enjoyable for everyone.</p>
                </div>
                <div class="footer-links">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><a href="index.php">Home</a></li>
                        <li><a href="about.php">About Us</a></li>
                        <li><a href="adopt.php">Adopt</a></li>
                    </ul>
                </div>
                <div class="footer-links">
                    <h3>Resources</h3>
                    <ul>
                        <li><a href="#">Pet Care Tips</a></li>
                        <li><a href="#">FAQs</a></li>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </div>
                <div class="footer-newsletter">
                    <h3>Newsletter</h3>
                    <p>Subscribe to get updates on new pets and success stories.</p>
                    <div class="newsletter-form">
                        <input type="email" placeholder="Enter your email">
                        <button>Subscribe</button>
                    </div>
                </div>
            </div>
            <div class="footer-bottom">
                <p>&copy; 2025 PetFinder. All rights reserved.</p>
            </div>
        </div>
    </footer>
</body>
<script src="../js/about.js"></script>
</html>