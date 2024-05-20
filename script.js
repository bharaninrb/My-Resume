// JavaScript for Email Link
// © 2024 N.R. Bharanidharan
// All rights reserved.
//
// This code is the proprietary and confidential property of N.R. Bharanidharan.
// Unauthorized copying of this file, via any medium, is strictly prohibited.
// Written by N.R. Bharanidharan <bharaninrb2002@gmail.com>, 2024.
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
