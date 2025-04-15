const container = document.getElementById("floating-background");

// List of image URLs (you can use your own transparent eco icons)
const icons = [
  "https://i.ibb.co/4Ng66rL/leaf.png",
  "https://i.ibb.co/bPhGrNr/recycle.png",
  "https://i.ibb.co/YXJ0fyL/globe.png",
  "https://i.ibb.co/vm1gqFP/plant.png"
];

function createFloatingImage() {
  const img = document.createElement("img");
  img.src = icons[Math.floor(Math.random() * icons.length)];
  img.className = "floating-icon";

  // Random position
  img.style.left = Math.random() * 100 + "vw";
  img.style.top = Math.random() * 100 + "vh";
  img.style.width = 30 + Math.random() * 50 + "px";
  img.style.animationDuration = 20 + Math.random() * 10 + "s";

  container.appendChild(img);

  // Remove after animation ends
  setTimeout(() => {
    container.removeChild(img);
  }, 30000);
}

// Create new floating icons every few seconds
setInterval(createFloatingImage, 2000);
