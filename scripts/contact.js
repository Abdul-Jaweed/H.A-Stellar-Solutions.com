document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault();

    var formData = new FormData(this);

    fetch("https://script.google.com/macros/s/AKfycbywScb1vOm_1234567890abcdefghijklmnopqrstuvwxyz/exec", {
        method: "POST",
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        if (data.result === "success") {
            alert("Form submitted successfully!");
            // Optionally, redirect to a thank you page.
            // window.location.href = "thankyou.html";
        } else {
            alert("Form submission failed. Please try again later.");
        }
    })
    .catch(error => {
        console.error("Error:", error);
        alert("Form submission failed. Please check your internet connection and try again.");
    });
});
