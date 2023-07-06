// scroll to top functionality
const scrollUp = document.querySelector("#scroll-up");

scrollUp.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});

// Nav hamburgerburger selections

const burger = document.querySelector("#burger-menu");
const ul = document.querySelector("nav ul");
const nav = document.querySelector("nav");

burger.addEventListener("click", () => {
    ul.classList.toggle("show");
});

// Close hamburger menu when a link is clicked

// Select nav links
const navLink = document.querySelectorAll(".nav-link");

navLink.forEach((link) =>
  link.addEventListener("click", () => {
    ul.classList.remove("show");
  })
);

// Scroll to centered content on link click
document.addEventListener('DOMContentLoaded', function() {
  var navLinks = document.querySelectorAll('.nav-link');

  navLinks.forEach(function(link) {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      var target = document.querySelector(this.getAttribute('href'));
      var offset = (window.innerHeight - target.offsetHeight) / 2; // Calculate vertical offset
      target.classList.add('centered-content');
      document.body.classList.add('centered');
      document.body.style.paddingTop = offset + 'px'; // Apply vertical offset

      setTimeout(function() {
        target.classList.remove('centered-content');
        document.body.classList.remove('centered');
        document.body.style.paddingTop = ''; // Remove vertical offset
        window.location.href = link.getAttribute('href');
      }, 0); // Adjust the timeout duration as needed
    });
  });
});
