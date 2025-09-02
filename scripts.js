// Sidebar
const sidebar = document.getElementById("mySidebar");
const menuBtn = document.getElementById("menu-btn");

if (menuBtn) {
  menuBtn.onclick = function () {
    sidebar.style.width = sidebar.style.width === "250px" ? "0" : "250px";
  };
}

function closeNav() {
  sidebar.style.width = "0";
}

function showPage(pageId) {
  const pages = document.querySelectorAll(".page");
  pages.forEach((page) => (page.style.display = "none"));
  document.getElementById(pageId).style.display = "block";
  closeNav();
}

// === Pilots Carousel (3D) ===
const pilotsCarousel = document.getElementById("carousel");
if (pilotsCarousel) {
  const cards = pilotsCarousel.getElementsByClassName("card");
  const cardCount = cards.length;
  const angleStep = 360 / cardCount;
  let pilotsAngle = 0;

  function positionPilots() {
    for (let i = 0; i < cardCount; i++) {
      const cardAngle = i * angleStep + pilotsAngle;
      cards[i].style.transform = `rotateY(${cardAngle}deg) translateZ(400px)`;
    }
  }

  window.rotatePilotsCarousel = function (direction) {
    pilotsAngle += direction * angleStep;
    positionPilots();
  };

  positionPilots();
}

// === Ships Carousel (3D) ===
const shipsCarousel = document.getElementById("carousel3D");
if (shipsCarousel) {
  const items = shipsCarousel.getElementsByClassName("carousel-item3D");
  const itemCount = items.length;
  const angleStep = 360 / itemCount;
  let shipsAngle = 0;

  function positionShips() {
    for (let i = 0; i < itemCount; i++) {
      const itemAngle = i * angleStep + shipsAngle;
      items[i].style.transform = `rotateY(${itemAngle}deg) translateZ(500px)`;
    }
  }

  window.rotateCarousel = function (direction) {
    shipsAngle += direction * angleStep;
    positionShips();
  };

  positionShips();
}
