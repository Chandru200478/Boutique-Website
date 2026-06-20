// ==========================
// VASTRIKA JAVASCRIPT
// ==========================

document.addEventListener("DOMContentLoaded", function () {

    console.log("Vastrika Website Loaded Successfully");

    // Newsletter Form

    const newsletterForms =
        document.querySelectorAll(".newsletter form");

    newsletterForms.forEach(form => {

        form.addEventListener("submit", function (e) {

            e.preventDefault();

            alert(
                "Thank you for subscribing to Vastrika!"
            );

            form.reset();

        });

    });

    // Contact Form

    const contactForm =
        document.querySelector(".contact-form");

    if (contactForm) {

        contactForm.addEventListener("submit", function (e) {

            e.preventDefault();

            alert(
                "Your message has been sent successfully!"
            );

            contactForm.reset();

        });

    }

    // Login Form

    const loginForm =
        document.querySelector(".auth-form");

    if (loginForm) {

        loginForm.addEventListener("submit", function (e) {

            e.preventDefault();

            alert("Login Successful!");

        });

    }

});