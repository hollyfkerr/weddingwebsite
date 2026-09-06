document.getElementById("year").textContent = new Date().getFullYear();

const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");

navToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
});

navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    navToggle.setAttribute("aria-expanded", "false");
  });
});

const rsvpForm = document.getElementById("rsvpForm");
const formNote = document.getElementById("formNote");

if (rsvpForm) {
  rsvpForm.addEventListener("submit", (event) => {
    event.preventDefault();
    formNote.textContent = "Thank you! This form isn't connected to anything yet — see the note below on wiring it up.";
  });
}
