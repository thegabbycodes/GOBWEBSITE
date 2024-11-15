// JavaScript for additional functionality

// Simple form submission alert for demonstration purposes
document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Thank you for contacting us. We will get back to you soon!");
});

document.getElementById('join-us-button').addEventListener('click',function(){
    window.open('https://youtube.com/@cacgodofblessingchurch6991?si=JSJRtuOVy2IJMNMi','_blank');//Opens in a new tab
    });


const announcements = [
    { title: "Youth Retreat", details: "Join us for a youth retreat this Saturday.", date: "2024-11-14" },
    { title: "Christmas Choir", details: "Rehearsals start next week.", date: "2024-12-01" }
];

const announcementContainer = document.getElementById("announcements");

announcements.forEach(announcement => {
    let card = document.createElement("div");
    card.classList.add("announcement-card");
    card.innerHTML = `
        <h3>${announcement.title}</h3>
        <p>${announcement.details}</p>
        <button onclick="alert('${announcement.title}')">Learn More</button>
    `;
    announcementContainer.appendChild(card);
});

function startCountdown(targetDate) {
    const countdownElement = document.getElementById("countdown");
    setInterval(() => {
        const now = new Date();
        const timeLeft = new Date(targetDate) - now;
        
        if (timeLeft < 0) return; // Stop countdown if past target date

        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
        
        countdownElement.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    }, 1000);
}

// Start countdown for a specific event date
startCountdown("2024-12-25T10:00:00");

const sermons = [
    { title: "Faith and Hope", date: "2024-10-10", pastor: "Pastor John" },
    { title: "Love and Forgiveness", date: "2024-11-01", pastor: "Pastor Mary" }
];

// Get modal element
const donationModal = document.getElementById("donationModal");
// Get button that opens the modal
const donateButton = document.getElementById("donateButton");
// Get the <span> element that closes the modal
const closeButton = document.querySelector(".close");

// Open the modal when the donate button is clicked
donateButton.onclick = function() {
    donationModal.style.display = "block";
};

// Close the modal when the close button is clicked
closeButton.onclick = function() {
    donationModal.style.display = "none";
};

// Close the modal when clicking outside the modal content
window.onclick = function(event) {
    if (event.target == donationModal) {
        donationModal.style.display = "none";
    }
};

function filterSermons() {
    const searchTerm = document.getElementById("searchInput").value.toLowerCase();
    const filteredSermons = sermons.filter(sermon =>
        sermon.title.toLowerCase().includes(searchTerm)
    );
    renderSermons(filteredSermons);
}

function renderSermons(sermonsList) {
    const sermonContainer = document.getElementById("sermons");
    sermonContainer.innerHTML = "";
    sermonsList.forEach(sermon => {
        let card = document.createElement("div");
        card.classList.add("sermon-card");
        card.innerHTML = `<h3>${sermon.title}</h3><p>${sermon.date} - ${sermon.pastor}</p>`;
        sermonContainer.appendChild(card);
    });
}

document.getElementById("searchInput").addEventListener("input", filterSermons);
renderSermons(sermons); // Initial load of sermons

const images = ["image1.jpg", "image2.jpg", "image3.jpg"];
let currentImageIndex = 0;

function showNextImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    document.getElementById("hero").style.backgroundImage = url('${images[currentImageIndex]}');
}

setInterval(showNextImage, 3000); // Change image every 3 seconds

document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !message) {
        alert("Please fill out all fields.");
        return;
    }
    alert("Thank you for your message. We’ll get back to you soon!");
});

const testimonials = [
    "This church has changed my life for the better.",
    "A welcoming community and inspiring sermons!",
    "I feel at home here every Sunday."
];
let currentTestimonial = 0;

function showNextTestimonial() {
    const testimonialElement = document.getElementById("testimonial");
    testimonialElement.textContent = testimonials[currentTestimonial];
    currentTestimonial = (currentTestimonial + 1) % testimonials.length;
}

setInterval(showNextTestimonial, 5000); // Change testimonial every 5 seconds