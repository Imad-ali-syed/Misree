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
  const heroStatus = document.getElementById("heroStatus");
  const statusDot = document.getElementById("statusDot");
  if (!statusText || !statusDot || !heroStatus) return;

  const now = new Date();
  const day = now.getDay(); // 0 Sun, 6 Sat
  const hour = now.getHours();
  const minute = now.getMinutes();
  const current = hour + minute / 60;

  let openHour = 9;
  let closeHour = day >= 5 || day === 0 ? 23 : 22;

  const isOpen = current >= openHour && current < closeHour;
  const openText = isOpen
    ? `Open now • Closes at ${formatHour(closeHour)}`
    : `Closed now • Opens at ${formatHour(openHour)}`;

  statusText.textContent = openText;
  heroStatus.textContent = isOpen ? "Open now" : "Closed now";

  if (isOpen) {
    statusDot.classList.add("open");
    statusDot.classList.remove("closed");
  } else {
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
