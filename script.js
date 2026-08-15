const text = "I  HAVE SOMETING SPESIAL FOR YOU";
    let index = 0;

    function typeEffect() {
      if (index < text.length) {
        document.getElementById("tulisan").textContent += text.charAt(index);
        index++;
        setTimeout(typeEffect, 200); // kecepatan mengetik (ms)
      }
    }

    window.onload = typeEffect;

 const canvas = document.getElementById("starfield");
const ctx = canvas.getContext("2d");

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener("resize", resizeCanvas);

class Star {
  constructor() {
    this.reset();
  }
  reset() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.radius = Math.random() * 2 + 1;
    this.speedY = 0.5 + Math.random() * 2;   // jatuh ke bawah
    this.speedX = (Math.random() - 0.5) * 1; // drift kiri/kanan
  }
  update() {
    this.y += this.speedY;
    this.x += this.speedX;
    if (this.y > canvas.height) {
      this.reset();
      this.y = 0; // muncul lagi dari atas
    }
  }
  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = "white";
    ctx.fill();
  }
}

let stars = [];
for (let i = 0; i < 200; i++) {
  stars.push(new Star());
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let star of stars) {
    star.update();
    star.draw();
  }
  requestAnimationFrame(animate);
}

animate();

