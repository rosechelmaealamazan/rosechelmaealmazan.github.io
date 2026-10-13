document.addEventListener("DOMContentLoaded", function() {
    const contactForm = document.querySelector("#contact form") || document.querySelector("form");

    if (contactForm) {
        contactForm.addEventListener("submit", function(e) {
            e.preventDefault(); // Stop the page from reloading
            
            // Pop-up thank you message
            alert("Thank you!");
            
            // Clear the form input fields
            contactForm.reset();
        });
    }
    // Dark / Light Mode Switch
const themeBtn = document.getElementById("theme-toggle");

if (themeBtn) {
    themeBtn.addEventListener("click", function() {
        document.body.classList.toggle("dark-mode");

        if (document.body.classList.contains("dark-mode")) {
            themeBtn.textContent = "☀️ Light Mode";
        } else {
            themeBtn.textContent = "🌙 Dark Mode";
        }
    });
}
    
});
