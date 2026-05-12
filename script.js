// BUTTON MESSAGE

const startButtons = document.querySelectorAll(".btn-primary");

startButtons.forEach(button => {

  button.addEventListener("click", () => {

    alert("Welcome to GrowOS 🌱");

  });

});


// SIMPLE NOTIFICATION INTERACTION

const notifications = document.querySelectorAll(".notification");

notifications.forEach(note => {

  note.addEventListener("click", () => {

    note.style.opacity = "0.5";

    note.innerHTML += " ✅";

  });

});


// HERO TITLE ANIMATION

const heroTitle = document.querySelector(".hero h1");

heroTitle.style.opacity = "0";

setTimeout(() => {

  heroTitle.style.transition = "1.5s";
  heroTitle.style.opacity = "1";

}, 300);