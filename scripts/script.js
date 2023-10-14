// // Wait for the DOM to be fully loaded
// document.addEventListener("DOMContentLoaded", function() {
//     // Get all elements with class "truncate-text"
//     const elements = document.querySelectorAll(".truncate-text");

//     // Loop through each element and truncate the text to 12 words
//     elements.forEach(function(element) {
//         const words = element.textContent.split(" ");
//         if (words.length > 12) {
//             // Join the first 12 words and add an ellipsis at the end
//             const truncatedText = words.slice(0, 12).join(" ") + " ...";
//             // Set the truncated text to the element
//             element.textContent = truncatedText;
//         }
//     });
// });


// Your JavaScript code goes here

const hamburgerButton = document.getElementById('hamburger-button');
        const navigation = document.querySelector('.navigation');

        hamburgerButton.addEventListener('click', () => {
            navigation.classList.toggle('active');
            hamburgerButton.classList.toggle('active');
        });