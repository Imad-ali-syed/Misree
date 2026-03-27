const mobileToggle = document.getElementById("mobileToggle");
const mobileNav = document.getElementById("mobileNav");

if (mobileToggle && mobileNav) {
  mobileToggle.addEventListener("click", () => {
    mobileNav.classList.toggle("open");
  });

  mobileNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      mobileNav.classList.remove("open");
    });
  });
}

const filterButtons = document.querySelectorAll(".filter-btn");
const menuCards = document.querySelectorAll(".menu-card");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter;

    filterButtons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");

    menuCards.forEach((card) => {
      const category = card.dataset.category;
      const show = filter === "all" || category === filter;
      card.classList.toggle("hidden", !show);
    });
  });
});

function updateCafeStatus() {
  const statusText = document.getElementById("openStatus");
  const statusDot = document.getElementById("statusDot");
  if (!statusText || !statusDot) return;

  const now = new Date();
  const day = now.getDay(); // 0 Sunday, 6 Saturday
  const hour = now.getHours();
  const minute = now.getMinutes();
  const current = hour + minute / 60;

  let openHour;
  let closeHour;

  if (day >= 1 && day <= 4) {
    openHour = 8;
    closeHour = 21;
  } else {
    openHour = 9;
    closeHour = 23;
  }

  const isOpen = current >= openHour && current < closeHour;

  if (isOpen) {
    statusText.textContent = `Open now • Closes at ${formatHour(closeHour)}`;
    statusDot.classList.add("open");
    statusDot.classList.remove("closed");
  } else {
    statusText.textContent = `Closed now • Opens at ${formatHour(openHour)}`;
    statusDot.classList.add("closed");
    statusDot.classList.remove("open");
  }
}

function formatHour(hour24) {
  const suffix = hour24 >= 12 ? "PM" : "AM";
  let hour12 = hour24 % 12;
  if (hour12 === 0) hour12 = 12;
  return `${hour12}:00 ${suffix}`;
}

updateCafeStatus();

const contactForm = document.getElementById("contactForm");
const formNote = document.getElementById("formNote");

if (contactForm && formNote) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("name")?.value.trim();
    const email = document.getElementById("email")?.value.trim();
    const message = document.getElementById("message")?.value.trim();

    if (!name || !email || !message) {
      formNote.textContent = "Please fill out all fields.";
      return;
    }

    formNote.textContent = "Thanks — your message has been noted. Connect this form to Formspree or Netlify Forms to receive real emails.";
    contactForm.reset();
  });
}