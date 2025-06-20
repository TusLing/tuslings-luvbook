document.addEventListener("DOMContentLoaded", function () {
  const colors = ["#ffd6e0", "#ffe5ec", "#ffb3c1"];
  const hearts = [];

  function createHeart() {
    const heart = document.createElement("div");
    heart.textContent = "💗";
    heart.style.position = "fixed";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.top = "-30px";
    heart.style.fontSize = "20px";
    heart.style.color = colors[Math.floor(Math.random() * colors.length)];
    heart.style.pointerEvents = "none";
    document.body.appendChild(heart);
    hearts.push({ el: heart, y: 0 });
  }

  function animateHearts() {
    hearts.forEach((heart, i) => {
      heart.y += 2;
      heart.el.style.top = heart.y + "px";
      if (heart.y > window.innerHeight) {
        heart.el.remove();
        hearts.splice(i, 1);
      }
    });
    requestAnimationFrame(animateHearts);
  }

  setInterval(createHeart, 300);
  animateHearts();
});
