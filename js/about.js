const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value
    };

    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    contactForm.reset();
});

const newsletterForm = document.querySelector('.newsletter-form');
newsletterForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = newsletterForm.querySelector('input[type="email"]').value;
    if (email) {
        console.log('Newsletter subscription:', email);
        alert('Thank you for subscribing to our newsletter!');
        newsletterForm.reset();
    }
});