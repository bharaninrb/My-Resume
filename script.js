// JavaScript for Email Link
const emailLink = document.querySelector(".email a");
emailLink.addEventListener("click", function (event) {
  event.preventDefault();
  const email = emailLink.textContent;
  window.location.href = `mailto:${email}`;
});

// JavaScript for Phone Numbers
const phoneLinks = document.querySelectorAll(".phone a");
phoneLinks.forEach((link) => {
  link.addEventListener("click", function (event) {
    event.preventDefault();
    const phoneNumber = link.textContent.replace(/\s/g, "");
    window.location.href = `tel:${phoneNumber}`;
  });
});
